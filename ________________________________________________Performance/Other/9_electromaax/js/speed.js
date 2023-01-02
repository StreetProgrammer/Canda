$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1559293992979').remove();
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
    if (!$('#video').length) {
      $(
        '<video autoplay="" class="video" data-bgvideo="true" id="video" loop="" muted=""\
      playsinline="" poster="/site-uploads/1001178/Images/8.jpg">\
      <source src="/site-uploads/1001178/videos/emaax-home.mp4" type="video/mp4"></video>'
      ).insertAfter('.video-background > .video-content');
    }

    if ($('#youtube_placeholder').length) {
      $('#youtube_placeholder').replaceWith(
        '<iframe\
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\
        allowfullscreen="" frameborder="0" height="346" scrolling="no"\
        src="https://www.youtube.com/embed/x234gBvUtJY" style="width: 100%;">\
    </iframe>'
      );
    }
  }
});
