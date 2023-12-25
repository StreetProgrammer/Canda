$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1623073876174').remove();
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
  if (!$('#__askava').length) {
    $(
      '<script id="__askava" src="https://assets.askava.ai/v2/api.js?widgetId=dddaead8f003" async defer></script>'
    ).appendTo('head');
  }

  if (!$('#__gtag_report_conversion').length) {
    $(
      '<script id="__gtag_report_conversion">\
        function gtag_report_conversion(url) {\
            var callback = function () {\
                if (typeof (url) != "undefined") {\
                    window.location = url;\
                }\
            };\
            gtag("event", "conversion", {\
                "send_to": "AW-1065690985/g5KtCNuvxOADEOnOlPwD",\
                "value": 400.0,\
                "currency": "CAD",\
                "transaction_id": "",\
                "event_callback": callback\
            });\
            return false;\
        }\
    </script>'
    ).appendTo('head');
  }

  if (!$('#__askava').length) {
    $(
      '<script async src="https://www.googletagmanager.com/gtag/js?id=AW-1065690985"> </script>'
    ).appendTo('head');
  }

  if (!$('#__dataLayer').length) {
    $(
      '<script id="__dataLayer">\
          window.dataLayer = window.dataLayer || [];\
          function gtag() {\
              dataLayer.push(arguments);\
          }\
          gtag("js", new Date());\
          gtag("config", "AW-1065690985");\
      </script>'
    ).appendTo('head');
  }

  if (!$('#__fb_script_1').length) {
    $(
      '<script id="__fb_script_1">\
      ! function (f, b, e, v, n, t, s) {\
          if (f.fbq) return;\
          n = f.fbq = function () {\
              n.callMethod ?\
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments)\
          };\
          if (!f._fbq) f._fbq = n;\
          n.push = n;\
          n.loaded = !0;\
          n.version = "2.0";\
          n.queue = [];\
          t = b.createElement(e);\
          t.async = !0;\
          t.src = v;\
          s = b.getElementsByTagName(e)[0];\
          s.parentNode.insertBefore(t, s)\
      }(window, document, "script",\
          "https://connect.facebook.net/en_US/fbevents.js");\
      fbq("init", "2365850463442841");\
      fbq("track", "PageView");\
  </script>'
    ).appendTo('head');
  }

  if (!$('#__callrail').length) {
    $(
      '<script id="__callrail" type="text/javascript" src="//cdn.callrail.com/companies/786245418/09aef45150bb37f75af3/12/swap.js"></script>'
    ).appendTo('head');
  }

  if (!$('#_AskAva_cta_element').length) {
    $('#_AskAva_cta_container').html(
      '<div id="_AskAva_cta_element" class="AskAva-cta a-4fe24a5cbbd94 ava-credit-tool-inline-1-0-1-powersports-snowmobile ava-credit-tool-inline-1-0-1-powersports-snowmobile-1-0-1"\
      data-product="credit-tool" data-theme="powersports-snowmobile" data-type="inline"\
      data-version="1.0.1">\
      <div class="a-b34d896f264c" data-plugin-id="ImgSourceSet-1">\
          <picture>\
              <source media="(min-width: 1200px)"\
                  srcset="https://cdn.assets.askava.ai/global/powersport-snowmobile-ava-credit-1920w-1670621898648.jpg">\
              <source media="(min-width: 750px)"\
                  srcset="https://cdn.assets.askava.ai/global/powersport-snowmobile-ava-credit-1200w-1670621860035.jpg">\
              <img alt="ava-credit-powersports-banner-bg" class="a-456485d5b020 a-5239d40b5c8f"\
                  src="https://cdn.assets.askava.ai/global/powersport-snowmobile-ava-credit-750w-1670621829258.jpg">\
          </picture>\
          <div class="a-0102b7763449">&nbsp;</div>\
      </div>\
      <div class="a-eac715a7bb6e">\
          <div class="a-e853028d988d"><img alt="Equifax" class="a-ebec260af6ac" loading="lazy"\
                  src="https://cdn.assets.askava.ai/global/equifax-logo-rounded-white-bg-1644619419302.png">\
              <div class="a-50bc022df38e">\
                  <div class="a-02c975d9b84f">\
                      <div class="a-26bcc37b2fa5">Don\'t wait, start riding today.&nbsp;<br> Start your pre-approval now.&nbsp;</div>\
                  </div>\
                  <div class="a-90cefb1ef043 AskAva-button"><img\
                          src="/site-uploads/1001331/Images/start-your-pre-approval-navy-blue-white-white-1670617414857.png">\
                  </div>\
              </div>\
          </div>\
      </div>\
  </div>'
    );
  }

  // if (!$('#background-video').attr('src')) {
  //     $('#background-video').attr(
  //         'src',
  //         '/site-uploads/1001348/videos/home-video.mp4'
  //     );
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
