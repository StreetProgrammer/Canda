$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1686834959063').remove();
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
});

function loadScripts() {
  if (!$('#_GoogleTagManager').length) {
    $(
      '<script id="_GoogleTagManager">\
      (function (w, d, s, l, i) {\
          w[l] = w[l] || [];\
          w[l].push({\
              "gtm.start": new Date().getTime(),\
              event: "gtm.js"\
          });\
          var f = d.getElementsByTagName(s)[0],\
              j = d.createElement(s),\
              dl = l != "dataLayer" ? "&l=" + l : "";\
          j.async = true;\
          j.src =\
              "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\
          f.parentNode.insertBefore(j, f);\
      })(window, document, "script", "dataLayer", "GTM-WKXGJK8");\
  </script>'
    ).appendTo('head');
  }

  if ($('#_home_youtube_video_container').find('iframe').length === 0) {
    $('#_home_youtube_video_container').html(
      '<iframe id="_home_youtube_video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" frameborder="0" height="650" src="https://www.youtube-nocookie.com/embed/ldhAtkA5gBI" title="YouTube video player" width="100%"></iframe>'
    );
  }
}
