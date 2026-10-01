(function () {
  if (window.__akLoader) return; window.__akLoader = true;
  var BG = '#0F0E0C', MIN = 700;
  var svg = '<svg viewBox="0 0 400 152" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M48.0143 116.589C45.4012 116.589 42.8927 116.224 40.4886 115.492C38.1891 114.76 36.2031 113.245 34.5307 110.945C32.9629 108.541 32.179 104.883 32.179 99.97V90.7197C32.179 85.598 33.6423 81.5215 36.569 78.4903C39.6002 75.3546 44.0947 72.5847 50.0525 70.1806C53.5018 68.7173 56.2195 67.4107 58.2054 66.261C60.2959 65.1112 61.8115 63.7524 62.7522 62.1845C63.6929 60.6166 64.1633 58.4739 64.1633 55.7563V51.8366C64.1633 49.8507 63.7452 48.3351 62.909 47.2898C62.1773 46.2446 61.1843 45.5129 59.9301 45.0948C58.7803 44.5722 57.4215 44.3109 55.8536 44.3109C52.4043 44.3109 50.1048 45.3561 48.955 47.4466C47.9098 49.5371 47.3872 52.8819 47.3872 57.4809V64.066H34.0604V56.0699C34.0604 52.2025 34.583 48.8054 35.6282 45.8787C36.6735 42.8475 38.764 40.4958 41.8997 38.8234C45.0354 37.0465 49.6867 36.158 55.8536 36.158C62.2296 36.158 67.0377 36.7852 70.2779 38.0394C73.6227 39.2937 75.9222 41.2274 77.1765 43.8405C78.4308 46.3491 79.0579 49.5894 79.0579 53.5613V115.335H64.3201V106.398C63.2748 109.639 61.1843 112.147 58.0486 113.924C55.0174 115.701 51.6727 116.589 48.0143 116.589ZM54.129 106.712C57.6828 106.712 60.1914 105.458 61.6547 102.949C63.2226 100.336 64.0065 96.7298 64.0065 92.1307V70.3374C63.2748 71.5917 61.9683 72.7415 60.0868 73.7867C58.2054 74.8319 56.3762 75.9294 54.5993 77.0792C51.9862 78.6471 50.0003 80.3195 48.6415 82.0964C47.2827 83.7688 46.6033 86.1206 46.6033 89.1518V96.5207C46.6033 99.3429 46.9168 101.538 47.544 103.106C48.2756 104.569 49.2164 105.562 50.3661 106.085C51.6204 106.503 52.8747 106.712 54.129 106.712Z" fill="white"/>' +
    '<path d="M123.932 115.335L107.94 70.3374L125.343 37.7259H139.924L122.05 70.4942L139.924 115.335H123.932ZM91.4771 115.335V16.0894H106.215V115.335H91.4771Z" fill="white"/>' +
    '<path d="M148.434 115.335V16.5597H162.232V45.2516C163.59 42.4295 165.472 40.2345 167.876 38.6666C170.384 37.0987 173.52 36.3148 177.283 36.3148C182.405 36.3148 186.22 37.2032 188.728 38.9802C191.342 40.7571 193.066 43.2134 193.902 46.3491C194.739 49.3803 195.157 52.8819 195.157 56.8538V115.335H180.419V57.9513C180.419 56.697 180.367 55.4427 180.262 54.1884C180.157 52.8296 179.844 51.6276 179.321 50.5823C178.799 49.4326 177.91 48.5441 176.656 47.917C175.506 47.1853 173.834 46.8195 171.639 46.8195C169.757 46.8195 168.189 47.133 166.935 47.7602C165.681 48.2828 164.74 48.9622 164.113 49.7984C163.59 50.5301 163.277 51.1572 163.172 51.6798V115.335H148.434Z" fill="white"/>' +
    '<path d="M207.535 115.335V37.7259H222.273V115.335H207.535Z" fill="white"/>' +
    '<path d="M235.708 115.335V16.0894H250.446V115.335H235.708Z" fill="white"/>' +
    '<path d="M281.127 116.433C275.901 116.433 271.981 115.544 269.368 113.767C266.859 111.99 265.187 109.586 264.351 106.555C263.619 103.419 263.253 99.8655 263.253 95.8936V37.7259H277.991V94.7961C277.991 96.6775 278.096 98.4544 278.305 100.127C278.618 101.799 279.35 103.21 280.5 104.36C281.754 105.405 283.74 105.928 286.457 105.928C288.443 105.928 290.011 105.614 291.161 104.987C292.311 104.36 293.199 103.628 293.826 102.792C294.454 101.851 294.872 100.963 295.081 100.127V37.7259H309.819V115.335H297.276L296.178 106.398C295.237 109.116 293.461 111.468 290.847 113.454C288.339 115.44 285.099 116.433 281.127 116.433Z" fill="white"/>' +
    '<path d="M317.169 115.335L333.475 74.7274L319.991 37.7259H333.945L343.196 63.4388L353.7 37.7259H367.341L352.603 74.7274L367.811 115.335H353.7L343.196 87.2703L331.75 115.335H317.169Z" fill="white" fill-opacity="0.5"/>' +
    '<path d="M207.536 16.0894H222.272V30.8264H207.536V16.0894Z" fill="white" fill-opacity="0.5"/>' +
    '<rect x="263.246" y="125.141" width="104.575" height="10.453" fill="white" fill-opacity="0.5"/>' +
    '<rect id="akbar" x="263.246" y="125.141" width="104.575" height="10.453" fill="white" style="transform-box:fill-box;transform-origin:left center;transform:scaleX(0)"/>' +
    '</svg>';

  var el = document.createElement('div');
  el.id = 'ak-loader';
  el.setAttribute('role', 'progressbar');
  el.setAttribute('aria-label', 'Loading');
  el.style.cssText = 'position:fixed;inset:0;z-index:2147483000;background:' + BG + ';display:flex;align-items:center;justify-content:center;opacity:1;transition:opacity .45s ease';
  el.innerHTML = '<div style="width:min(240px,52vw)">' + svg + '</div>';
  (document.body || document.documentElement).appendChild(el);
  var bar = el.querySelector('#akbar');

  var shown = 0, target = 0, real = 0, done = false, t0 = performance.now(), raf;
  function set(p) { bar.style.transform = 'scaleX(' + p + ')'; el.setAttribute('aria-valuenow', Math.round(p * 100)); }
  function measure() {
    var imgs = document.images, n = imgs.length, ok = 0;
    for (var i = 0; i < n; i++) if (imgs[i].complete) ok++;
    var doc = document.readyState === 'complete' ? 1 : document.readyState === 'interactive' ? 0.6 : 0.3;
    real = n ? doc * 0.5 + (ok / n) * 0.5 : doc;
  }
  function tick() {
    if (!done) {
      measure();
      var drift = 1 - Math.exp(-(performance.now() - t0) / 1800); // keeps moving while waiting
      target = Math.min(0.92, Math.max(real * 0.92, drift * 0.85));
    }
    shown += (target - shown) * 0.12;
    set(shown);
    if (done && shown > 0.995) { set(1); return finish(); }
    raf = requestAnimationFrame(tick);
  }
  function finish() {
    setTimeout(function () {
      el.style.opacity = '0'; el.style.pointerEvents = 'none';
      setTimeout(function () { el.style.display = 'none'; }, 480);
    }, 180);
  }
  function complete() {
    var wait = Math.max(0, MIN - (performance.now() - t0));
    setTimeout(function () {
      var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      fonts.then(function () { done = true; target = 1; });
    }, wait);
  }
  if (document.readyState === 'complete') complete(); else window.addEventListener('load', complete);
  setTimeout(function () { if (!done) { done = true; target = 1; } }, 8000); // safety cap
  raf = requestAnimationFrame(tick);

  // Show on internal page navigation
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    var url = new URL(a.getAttribute('href'), location.href);
    if (url.origin !== location.origin || !/\.html$/i.test(url.pathname)) return;
    if (url.pathname === location.pathname) return; // same-page anchors
    e.preventDefault();
    cancelAnimationFrame(raf);
    set(0);
    el.style.display = 'flex'; el.style.pointerEvents = 'auto';
    requestAnimationFrame(function () { el.style.opacity = '1'; });
    setTimeout(function () { location.href = url.href; }, 300);
  }, true);
  window.addEventListener('pageshow', function (e) { if (e.persisted) { el.style.opacity = '0'; el.style.display = 'none'; } });
})();
