/* Pix Plumber & AC Service — site behaviour
   Theme toggle · EN/AR language toggle (RTL) · nav · reveal · counters · lightbox · WhatsApp form */
(function () {
  'use strict';

  var html = document.documentElement;
  var LS_THEME = 'pix-theme';
  var LS_LANG = 'pix-lang';
  var WA_NUMBER = '97466553416';

  /* ---------------- Icon sprite ---------------- */
  var S = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">' +
    sym('phone', '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>') +
    sym('whatsapp', '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>', true) +
    sym('mail', '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>') +
    sym('map-pin', '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>') +
    sym('clock', '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>') +
    sym('wrench', '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>') +
    sym('droplet', '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>') +
    sym('flame', '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>') +
    sym('snowflake', '<line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/>') +
    sym('shower', '<path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/>') +
    sym('gauge', '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>') +
    sym('shield', '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>') +
    sym('star', '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', true) +
    sym('check', '<path d="M20 6 9 17l-5-5"/>') +
    sym('check-circle', '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>') +
    sym('sun', '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>') +
    sym('moon', '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>') +
    sym('globe', '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>') +
    sym('menu', '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>') +
    sym('x', '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>') +
    sym('arrow-right', '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>') +
    sym('chevron-right', '<path d="m9 18 6-6-6-6"/>') +
    sym('chevron-left', '<path d="m15 18-6-6 6-6"/>') +
    sym('zap', '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>') +
    sym('tag', '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>') +
    sym('users', '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>') +
    sym('sparkles', '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>') +
    sym('waves', '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>') +
    sym('tank', '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/>') +
    sym('bath', '<path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>') +
    sym('fan', '<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/>') +
    sym('wind', '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>') +
    sym('thermometer', '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>') +
    sym('filter', '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>') +
    sym('cog', '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>') +
    sym('home', '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>') +
    sym('building', '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>') +
    sym('facebook', '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>', true) +
    sym('instagram', '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>') +
    sym('external', '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>') +
    sym('navigation', '<polygon points="3 11 22 2 13 21 11 13 3 11"/>') +
    sym('pen', '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>') +
    sym('calendar', '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>') +
    sym('send', '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>') +
    sym('timer', '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>') +
    sym('camera', '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>') +
    sym('google', '<path fill="#EA4335" d="M12 5.04c1.94 0 3.28.84 4.03 1.54l2.96-2.9C17.2 2.02 14.84 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.4 2.64C6.43 7.2 8.99 5.04 12 5.04z"/><path fill="#4285F4" d="M23.49 12.27c0-.94-.08-1.63-.25-2.34H12v4.26h6.54c-.13 1.1-.84 2.75-2.43 3.86l3.32 2.57c1.98-1.83 3.06-4.53 3.06-8.35z"/><path fill="#FBBC05" d="M5.58 14.29A6.98 6.98 0 0 1 5.2 12c0-.8.14-1.57.37-2.29L2.18 7.07A11.04 11.04 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.4-2.64z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.32-2.57c-.89.6-2.08 1.02-3.96 1.02-3.01 0-5.57-2.16-6.42-5.5l-3.4 2.64C3.99 19.53 7.7 23 12 23z"/>', true) +
    '</svg>';

  function sym(id, body, filled) {
    return '<symbol id="i-' + id + '" viewBox="0 0 24 24" ' +
      (filled ? 'fill="currentColor" stroke="none"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"') +
      '>' + body + '</symbol>';
  }
  document.body.insertAdjacentHTML('afterbegin', S);

  /* ---------------- Theme ---------------- */
  function getTheme() { return html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function setTheme(t, persist) {
    html.setAttribute('data-theme', t);
    if (persist) { try { localStorage.setItem(LS_THEME, t); } catch (e) {} }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#070d1a' : '#eef3fa');
    var tt = document.getElementById('themeToggle');
    if (tt) tt.setAttribute('aria-label', t === 'dark' ? (isAr() ? 'الوضع الفاتح' : 'Switch to light mode') : (isAr() ? 'الوضع الداكن' : 'Switch to dark mode'));
  }
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', function () { setTheme(getTheme() === 'dark' ? 'light' : 'dark', true); });
  setTheme(getTheme(), false);

  /* ---------------- Language / i18n ---------------- */
  var AR = (window.I18N && window.I18N.ar) || {};
  function isAr() { return html.getAttribute('lang') === 'ar'; }

  function translateNode(el, lang) {
    var key = el.getAttribute('data-i18n');
    if (!key) return;
    var isTitle = el.tagName === 'TITLE';
    if (!el.hasAttribute('data-i18n-orig')) el.setAttribute('data-i18n-orig', isTitle ? el.textContent : el.innerHTML);
    if (lang === 'ar') {
      if (AR[key] != null) {
        if (isTitle) el.textContent = AR[key]; else el.innerHTML = AR[key];
      }
    } else {
      if (isTitle) el.textContent = el.getAttribute('data-i18n-orig');
      else el.innerHTML = el.getAttribute('data-i18n-orig');
    }
  }
  function translateAttr(sel, attr, dataAttr, lang) {
    var nodes = document.querySelectorAll('[' + dataAttr + ']');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], key = el.getAttribute(dataAttr), origAttr = dataAttr + '-orig';
      if (!el.hasAttribute(origAttr)) el.setAttribute(origAttr, el.getAttribute(attr) || '');
      if (lang === 'ar') { if (AR[key] != null) el.setAttribute(attr, AR[key]); }
      else el.setAttribute(attr, el.getAttribute(origAttr));
    }
  }

  function setLang(lang, persist) {
    lang = lang === 'ar' ? 'ar' : 'en';
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) translateNode(nodes[i], lang);
    translateAttr(null, 'placeholder', 'data-i18n-ph', lang);
    translateAttr(null, 'aria-label', 'data-i18n-aria', lang);
    translateAttr(null, 'content', 'data-i18n-content', lang);
    translateAttr(null, 'alt', 'data-i18n-alt', lang);
    var lt = document.getElementById('langToggle');
    if (lt) {
      lt.querySelector('span').textContent = lang === 'ar' ? 'English' : 'عربي';
      lt.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }
    if (persist) { try { localStorage.setItem(LS_LANG, lang); } catch (e) {} }
    setTheme(getTheme(), false);
    updateWaLinks(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function updateWaLinks(lang) {
    var msg = lang === 'ar'
      ? 'مرحباً، أحتاج إلى خدمة سباكة / تكييف في الدوحة. هل يمكنكم مساعدتي؟'
      : 'Hello, I need a plumbing / AC service in Doha. Can you help?';
    var links = document.querySelectorAll('a[data-wa]');
    for (var i = 0; i < links.length; i++) {
      var num = links[i].getAttribute('data-wa') || WA_NUMBER;
      var custom = links[i].getAttribute(lang === 'ar' ? 'data-wa-ar' : 'data-wa-en');
      links[i].href = 'https://wa.me/' + num + '?text=' + encodeURIComponent(custom || msg);
    }
  }

  var langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', function () { setLang(isAr() ? 'en' : 'ar', true); });

  (function initLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    var stored = null;
    try { stored = localStorage.getItem(LS_LANG); } catch (e) {}
    var lang = q || stored || (html.getAttribute('lang') === 'ar' ? 'ar' : 'en');
    setLang(lang, !!q);
  })();

  /* ---------------- Header / nav ---------------- */
  var header = document.getElementById('header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');
  function openDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
    if (burger) {
      burger.setAttribute('aria-expanded', String(open));
      burger.innerHTML = '<svg><use href="#i-' + (open ? 'x' : 'menu') + '"/></svg>';
    }
  }
  if (burger && drawer) {
    burger.addEventListener('click', function () { openDrawer(!drawer.classList.contains('open')); });
    drawer.addEventListener('click', function (e) { if (e.target === drawer || e.target.closest('a')) openDrawer(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') openDrawer(false); });
  }

  // Active nav link
  (function markActive() {
    var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (file === '') file = 'index.html';
    var links = document.querySelectorAll('.nav a, .drawer .panel a');
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute('href') || '').split('#')[0].toLowerCase();
      if (href === file || (file === 'index.html' && (href === '' || href === './' || href === 'index.html'))) links[i].classList.add('active');
    }
  })();

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  /* ---------------- Counters ---------------- */
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1400, start = null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
    if (reduce) { el.textContent = fmt(target) + suffix; return; }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur); p = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * p) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { runCounter(en.target); cio.unobserve(en.target); } });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { cio.observe(el); });
    } else counters.forEach(runCounter);
  }

  /* ---------------- Lightbox ---------------- */
  var galleryLinks = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (galleryLinks.length && typeof HTMLDialogElement !== 'undefined') {
    var dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = '<img alt="">' +
      '<button type="button" class="lb-btn lb-prev" aria-label="Previous"><svg><use href="#i-chevron-left"/></svg></button>' +
      '<button type="button" class="lb-btn lb-next" aria-label="Next"><svg><use href="#i-chevron-right"/></svg></button>' +
      '<button type="button" class="lb-close" aria-label="Close"><svg><use href="#i-x"/></svg></button>';
    document.body.appendChild(dlg);
    var lbImg = dlg.querySelector('img'), idx = 0;
    function show(i) {
      idx = (i + galleryLinks.length) % galleryLinks.length;
      var a = galleryLinks[idx];
      lbImg.src = a.getAttribute('href');
      var cap = a.querySelector('span');
      lbImg.alt = (a.querySelector('img') && a.querySelector('img').alt) || (cap ? cap.textContent : '');
    }
    galleryLinks.forEach(function (a, i) {
      a.addEventListener('click', function (e) { e.preventDefault(); show(i); dlg.showModal(); });
    });
    dlg.querySelector('.lb-prev').addEventListener('click', function () { show(idx - 1); });
    dlg.querySelector('.lb-next').addEventListener('click', function () { show(idx + 1); });
    dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    });
  }

  /* ---------------- WhatsApp form ---------------- */
  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ar = isAr();
      var g = function (n) { var f = form.elements[n]; return f ? (f.value || '').trim() : ''; };
      var name = g('name'), phone = g('phone'), service = g('service'), area = g('area'), message = g('message');
      var svcLabel = '';
      if (form.elements.service) { var o = form.elements.service.selectedOptions && form.elements.service.selectedOptions[0]; svcLabel = o ? o.textContent.trim() : service; }
      var lines = ar
        ? ['مرحباً، أود طلب خدمة.', 'الاسم: ' + name, 'الهاتف: ' + phone, 'الخدمة: ' + svcLabel, area ? 'المنطقة: ' + area : '', message ? 'التفاصيل: ' + message : '']
        : ['Hello, I would like to request a service.', 'Name: ' + name, 'Phone: ' + phone, 'Service: ' + svcLabel, area ? 'Area: ' + area : '', message ? 'Details: ' + message : ''];
      var text = lines.filter(Boolean).join('\n');
      var num = form.getAttribute('data-wa') || WA_NUMBER;
      window.open('https://wa.me/' + num + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
      var ok = form.querySelector('.form-ok');
      if (ok) { ok.hidden = false; }
    });
  }

  /* ---------------- Misc ---------------- */
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // Hero video: pause when off-screen to save battery
  var vids = document.querySelectorAll('video[autoplay]');
  if (vids.length && 'IntersectionObserver' in window) {
    var vio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { var v = en.target; if (en.isIntersecting) { v.play && v.play().catch(function () {}); } else { v.pause && v.pause(); } });
    }, { threshold: 0.1 });
    vids.forEach(function (v) { vio.observe(v); });
  }
})();
