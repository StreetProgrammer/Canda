$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1660235295893').remove();
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
    if (!$('#weatherScript').length) {
      $(
        '<script id="weatherScript" src="/site-uploads/1001341/frontjs/weather.js" defer="defer"> </script>'
      ).insertAfter('#plemx-root');
    }
  }
});
