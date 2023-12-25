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
    $('head').append(
      '<link rel="preconnect" href="https://fonts.googleapis.com">\
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"\
        rel="stylesheet">\
        <link href="/site-uploads/1001304/includes/aos.css" rel="stylesheet" type="text/css">\
        <script src="/site-uploads/1001304/includes/aos.js" type="text/javascript"></script>\
        <script src="/site-uploads/1001304/includes/catalog-hover-effect.js" type="text/javascript"></script>\
        <script src="/site-uploads/1001304/includes/change-get-financed.js" type="text/javascript"></script>\
        <script src="/site-uploads/1001304/includes/favicon.js" type="text/javascript"></script>\
        <script src="/site-uploads/1001304/includes/fixed-new.js" type="text/javascript"></script>\
        <script src="/site-uploads/1001304/includes/re-direct-home-esc-ads.js" type="text/javascript"></script>\
        '
    );
  }
});
