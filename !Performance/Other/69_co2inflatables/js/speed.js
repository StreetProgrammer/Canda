$(function () {
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
});

function loadScripts() {
  if ($('#_6389763').find('source').length === 0) {
    $('#_6389763').html(
      '<source src="/site-uploads/1001500/video-slider/video1.mp4" type="video/mp4">'
    );
  }

  if ($('#_6389764').find('source').length === 0) {
    $('#_6389764').html(
      '<source src="/site-uploads/1001500/video-slider/video2.mp4" type="video/mp4">'
    );
  }
}
