$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('.slide').remove();
    $('.hidden-xs').remove();
    $('.desktop-only').remove();
  }

  /* load weatehr widget  */
  const loadScriptsTimer = setTimeout(loadScripts, 5000);
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
    clearTimeout(loadScriptsTimer);
    userInteractionEvents.forEach(function (event) {
      window.removeEventListener(event, triggerScriptLoader, {
        passive: true,
      });
    });
  }
  function loadScripts() {
    if ($('#main_js').length === 0) {
      $(
        `<script id="main_js" src="/site-uploads/1001260/frontjs/main.js"></script>`
      ).insertAfter('#panelWeather');
    }

    if ($(window).width() > 700) {
      $(
        '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=714297722278460&autoLogAppEvents=1" nonce="C6Cb0bSY"></script>'
      ).insertAfter('#fb-root');
    }
  }
});
