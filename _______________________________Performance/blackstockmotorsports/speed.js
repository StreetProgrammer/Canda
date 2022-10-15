$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('.slide').remove();
    $('.hidden-xs').remove();
    $('.desktop-only').remove();
  }

  /* load weatehr widget  */
  // const loadScriptsTimer = setTimeout(loadScripts, 5000);
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
    // clearTimeout(loadScriptsTimer);
    userInteractionEvents.forEach(function (event) {
      window.removeEventListener(event, triggerScriptLoader, {
        passive: true,
      });
    });
  }
  function loadScripts() {
    if ($('#site-script-1').length === 0) {
      $('head').append(
        $(
          '<script id="site-script-1" async src="https://bit.ly/3p5wUyJ" type="text/javascript"></script>'
        )
      );
    }

    if ($(window).width() > 700) {
    }
  }
});
