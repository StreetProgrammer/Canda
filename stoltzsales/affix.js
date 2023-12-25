
jQuery(function ($) {
    waitForElementToDisplay('.affix', 1000)
});


function waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
        $('.form-section.hidden-xs.panel.panel-default.affix').attr('id', 'affix');
        $('#affix').removeClass('affix')
        var affixOffsetTop = $('#affix').offset().top
        var FooterDivOffsetTop = $('#FooterDiv').parent().offset().top - $("#affix").outerHeight(true)

        $(window).scroll(function fix_element() {

            var top = $(".price-section").outerHeight(true) + $("#parent>.row:nth-child(1)").outerHeight(true)
            var bottom = 40 + $("#FooterDiv").outerHeight(true)
            $('#affix').css(
                $(window).scrollTop() > affixOffsetTop
                    ? $(window).scrollTop() >= FooterDivOffsetTop ?
                        { 'position': 'relative', 'top': 'auto' }
                        : { 'position': 'fixed', 'top': 0, 'bottom': bottom }
                    : { 'position': 'relative', 'top': 'auto' }
            );
            return fix_element;
        }());
        return;
    }
    else {
        console.log('Waiting!!');
        setTimeout(function () {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

