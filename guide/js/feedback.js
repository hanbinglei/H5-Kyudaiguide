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

  // 后端地址 = Google Apps Script 网页应用（源码见 tools/apps-script/feedback-endpoint.gs）。
  // 它写 Google Sheet + 用账号自己的 Gmail 发通知到 126（主题带 [KyudaiGuide] 标记，
  // 126 的分类规则据此归档）。留空 = 功能未启用：入口不显示、open() 直接返回。
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbyO88MWkC8Uwwv7iMQ3lVstjO_0EyZN56NriuZAXWLfS-4HOgJ-E6vKkYQ2SuqRaAKa/exec';
  const SUBJECT_TAG = '[KyudaiGuide]';
  const $ = (id) => document.getElementById(id);
  const I18N = window.GuideI18N || {};
  const t = (k, fb) => {
    try { const v = I18N.t ? I18N.t(k) : k; return v === k ? (fb || k) : v; } catch (e) { return fb || k; }
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const TYPES = ['fbTypeWrong', 'fbTypeLink', 'fbTypeStale', 'fbTypeAdd', 'fbTypeOther'];

  let built = false;
  let ctx = { kind: 'general', title: '', source: '' };
  let formHTML = '';      // 表单初始骨架，用于成功态之后重置
  let trigger = null;     // 打开面板的那个按钮，关闭时把焦点还回去

  function enabled() { return !!ENDPOINT; }

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
      + '<input type="hidden" name="source" id="fbSource">'
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
    formHTML = $('fbForm').innerHTML;      // 存骨架，成功态之后要还原

    $('fbClose').addEventListener('click', close);
    $('fbCancel').addEventListener('click', close);
    wrap.addEventListener('click', (e) => { if (e.target === wrap) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !wrap.hidden) close(); });
    // 站内提交：普通表单 POST 会把读者带到 Google 的裸 JSON 页面（script.googleusercontent.com），
    // 体验很差。改用 no-cors fetch 原地发送，成功后自己给提示。
    // 代价：no-cors 的响应是 opaque 的，客户端**无法判断是否真的成功** ——
    // 所以文案不写「已送达」，只写「已发送」，并另给一个直接发信的兜底地址。
    $('fbForm').addEventListener('submit', (ev) => {
      ev.preventDefault();
      syncHidden();
      const form = $('fbForm');
      const btn = $('fbSend');
      if (btn) { btn.disabled = true; btn.textContent = t('fbSending', '发送中…'); }
      let body;
      try { body = new URLSearchParams(new FormData(form)); }
      catch (e) { form.submit(); return; }            // 老浏览器退回普通提交
      fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: body })
        .then(() => sent_())
        .catch(() => {
          if (btn) { btn.disabled = false; btn.textContent = t('fbSend', '发送'); }
          const n = $('fbNote');
          if (n) n.textContent = t('fbFailed', '发送失败，请检查网络后重试。');
        });
    });
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
    const fab0 = $('btnFeedbackFab');
    if (fab0) {
      fab0.textContent = '💬 ' + t('fbFab', '反馈');
      fab0.title = t('fbFabTitle', '反馈与纠错');
      fab0.setAttribute('aria-label', t('fbFabTitle', '反馈与纠错'));
    }
    if (!built) return;
    syncHidden();          // 类型名随语言变，主题里的 kindLabel 也要跟着变
    if ($('supportCard')) buildSupport();   // 卡片文案也要跟着切
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
    // page 里带上入口来源。为什么拼在 page 上：那头的 Apps Script 字段是写死的，
    // 新加字段要重新部署脚本；拼进来则**当前部署立刻就能看到是哪个入口提交的**。
    // 同时另发一个独立的 source 字段（语言中立 token），等脚本升级后可直接用。
    if (pg) pg.value = location.href + (ctx.source ? '  ｜ 来源: ' + ctx.source : '');
    if (ar) ar.value = ctx.title || '';
    const sc = $('fbSource');
    if (sc) sc.value = ctx.source || '';
  }

  function open(kind, title, source) {
    if (!enabled()) return;
    build();
    // 上次提交成功过 → 面板里留着的是成功态（0 个表单字段）。
    // 不还原的话，读者关闭后再打开就再也提交不了第二次，只能刷新页面。
    const form = $('fbForm');
    if (form && form.getAttribute('data-sent') === '1') {
      form.innerHTML = formHTML;
      form.removeAttribute('data-sent');
    }
    trigger = (document.activeElement && document.activeElement.tagName === 'BUTTON')
      ? document.activeElement : null;
    ctx = { kind: kind || 'general', title: title || '', source: source || '' };
    syncHidden();
    relabel();
    $('fbWrap').hidden = false;
    document.body.classList.add('fb-open');
    try { $('fbMsg').focus(); } catch (e) { /* 忽略 */ }
  }

  /** 成功态：把表单换成一句确认，并给一个直接发信的兜底 */
  function sent_() {
    const f = $('fbForm');
    if (!f) return;
    f.setAttribute('data-sent', '1');       // 供 open() 判断是否需要还原骨架
    f.innerHTML = '<div class="fb-ok"><div class="fb-ok-ic">✓</div>'
      + '<p class="fb-ok-t">' + esc(t('fbSent', '已发送，谢谢！')) + '</p>'
      + '<p class="fb-note">' + esc(t('fbSentNote', '你的反馈已直接送达维护者，不会公开。')) + '</p>'
      + '<button class="fb-cancel" type="button" id="fbDone">' + esc(t('fbCloseBtn', '关闭')) + '</button></div>';
    const d = $('fbDone');
    if (d) d.addEventListener('click', close);
  }

  function close() {
    const w = $('fbWrap');
    if (w) w.hidden = true;
    document.body.classList.remove('fb-open');
    // 把焦点还给打开面板的那个按钮 —— 否则键盘用户按 Esc 关闭后
    // 焦点掉到 body 上，再想按 Tab 得从头走一遍整个页面。
    if (trigger && trigger.focus) { try { trigger.focus(); } catch (e) { /* 元素可能已不在 */ } }
    trigger = null;
  }

  const REPO = 'https://github.com/hanbinglei/H5-Kyudaiguide';

  /** 「支持这个项目」卡片：GitHub star + 复制链接分享。
   *  放在指南页底部（一页只出现一次，不像文章页那样每篇都推，避免打扰）。 */
  function buildSupport() {
    const box = $('supportCard');
    if (!box || !enabled()) return;
    box.innerHTML =
      '<div class="sup-t">' + esc(t('supportTitle', '这份指南帮到你了吗？')) + '</div>'
      + '<p class="sup-note">' + esc(t('supportNote', '你的支持会直接决定接下来优先更新哪部分。')) + '</p>'
      + '<div class="sup-acts">'
      + '<a class="sup-btn sup-star" href="' + REPO + '" target="_blank" rel="noopener">'
      + '<span class="sup-ic">★</span>' + esc(t('supportStar', '在 GitHub 上点个 star')) + '</a>'
      + '<button class="sup-btn" type="button" id="supShare">'
      + '<span class="sup-ic">🔗</span>' + esc(t('supportShare', '复制链接分享给同学')) + '</button>'
      + '</div>';
    box.hidden = false;
    const sh = $('supShare');
    if (!sh) return;
    const base = sh.innerHTML;
    sh.addEventListener('click', () => {
      const url = location.origin + location.pathname;
      const done = () => {
        sh.innerHTML = '<span class="sup-ic">✓</span>' + esc(t('supportCopied', '已复制链接'));
        setTimeout(() => { sh.innerHTML = base; }, 2200);
      };
      // 优先用 Clipboard API；它需要安全上下文与用户手势，失败时退回 execCommand
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, () => fbLegacyCopy_(url) && done());
      } else if (fbLegacyCopy_(url)) done();
    });
  }

  /** 老浏览器/非安全上下文的复制兜底 */
  function fbLegacyCopy_(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }

  /** 绑定入口：文章底部的「报告有误」与指南页的「意见与建议」 */
  function init() {
    // 后端没配好就整块撤下：留着「能点但送不到」比没有更糟 ——
    // 读者会以为报过了，维护者却什么都没收到。
    if (!enabled()) {
      const hide = (id) => { const e = $(id); if (e) e.hidden = true; };
      hide('btnReportArticle'); hide('btnFeedback'); hide('btnFeedbackFab');
      const sc = $('supportCard'); if (sc) sc.hidden = true;
      return;
    }
    relabel();                                   // 不依赖面板是否已打开
    buildSupport();                              // 「支持这个项目」卡片（指南页底部）
    // 来源 token 用语言中立的英文短标识，直接进邮件与表格，便于统计哪个入口有用
    const a = $('btnReportArticle');
    if (a) a.addEventListener('click', () => open('article', (window.__fbArticleTitle || ''), 'article-footer'));
    const g = $('btnFeedback');
    if (g) g.addEventListener('click', () => open('general', '', 'grid-footer'));
    const fab = $('btnFeedbackFab');
    if (fab) fab.addEventListener('click', () => {
      const art = window.__fbArticleTitle || '';
      open(art ? 'article' : 'general', art, 'article-fab');
    });
  }

  window.Feedback = { init: init, open: open, close: close, relabel: relabel, syncHidden: syncHidden,
  buildSupport: buildSupport, REPO: REPO, ENDPOINT: ENDPOINT, SUBJECT_TAG: SUBJECT_TAG };
})();
