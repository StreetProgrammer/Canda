$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('.slide').remove();
    $('.hidden-xs').remove();
    $('.desktop-only').remove();
  }

  /* load weatehr widget  */
  const userInteractionEvents = [
    'mouseover',
    'keydown',
    'touchmove',
    'touchstart',
  ];
  userInteractionEvents.forEach(function (event) {
    window.addEventListener(event, triggerScriptLoader, {
      passive: true,
    });
  });

  function triggerScriptLoader() {
    loadScripts();
    userInteractionEvents.forEach(function (event) {
      window.removeEventListener(event, triggerScriptLoader, {
        passive: true,
      });
    });
  }
  function loadScripts() {
    if ($('#weather-script').length === 0) {
      $(
        `<script id="weather-script" type="text/javascript">
        var _plm = _plm || [];
        _plm.push(['_btn', 101821]);
        _plm.push(['_loc', 'usca0806']);
        _plm.push(['location', document.location.host]);
        (function (d, e, i) {
            if (d.getElementById(i)) return;
            var px = d.createElement(e);
            px.type = 'text/javascript';
            px.async = true;
            px.id = i;
            px.src = ('https:' == d.location.protocol ? 'https:' : 'http:') +
                '//widget.twnmm.com/js/btn/pelm.js?orig=en_ca';
            var s = d.getElementsByTagName('script')[0];
            var py = d.createElement('link');
            py.rel = 'stylesheet';
            py.href = ('https:' == d.location.protocol ? 'https:' : 'http:') +
                '//widget.twnmm.com/styles/btn/styles.css';
            s.parentNode.insertBefore(px, s);
            s.parentNode.insertBefore(py, s);
        })(document, 'script', 'plmxbtn');
    </script>`
      ).insertAfter('#plemx-root');
    }
  }
});
