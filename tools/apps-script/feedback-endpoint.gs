/**
 * KyudaiGuide 反馈接收端（Google Apps Script）
 *
 * 部署：编辑器右上「部署」→「新建部署」→ 类型选「网页应用」
 *       执行身份 = 我 / 访问权限 = 任何人 → 部署 → 复制「网页应用」URL
 *       该 URL 填进 guide/js/feedback.js 的 ENDPOINT 常量。
 *
 * 为什么不用 FormSubmit：它的激活邮件实测两个收件人都收不到，其 API 也证实
 * 「无已激活表单」——提交显示成功但信根本没发。本脚本用账号自己的 Gmail 发信，
 * 投递没有第三方风险，且同时把每一条写进 Google Sheet（邮件出问题数据也不丢）。
 *
 * 不变量：
 *   · 邮件主题带 [KyudaiGuide] 标记 —— 126 的分类规则靠它归档，不可改
 *   · 蜜罐 _honey 有值即视为机器人，静默成功但不记录
 */

const NOTIFY_TO = 'hanbinglei@126.com';       // 主收件箱（126 会按主题归档）
const NOTIFY_CC = 'kyudaiguide@gmail.com';    // 对外专用地址留档
const SUBJECT_TAG = '[KyudaiGuide]';
const SHEET_NAME = '反馈';
const PROP_SHEET_ID = 'fbSheetId';
const MAX_DETAIL = 5000;

/** 拿记录表；第一次运行自动创建并记住 ID（省得手工建表） */
function fbSheet_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty(PROP_SHEET_ID);
  if (id) {
    try { return SpreadsheetApp.openById(id); } catch (e) { /* 被删了就重建 */ }
  }
  const ss = SpreadsheetApp.create('KyudaiGuide 反馈记录');
  props.setProperty(PROP_SHEET_ID, ss.getId());
  return ss;
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};

    // 蜜罐：真人看不到这个字段，填了内容的一定是机器人。
    // 对机器人返回成功，不记录 —— 不告诉它被识破了。
    if (p._honey) return fbJson_({ ok: true });

    const detail = String(p.detail || '').slice(0, MAX_DETAIL);
    if (!detail.trim()) return fbJson_({ ok: false, error: 'empty detail' });

    const ss = fbSheet_();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      sh.appendRow(['接收时间', '类型', '说明', '联系方式', '文章', '原始页面']);
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(), p.type || '', detail, p.email || '', p.article || '', p.page || '']);

    // 主题直接用表单给的 _subject（已带 [KyudaiGuide] 标记）；缺失时兜底补上
    const subject = (p._subject && String(p._subject).indexOf(SUBJECT_TAG) === 0)
      ? String(p._subject)
      : (SUBJECT_TAG + ' 反馈');

    const opts = {
      to: NOTIFY_TO,
      cc: NOTIFY_CC,
      subject: subject,
      htmlBody: fbBody_(p, detail, ss.getUrl()),
    };
    if (p.email) opts.replyTo = String(p.email);   // 读者留了邮箱才能直接回信
    MailApp.sendEmail(opts);

    return fbJson_({ ok: true });
  } catch (err) {
    return fbJson_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return fbJson_({ ok: true, msg: 'KyudaiGuide feedback endpoint. Use POST.' });
}

function fbBody_(p, detail, sheetUrl) {
  const row = (k, v) => '<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap">'
    + k + '</td><td style="padding:4px 0">' + fbEsc_(v) + '</td></tr>';
  return '<div style="font:14px/1.7 -apple-system,Segoe UI,sans-serif;color:#222">'
    + '<table style="border-collapse:collapse">'
    + row('类型', p.type || '（未选）')
    + row('说明', String(detail).replace(/\n/g, '<br>'))
    + row('文章', p.article || '（未指定）')
    + row('页面', p.page || '')
    + row('联系方式', p.email || '（未提供，无法回信）')
    + '</table>'
    + '<p style="color:#999;font-size:12px;margin-top:14px">'
    + '本条已自动记入 <a href="' + sheetUrl + '">KyudaiGuide 反馈记录</a>。'
    + '</p></div>';
}

function fbEsc_(s) {
  return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}

function fbJson_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 人工排查用：在编辑器里选这个函数跑一次，执行日志会显示
 * 当前账号邮箱与记录表地址 —— 用来确认脚本挂在哪个账号下。
 */
function fbWhoami() {
  Logger.log('user = ' + Session.getActiveUser().getEmail());
  Logger.log('sheet = ' + fbSheet_().getUrl());
}
