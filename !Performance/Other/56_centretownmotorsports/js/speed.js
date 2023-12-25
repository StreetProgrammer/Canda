$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1568293732950').remove();
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
  if (!$('#__youtube_element').length) {
    $('#__youtube_container').append(
      '<iframe id="__youtube_element" allowfullscreen=""\
      frameborder="0" height="350" scrolling="no"\
      src="https://www.youtube.com/embed/G3tSf0UqH_M" target="top"\
      title="CentreTown Motorsports Renfrew Ontario Canada" width="100%">\
      </iframe>\
      <br>\
      <span style="font-size:18px;"><strong>CentreTown Motorsports Renfrew Ontario Canada</strong></span>'
    );
  }

  if (!$('#__facebook_element').length) {
    $('#__facebook_container').append(
      '<iframe allow="encrypted-media" allowtransparency="true"\
      frameborder="0" height="750" id="__facebook_element" scrolling="no"\
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCentretownMotorsportsRenfrew%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"\
      style="border:none;overflow:hidden" title="Facebook" width="340"></iframe>'
    );
  }

  // if (!$('#_intercomSettings').length) {
  //   $(
  //     '<script id="_intercomSettings">\
  //             window.intercomSettings = {\
  //                 api_base: "https://api-iam.intercom.io",\
  //                 app_id: "idi4zees"\
  //             };\
  //         </script>'
  //   ).appendTo('head');
  // }

  // if (!$('#_chat_script').length) {
  //   $(
  //     '<script id="_chat_script" async src="https://bit.ly/3ZJMwdU" type="text/javascript"></script>'
  //   ).appendTo('head');
  // }

  // if (!$('#background_video').attr('src')) {
  //   $('#background_video').attr(
  //     'src',
  //     '/site-uploads/1001213/Files/new_2024.mp4'
  //   );
  // }

  //   if ($('#panelWeather').find('script#_twitter_script').length === 0) {
  //     $('#panelWeather').append(
  //       '<script id="_twitter_script" async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  //     );
  //   }

  //   if ($('#panelFacebook').find('script#_fb_script').length === 0) {
  //     $('#panelFacebook').prepend(
  //       '<script id="_fb_script">\
  //             (function(d, s, id) {\
  //                 var js, fjs = d.getElementsByTagName(s)[0];\
  //                 if (d.getElementById(id)) return;\
  //                 js = d.createElement(s);\
  //                 js.id = id;\
  //                 js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";\
  //                 fjs.parentNode.insertBefore(js, fjs);\
  //             }(document, "script", "facebook-jssdk"));\
  //         </script>'
  //     );
  //   }

  //   if ($('#fbPanel').find('iframe').length === 0) {
  //     $('#fbPanel').html(
  //       '<iframe allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true" frameborder="0" height="450" scrolling="no" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVan-L-Equipment-763800103697345%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"\
  //           style="border:none;overflow:hidden" width="100%"></iframe>'
  //     );
  //   }
}
