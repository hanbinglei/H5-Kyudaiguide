/* feedback.js — 反馈 / 纠错入口（2026-09）
 *
 * 为什么用表单而不是留言板：
 *   纠错内容是**给维护者看的、不该公开的**（读者报错时常带个人信息），
 *   所以走「表单 → 邮箱」，不进公开区。
 *
 * 投递链路（FormSubmit，免注册）：
 *   表单 POST → formsubmit.co/kyudaiguide@gmail.com
 *     → Gmail（对外专用地址，公开在页面源码里也没有隐私问题）
 *     → 转发 → hanbinglei@126.com → 「KyudaiGuide反馈」文件夹
 *
 * ⚠️ 两处不能改坏：
 *   ① address 必须用 kyudaiguide@gmail.com —— 这是 role address，公开无妨；
 *      **绝不要把个人邮箱写进来**，它会在页面源码里明文可见，会被爬虫收走。
 *   ② _subject 必须以 [KyudaiGuide] 开头 —— 126 的分类规则靠这个标记归档，
 *      改了就进不了专属文件夹（转发会保留原始发件人，靠发件人过滤不出来）。
 */
(function () {
  'use strict';

  const ENDPOINT = 'https://formsubmit.co/kyudaiguide@gmail.com';
  const SUBJECT_TAG = '[KyudaiGuide]';
  const $ = (id) => document.getElementById(id);
  const I18N = window.GuideI18N || {};
  const t = (k, fb) => {
    try { const v = I18N.t ? I18N.t(k) : k; return v === k ? (fb || k) : v; } catch (e) { return fb || k; }
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const TYPES = ['fbTypeWrong', 'fbTypeLink', 'fbTypeStale', 'fbTypeAdd', 'fbTypeOther'];

  let built = false;
  let ctx = { kind: 'general', title: '' };

  function build() {
    if (built) return;
    const wrap = document.createElement('div');
    wrap.id = 'fbWrap';
    wrap.className = 'fb-wrap';
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="fb-card" role="dialog" aria-modal="true" aria-labelledby="fbTitle">'
      + '<div class="fb-head"><h2 class="fb-h" id="fbTitle"></h2>'
      + '<button class="sheet-close" id="fbClose" type="button" aria-label="close">✕</button></div>'
      + '<p class="fb-lead" id="fbLead"></p>'
      + '<form id="fbForm" method="POST" action="' + ENDPOINT + '">'
      // 蜜罐：真人看不到也不会填，机器人会填 → FormSubmit 端丢弃
      + '<input type="text" name="_honey" class="fb-honey" tabindex="-1" autocomplete="off" aria-hidden="true">'
      + '<input type="hidden" name="_subject" id="fbSubject">'
      + '<input type="hidden" name="_next" id="fbNext">'
      + '<input type="hidden" name="_template" value="table">'
      + '<input type="hidden" name="page" id="fbPage">'
      + '<input type="hidden" name="article" id="fbArticle">'
      + '<label class="fb-lb" for="fbType" id="fbTypeLb"></label>'
      + '<select class="fb-in" name="type" id="fbType">'
      + TYPES.map((k) => '<option value="' + esc(t(k, k)) + '">' + esc(t(k, k)) + '</option>').join('')
      + '</select>'
      + '<label class="fb-lb" for="fbMsg" id="fbMsgLb"></label>'
      + '<textarea class="fb-in fb-ta" name="detail" id="fbMsg" rows="5" required></textarea>'
      + '<label class="fb-lb" for="fbEmail" id="fbEmailLb"></label>'
      + '<input class="fb-in" type="email" name="email" id="fbEmail" autocomplete="email">'
      + '<p class="fb-note" id="fbNote"></p>'
      + '<div class="fb-acts"><button class="fb-send" type="submit" id="fbSend"></button>'
      + '<button class="fb-cancel" type="button" id="fbCancel"></button></div>'
      + '</form></div>';
    document.body.appendChild(wrap);

    $('fbClose').addEventListener('click', close);
    $('fbCancel').addEventListener('click', close);
    wrap.addEventListener('click', (e) => { if (e.target === wrap) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !wrap.hidden) close(); });
    // 提交前再刷一次（URL 可能在面板打开后变了）
    $('fbForm').addEventListener('submit', syncHidden);
    built = true;
  }

  /** 按当前语言重写全部文案（切语言时由 applyI18N 调用） */
  function relabel() {
    // ⚠️ 入口按钮的文字必须在 build 守卫**之前**设置。
    // 面板是懒加载（只有点开过才 build），把这两行放在守卫之后就变成：
    // 读者在第一次点开面板之前，看到的是两个**空白按钮** —— 实测踩到过。
    // 凡是「非面板自身的文案」，都要放在这道守卫之前。
    const ra0 = $('btnReportArticle');
    if (ra0) ra0.textContent = t('fbEntryArticle', '发现错误？点这里报告');
    const gf0 = $('btnFeedback');
    if (gf0) gf0.textContent = t('fbEntryGeneral', '意见与建议');
    if (!built) return;
    syncHidden();          // 类型名随语言变，主题里的 kindLabel 也要跟着变
    const set = (id, k, fb) => { const e = $(id); if (e) e.textContent = t(k, fb); };
    set('fbTitle', ctx.kind === 'article' ? 'fbTitleArticle' : 'fbTitleGeneral', '反馈与纠错');
    set('fbLead', 'fbLead', '欢迎指出错误或提出建议。信息会直接发给维护者，不会公开。');
    set('fbTypeLb', 'fbTypeLb', '类型');
    set('fbMsgLb', 'fbMsgLb', '具体说明');
    set('fbEmailLb', 'fbEmailLb', '联系方式（可选，便于回复）');
    set('fbNote', 'fbNote', '提交后会跳转到确认页，随后返回本站。');
    set('fbSend', 'fbSend', '发送');
    set('fbCancel', 'fbCancel', '取消');
    const sel = $('fbType');
    if (sel) {
      const cur = sel.selectedIndex;
      sel.innerHTML = TYPES.map((k) => '<option value="' + esc(t(k, k)) + '">' + esc(t(k, k)) + '</option>').join('');
      sel.selectedIndex = cur < 0 ? 0 : cur;
    }
    const t2 = $('fbArticle');
    if (t2 && t2.parentElement) {
      // 「文章」这一行只在纠错时才有意义；综合反馈时留空
      const row = t2;
      row.value = ctx.title || '';
    }
  }

  /** 把动态值写进 hidden。
   *  ⚠️ 必须在 open() 里就调用，不能只挂在 submit 事件上 ——
   *  程序化 form.submit() **不会派发 submit 事件**，那样发出去的邮件
   *  主题就不带 [KyudaiGuide] 标记，126 的分类规则收不到它（实测踩到）。
   *  真实用户点按钮时事件会触发，但结构上不该依赖这一点。 */
  function syncHidden() {
    const kindLabel = ctx.kind === 'article' ? t('fbKindArticle', '纠错') : t('fbKindGeneral', '意见');
    const sub = $('fbSubject'), nxt = $('fbNext'), pg = $('fbPage'), ar = $('fbArticle');
    if (sub) sub.value = SUBJECT_TAG + ' ' + kindLabel + (ctx.title ? ' - ' + ctx.title : '');
    if (nxt) nxt.value = location.href.split('#')[0] + '#guide';
    if (pg) pg.value = location.href;
    if (ar) ar.value = ctx.title || '';
  }

  function open(kind, title) {
    build();
    ctx = { kind: kind || 'general', title: title || '' };
    syncHidden();
    relabel();
    $('fbWrap').hidden = false;
    document.body.classList.add('fb-open');
    try { $('fbMsg').focus(); } catch (e) { /* 忽略 */ }
  }

  function close() {
    const w = $('fbWrap');
    if (w) w.hidden = true;
    document.body.classList.remove('fb-open');
  }

  /** 绑定入口：文章底部的「报告有误」与指南页的「意见与建议」 */
  function init() {
    relabel();                                   // 不依赖面板是否已打开
    const a = $('btnReportArticle');
    if (a) a.addEventListener('click', () => open('article', (window.__fbArticleTitle || '')));
    const g = $('btnFeedback');
    if (g) g.addEventListener('click', () => open('general', ''));
  }

  window.Feedback = { init: init, open: open, close: close, relabel: relabel, syncHidden: syncHidden, ENDPOINT: ENDPOINT, SUBJECT_TAG: SUBJECT_TAG };
})();
