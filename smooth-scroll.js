// Soft inertia scrolling (wheel only; touch & reduced-motion stay native)
(function(){
  if (window.__softScroll) return; window.__softScroll = true;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window && !matchMedia('(pointer:fine)').matches) return;
  var target = window.scrollY, current = window.scrollY, raf = null, animating = false;
  var EASE = 0.075, SPEED = 0.9;
  function max(){ return Math.max(0, document.documentElement.scrollHeight - window.innerHeight); }
  function loop(){
    current += (target - current) * EASE;
    if (Math.abs(target - current) < 0.5){ current = target; animating = false; }
    window.scrollTo(0, current);
    if (animating) raf = requestAnimationFrame(loop); else raf = null;
  }
  window.addEventListener('wheel', function(e){
    if (e.ctrlKey) return; // pinch zoom
    var t = e.target;
    while (t && t !== document.body){ // let inner scrollable areas scroll natively
      if (t.scrollHeight > t.clientHeight + 1){
        var o = getComputedStyle(t).overflowY;
        if (o === 'auto' || o === 'scroll') return;
      }
      t = t.parentElement;
    }
    e.preventDefault();
    var d = e.deltaY;
    if (e.deltaMode === 1) d *= 16; else if (e.deltaMode === 2) d *= window.innerHeight;
    target = Math.min(max(), Math.max(0, target + d * SPEED));
    if (!animating){ animating = true; current = window.scrollY; raf = requestAnimationFrame(loop); }
  }, { passive: false });
  // keep in sync when scrolled by other means (scrollbar, keys, anchors)
  window.addEventListener('scroll', function(){
    if (!animating){ target = window.scrollY; current = window.scrollY; }
  }, { passive: true });
})();
