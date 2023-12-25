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
    if (!$('#_youtube-player').length) {
      $('#_youtube-wrapper').prepend(
        '<iframe\
      id="_youtube-player"\
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\
      allowfullscreen="" frameborder="0" height="330"\
      src="https://www.youtube.com/embed/_CYpZSe4_88" width="600"></iframe>'
      );
    }

    if (!$('#_facebook-content').length) {
      $('#_facebook-container').prepend(
        '<iframe\
        id="_facebook-content"\
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"\
            allowfullscreen="true" frameborder="0" height="500" scrolling="no"\
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDurham-Kubota-915866515093118&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"\
            style="border:none;overflow:hidden" width="340"></iframe>'
      );
    }
  }
});
