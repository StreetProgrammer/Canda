$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1640628441087').remove();
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
  if (!$('#__animation_style').length) {
    $(
      '<style id="__animation_style">\
      .container-90 ul li a:hover .second-img {\
        padding-bottom: 10px;\
      }\
      .container-90 ul li a:hover {\
        border: 4px solid #075ca8;\
      }\
      .container-90 ul li a:hover,\
      .container-90 ul li a:focus {\
        background: #282828;\
      }\
      </style>'
    ).appendTo('head');
  }

  // if (!$('#background-video').attr('src')) {
  //     $('#background-video').attr(
  //         'src',
  //         '/site-uploads/1001348/videos/home-video.mp4'
  //     );
  // }

  // if (!$('#_larg_map_element').length) {
  //   $('#_larg_map_container').html(
  //     '<iframe  id="_larg_map_element" allowfullscreen="" frameborder="0" height="450"\
  //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.497706297811!2d-79.6734314844812!3d44.299717779104476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882abea2eb4c3703%3A0x687e9cac6e5f6cbc!2s3217%20Thomas%20St%2C%20Innisfil%2C%20ON%20L9S%203W2!5e0!3m2!1sen!2sca!4v1571949808745!5m2!1sen!2sca"\
  //     style="border:0; width:100%;"></iframe>'
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
