$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1477931701694').remove();
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
  // if (!$('#home_video').attr('src')) {
  //     $('#home_video').attr('src', '/site-uploads/1001348/videos/home-video.mp4');
  // }
  // if (!$('#_twitter_widgets').length) {
  //     $('._twitter_widgets_wrapper').append(
  //         '<script id="_twitter_widgets" async="" src="https://platform.twitter.com/widgets.js"\
  //   charset="utf-8"></script>'
  //     );
  // }
  // if (!$('#signupScript').length) {
  //   $(
  //     '<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>'
  //   ).appendTo('head');
  // }
  // console.log('XXXXX => ', $('.ifame-f').find('iframe').length);
  // if ($('.ifame-f').find('iframe').length === 0) {
  //   $('.ifame-f').html(
  //     '<iframe\
  //           allowtransparency="true" class="face-ifram hidden-xs"\
  //           frameborder="0" height="450" scrolling="no"\
  //           src="https://www.facebook.com/v11.0/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df38de9e0e966b1c%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff351618eec33964%26relation%3Dparent.parent&amp;container_width=734&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fstonge.recreation&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"\
  //           target="top" title="Facebook page" width="100%"></iframe>'
  //   );
  // }
}
