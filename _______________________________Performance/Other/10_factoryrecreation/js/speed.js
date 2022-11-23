$(function () {
  /*Delete slider component in mobile*/
  if ($(window).width() < 700) {
    $('#comp_1631559189130').remove();
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
    if (!$('#home_video').attr('src')) {
      $('#home_video').attr(
        'src',
        '/site-uploads/1001348/videos/home-video.mp4'
      );
    }

    if (!$('#_twitter_widgets').length) {
      $('._twitter_widgets_wrapper').append(
        '<script id="_twitter_widgets" async="" src="https://platform.twitter.com/widgets.js"\
        charset="utf-8"></script>'
      );
    }

    if (!$('.fb-page.fb_iframe_widget').length) {
      $('._facebook_iframe_wrapper').prepend(
        '<div class="fb-page fb_iframe_widget" data-adapt-container-width="true"\
        data-height="400" data-hide-cover="false"\
        data-href="https://www.facebook.com/factoryrecreation" data-show-facepile="true"\
        data-small-header="true" data-tabs="timeline" data-width=""\
        fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=300&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffactoryrecreation&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width="\
        fb-xfbml-state="rendered"><span\
            style="vertical-align: bottom; width: 300px; height: 400px;">\
            <iframe allow="encrypted-media" allowfullscreen="true"\
                allowtransparency="true" data-testid="fb:page Facebook Social Plugin"\
                frameborder="0" height="400px" name="f1f54475f2dff2" scrolling="no"\
                src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfbacd903315ed%26domain%3Dsimplywebeditor.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fsimplywebeditor.com%252Ff32796880d54f94%26relation%3Dparent.parent&amp;container_width=300&amp;height=400&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffactoryrecreation&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width="\
                style="border: none; visibility: visible; width: 300px; height: 400px;"\
                title="fb:page Facebook Social Plugin" width="1000px"></iframe></span>\
    </div>'
      );
    }
  }
});
