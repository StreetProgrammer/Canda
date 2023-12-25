$(function() {
    /*Delete slider component in mobile*/
    if ($(window).width() < 700) {
        $('#comp_1630685589603').remove();
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

    // if (!$('#__Intercom').length) {
    //   $(
    //     '<script id="__Intercom" front-src="/site-uploads/1001377/scribt/speed.js"></script>'
    //   ).appendTo('head');
    // }

    // if (!$('#background-video').attr('src')) {
    //     $('#background-video').attr(
    //         'src',
    //         '/site-uploads/1001348/videos/home-video.mp4'
    //     );
    // }

    // if (!$('#_home-youtube').length) {
    //   $('#_home-youtube-container').append(
    //     '<iframe id="_home-youtube" allow="autoplay; encrypted-media" allowfullscreen="" data-src="https://www.youtube.com/embed/HJMOcjm7Uzs?rel=0" frameborder="0" height="250" loading="lazy" scrolling="no" src="https://www.youtube.com/embed/HJMOcjm7Uzs?rel=0" width="100%"></iframe>'
    //   );
    // }

    if ($('#panelWeather').find('script#_twitter_script').length === 0) {
        $('#panelWeather').append(
            '<script id="_twitter_script" async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
        );
    }

    if ($('#panelFacebook').find('script#_fb_script').length === 0) {
        $('#panelFacebook').prepend(
            '<script id="_fb_script">\
            (function(d, s, id) {\
                var js, fjs = d.getElementsByTagName(s)[0];\
                if (d.getElementById(id)) return;\
                js = d.createElement(s);\
                js.id = id;\
                js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";\
                fjs.parentNode.insertBefore(js, fjs);\
            }(document, "script", "facebook-jssdk"));\
        </script>'
        );
    }

    if ($('#fbPanel').find('iframe').length === 0) {
        $('#fbPanel').html(
            '<iframe allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen="true" frameborder="0" height="450" scrolling="no" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVan-L-Equipment-763800103697345%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId"\
          style="border:none;overflow:hidden" width="100%"></iframe>'
        );
    }
}