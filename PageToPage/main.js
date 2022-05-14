function handleSlideBtns() {
    var leftA = $("a[data-slide='prev']").empty();
    var rightA = $("a[data-slide='next']").empty();
    leftA.empty();
    rightA.empty();
    leftA.html(`
        <span type="button" class="left-btn-slide btn btn-default btn-circle btn-lg" style="padding: 6px 10px;">
            <i class="fas fa-caret-left"></i>
        </span>
    `)
    rightA.html(`
        <span type="button" class="right-btn-slide btn btn-default btn-circle btn-lg">
        <i class="fas fa-caret-right"></i>
        </span>
    `)

}
$(document).ready(function() {
    $(".circle").on("click", function() {
        var toggleAttr = $(this).attr('data-target')
        if (toggleAttr === '#phones') {
            var Iclass = $(this).children('i').hasClass("fa-phone-alt")
            if (Iclass == true) {
                $(this).children('i').addClass("fa-times");
                $(this).children('i').removeClass("fa-phone-alt");
            } else {
                $(this).children('i').addClass("fa-phone-alt")
                $(this).children('i').removeClass("fa-times");
            }
        } else {
            var Iclass = $(this).children('i').hasClass("fa-bars")
            if (Iclass == true) {
                $(this).children('i').addClass("fa-times");
                $(this).children('i').removeClass("fa-bars");
            } else {
                $(this).children('i').addClass("fa-bars")
                $(this).children('i').removeClass("fa-times");
            }
        }

    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 120) {
            $('.top-header-container').addClass('fixed-header');
            $('.upper-header-hidden-on-scroll').hide();
        } else {
            $('.top-header-container').removeClass('fixed-header');
            $('.upper-header-hidden-on-scroll').show();
        }
    });

    handleSlideBtns();


    _siteid = "abcc6bdc-2c3f-48c0-842a-97f6f1abd3e6";
    _subscriberId = "df25b31f-a303-4c66-bf02-2264a691566f";

    function comCC24StartFunctioning(scriptSource) {
        var scrDynamicHeadAttr = document.createElement('script');
        scrDynamicHeadAttr.setAttribute('src', scriptSource);
        scrDynamicHeadAttr.setAttribute('type', 'text/javascript');
        scrHeadAttr = document.getElementsByTagName('head')[0];
        scrHeadAttr.insertBefore(scrDynamicHeadAttr, scrHeadAttr.firstChild);
    }

    comCC24StartFunctioning(window.location.protocol + "//service11.carchat24.com/VisitorManager/Scripts/comCC24DomReady.js");

});