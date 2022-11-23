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
    if (!$('#multislider').length) {
      $(
        '<script id="multislider" src="/site-uploads/1001319/frontjs/multislider.js" type="text/javascript" class="" defer="defer">'
      ).appendTo('head');
    }
    if (!$('#home-brands-slider').length) {
      $(
        '<script id="home-brands-slider" src="/site-uploads/1001319/frontjs/home-brands-slider.js" type="text/javascript" defer="defer"></script>'
      ).appendTo('head');
    }
    if (!$('#_script').length) {
      $(
        '<script id="_script" src="/site-uploads/1001319/frontjs/script.js"></script>'
      ).appendTo('head');
    }
    if (!$('#SBscript').length) {
      $(
        '<script id="SBscript" src="/site-uploads/1001319/frontjs/SBscript.js"></script>'
      ).appendTo('head');
    }
  }
});
