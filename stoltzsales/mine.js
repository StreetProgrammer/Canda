
jQuery(function ($) {
    waitForElementToDisplay('.affix', 1000)
    // if ($(".container-fluid.rmv-ph-padding").length) {
    //     console.log("The element you're testing is present.");
    // } else {
    //     console.log("NOOOOOOOOOOOOOOOOOOOOOOOo.");
    // }
    // $('.affix').attr('id', 'affix');
    // $(window).scroll(function fix_element() {
    //     $('#affix').css(
    //         $(window).scrollTop() > 100
    //             ? { 'position': 'fixed', 'top': '10px' }
    //             : { 'position': 'relative', 'top': 'auto' }
    //     );
    //     return fix_element;
    // }());
});


function waitForElementToDisplay(selector, time) {
    if (document.querySelector(selector) != null) {
        $('.form-section.hidden-xs.panel.panel-default.affix').attr('id', 'affix');
        $('#affix').removeClass('affix')
        var affixOffsetTop = $('#affix').offset().top
        var FooterDivOffsetTop = $('#FooterDiv').parent().offset().top - $("#affix").outerHeight(true)

        $(window).scroll(function fix_element() {
            // console.log("$('#affix').offset().top => ", $('#affix').offset().top);
            // console.log("$(window).scrollTop() => ", $(window).scrollTop());

            var top = $(".price-section").outerHeight(true) + $("#parent>.row:nth-child(1)").outerHeight(true)
            var bottom = 40 + $("#FooterDiv").outerHeight(true)
            // if ($(window).scrollTop() > affixOffsetTop) {
            //     console.log('if it valid  ', FooterDivOffsetTop);
            //     if ($(window).scrollTop() > FooterDivOffsetTop) {
            //         console.log('in here', FooterDivOffsetTop);
            //         $('#affix').css({ 'position': 'relative', 'top': 'auto' })
            //     } else {
            //         $('#affix').css({ 'position': 'fixed', 'top': 0, 'bottom': bottom })
            //     }
            // } else {
            //     $('#affix').css({ 'position': 'relative', 'top': 'auto' })
            // }
            $('#affix').css(
                $(window).scrollTop() > affixOffsetTop
                    ? $(window).scrollTop() >= FooterDivOffsetTop ?
                        { 'position': 'relative', 'top': 'auto' }
                        : { 'position': 'fixed', 'top': 0, 'bottom': bottom }
                    : { 'position': 'relative', 'top': 'auto' }
            );
            return fix_element;
        }());
        console.log("The element is displayed, you can put your code instead of this alert.");
        return;
    }
    else {
        console.log('Waiting!!');
        setTimeout(function () {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}



$(document).ready(function () {


    // $("*", document.body).click(function (event) {
    //     var offset = $(this).offset();
    //     event.stopPropagation();
    //     console.log(this.tagName +
    //         " coords ( " + offset.left + ", " + offset.top + " )");
    // });

    // console.log("ready from affix!");
    // window.onscroll = function () { };

    // console.log('affix => ', $('.affix'));

    // var offset = $('.affix').offset();
    // console.log('offset => ', offset);

    // var offsetTop = $('.affix').offset().top;
    // console.log('offsetTop => ', offsetTop);

    // var header = document.getElementsByClassName("affix")[0];
    // var sticky = header.offsetTop;

    // function myFunction() {
    //     if (window.pageYOffset > sticky) {
    //         header.classList.add("sticky");
    //     } else {
    //         header.classList.remove("sticky");
    //     }
    // }
});