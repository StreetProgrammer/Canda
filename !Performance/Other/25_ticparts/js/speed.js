$(function() {
    /*Delete slider component in mobile*/
    if ($(window).width() < 700) {
        $('#comp_1492010845490').remove();
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
    userInteractionEvents.forEach(function(event) {
        window.addEventListener(event, triggerScriptLoader, {
            passive: true,
        });
    });

    function triggerScriptLoader() {
        loadScripts();
        userInteractionEvents.forEach(function(event) {
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
    if ($('#_FB_container').find('iframe').length === 0) {
        $('#_FB_container').html(
            '<iframe allowtransparency="true" frameborder="0" height="490" scrolling="no" src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/TIC-Parts-Service-160183007432855&amp;tabs=timeline&amp;width=280&amp;height=440&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"\
      target="top" width="240"></iframe>'
        );
    }
}