jQuery(function ($) {
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav-container").addClass("fixed-top");
        } else {
            $(".nav-container").removeClass("fixed-top");
        }
    });
    // Sub Menu
    $(".sidebar-dropdown > a").click(function (e) {
        e.preventDefault()
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });
    // End Submenu
    $("#close-sidebar").click(function () {
        $(".sidebar-wrapper").removeClass("toggled");
        // $(".nav-location-phone").css("display", "block")
    });
    $("#show-sidebar").click(function () {
        // $(".nav-location-phone").css("display", "none")
        $(".sidebar-wrapper").addClass("toggled");
    });
    $("#close-landing-sidebar").click(function () {
        $(".sidebar-wrapper").removeClass("toggled");
        // $(".nav-location-phone").css("display", "block")
    });
    $("#show-landing-sidebar").click(function () {
        // $(".nav-location-phone").css("display", "none")
        $(".sidebar-wrapper").addClass("toggled");
    });
});

$(document).ready(function () {
    if ($('#build-and-price').size() > 0) {
        $('#build-and-price').attr('href', '/Build-and-price/?model=' + $('.dots li.active').attr("maodel-id").toLowerCase());
    }
    if ($('#searh-in-stock').size() > 0) {
        $('#searh-in-stock').attr('href', '/In-Stock/model/' + $('.dots li.active').attr("maodel-name") + '/text/' + $('.dots li.active').attr("maodel-name"));
    }
    setTimeout(function () {
        $("#section01").css("background-size", "320%");
    }, 1000);

    $('#model-name').text($('.dots li.active').attr("maodel-name"))

    // navigate image sliders
    $('.dots li, .model-nav li').on('click', function (e) {

        e.preventDefault()
        if (!$(this).hasClass('active')) {
            $(".dots>li.active").removeClass("active");
            $(".model-nav li.active").removeClass("active");
            $('#model-name').text($('.dots li.active').attr("maodel-name"))

            var slidesCount = $('.dots').children().length;
            console.log('slides Count ', slidesCount);
            var step = 100 / (slidesCount - 1);
            console.log('step ', step);
            var dotOrder = $(this).parent().hasClass('dots') ? $('.dots li').index(this) : $('.model-nav li').index(this);
            console.log('if click model nav', $('.model-nav li').index(this));

            console.log('dotOrder => ', dotOrder);

            $('.dots li').eq(dotOrder).addClass('active')
            $('.model-nav li').eq(dotOrder).addClass('active')
            $('#model-name').text($('.dots li.active').attr("maodel-name"))
            if ($('#searh-in-stock').size() > 0) {
                var modelname = $('.dots li.active').attr("maodel-name");
                $('#searh-in-stock').attr('href', '/In-Stock/model/' + modelname + '/text/' + modelname);
            }
            if ($('#build-and-price').size() > 0) {
                $('#build-and-price').attr('href', '/Build-and-price/?model=' + $('.dots li.active').attr("maodel-id").toLowerCase());
            }
            var moveTo = dotOrder * step;
            console.log('move to ', moveTo);

            $("#section01").css("background-position", moveTo + "% 50%");
        }
    });

});

$(function () {
    $.scrollify({
        section: ".demo",
        after: function () {
            $(".scroll>ul>li>a.active").removeClass("active");
            $("a[href='#" + $.scrollify.current().attr('id') + "']").addClass('active')
            // console.log($.scrollify.current().attr('id'));
            if ($.scrollify.current().has("video").length) {
                // console.log("#" + $.scrollify.current().attr('id') + "-V");
                $("#" + $.scrollify.current().attr('id') + "-V").get(0).currentTime = 0;
                setTimeout(function () {
                    $("#" + $.scrollify.current().attr('id') + "-V").get(0).play();
                }, 200);
            }
        },
    });

    $('.scroll-a').on('click', function (e) {
        e.preventDefault();
        $.scrollify.move($(this).attr("href"));
    });

});



/* Start Chat SCript */
_siteid = "c6e92908-8748-4825-9394-84d107f2bbeb";
_subscriberId = "e5419a78-69fb-4934-a9da-e2ac72b3bd5a";
function comCC24StartFunctioning(scriptSource) {
    var scrDynamicHeadAttr = document.createElement('script');
    scrDynamicHeadAttr.setAttribute('src', scriptSource);
    scrDynamicHeadAttr.setAttribute('type', 'text/javascript');
    scrHeadAttr = document.getElementsByTagName('head')[0];
    scrHeadAttr.insertBefore(scrDynamicHeadAttr, scrHeadAttr.firstChild);
}

comCC24StartFunctioning(window.location.protocol + "//service11.carchat24.com/VisitorManager/Scripts/comCC24DomReady.js");








