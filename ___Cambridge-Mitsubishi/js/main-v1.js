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
    var windowWidth = $(window).width();
    $(window).resize(function () {
        console.log("$(window).width() => 750", $(window).width());
        windowWidth = $(window).width()
    });

    if ($('#build-and-price').size() > 0) {
        $('#build-and-price').attr('href', '/Build-and-price/?model=' + $('.dots li.active').attr("maodel-id").toLowerCase());
    }
    if ($('#searh-in-stock').size() > 0) {
        $('#searh-in-stock').attr('href', '/In-Stock/search/' + $('.dots li.active').attr("maodel-name").toLowerCase());
    }
    setTimeout(function () {
        $("#section01").css("background-size", "300%");
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
            // console.log('slides Count ', slidesCount);
            var step = 100 / (slidesCount - 1);
            // console.log('step ', step);
            var dotOrder = $(this).parent().hasClass('dots') ? $('.dots li').index(this) : $('.model-nav li').index(this);
            // console.log('if click model nav', $('.model-nav li').index(this));

            // console.log('dotOrder => ', dotOrder);

            $('.dots li').eq(dotOrder).addClass('active')
            $('.model-nav li').eq(dotOrder).addClass('active')
            $('#model-name').text($('.dots li.active').attr("maodel-name"))
            if ($('#searh-in-stock').size() > 0) { $('#searh-in-stock').attr('href', '/In-Stock/search/' + $('.dots li.active').attr("maodel-name").toLowerCase()); }
            if ($('#build-and-price').size() > 0) { $('#build-and-price').attr('href', '/Build-and-price/?model=' + $('.dots li.active').attr("maodel-id").toLowerCase()); }
            var moveTo = dotOrder * step;

            if (windowWidth < 750) {
                var prefix = 0
                console.log('typeof dotOrder ', typeof dotOrder);
                switch (dotOrder) {
                    case 0:
                        prefix = 10
                        break;
                    case 1:
                        prefix = 5
                        break;
                    case 3:
                        prefix = -5
                        break;
                    case 4:
                        prefix = -10
                        break;
                }
                // console.log('prefix ', prefix);
                moveTo = moveTo + prefix
            }
            // console.log('move to ', moveTo);

            // console.log("windowWidth from slide func => ", windowWidth);

            $("#section01").css("background-position", moveTo + "% 0");
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
                if ($("#" + $.scrollify.current().attr('id') + "-V").children("source").attr('src').length > 0) {
                    $("#" + $.scrollify.current().attr('id') + "-V").get(0).currentTime = 0;
                    setTimeout(function () {
                        $("#" + $.scrollify.current().attr('id') + "-V").get(0).play();
                    }, 200);
                } else {
                    var Source = $("#" + $.scrollify.current().attr('id') + "-V").children("source")
                    var attr = Source.attr('delaySrc')
                    if (typeof attr !== typeof undefined && attr !== false) {
                        console.log('Source delaySrc', attr);
                        Source.attr("src", attr);
                        Source.parent()[0].load();
                        Source.parent()[0].play();
                    }
                }
                console.log($("#" + $.scrollify.current().attr('id') + "-V").children("source").attr('src').length > 0 ? 'src Exist' : 'empty Src');


            }
        },
    });

    $('.scroll-a').on('click', function (e) {
        e.preventDefault();
        $.scrollify.move($(this).attr("href"));
    });




    /* Google Reviews */
    $("#google-rev").googlePlaces({
        placeId: 'ChIJxciVNbqJK4gR_0Cdf8UzIps'
        , render: ['reviews', 'address', 'phone']
        , min_rating: 5
        , max_rows: 6
        , shorten_names: false
        , schema: {
            displayElement: "#schema"
        }
        , address: {
            displayElement: "#custom-address-id"
        }
    });
});

/* Start Chat SCript */
_siteid = "c6e4555a-f198-4cb0-ae57-061b6e0b26b5";
_subscriberId = "5b155c17-6c20-474c-a9ed-9a7abe78b1eb";
function comCC24StartFunctioning(scriptSource) {
    var scrDynamicHeadAttr = document.createElement('script');
    scrDynamicHeadAttr.setAttribute('src', scriptSource);
    scrDynamicHeadAttr.setAttribute('type', 'text/javascript');
    scrHeadAttr = document.getElementsByTagName('head')[0];
    scrHeadAttr.insertBefore(scrDynamicHeadAttr, scrHeadAttr.firstChild);
}
comCC24StartFunctioning(window.location.protocol + "//service11.carchat24.com/VisitorManager/Scripts/comCC24DomReady.js");








