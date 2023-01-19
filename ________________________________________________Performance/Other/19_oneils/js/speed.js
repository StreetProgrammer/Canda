$(function() {
    /*Delete slider component in mobile*/
    if ($(window).width() < 700) {
        $('#comp_1497369657978').remove();
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

    function loadScripts() {
        if (!$('#_1_script').length) {
            $(
                '<script id="_1_script" async src="https://tag.simpli.fi/sifitag/fbf0d310-9803-0136-4f23-067f653fa718"  type="text/javascript" class="" defer="defer"></script>'
            ).appendTo('head');
        }
        if (!$('#_2_script').length) {
            $(
                '<script id="_2_script" async src="https://bit.ly/2NFUy4A" type="text/javascript"  type="text/javascript" class="" defer="defer"></script>'
            ).appendTo('head');
        }
        if (!$('#_3_script').length) {
            $(
                '<script id="_3_script" async src="https://bit.ly/2NFUy4A" type="text/javascript"  type="text/javascript" class="" defer="defer"></script>'
            ).appendTo('head');
        }
    }
});