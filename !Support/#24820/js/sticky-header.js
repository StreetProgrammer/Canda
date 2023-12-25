var centerDivMargin;
$(function() {
    centerDivMargin = $('#nav_66572').innerHeight() - 0;
    setTimeout(() => {
        centerDivMargin = $('#nav_66572').innerHeight() - 0;
    }, 100);
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $('#HeaderDiv .header').height() - 1) {
            $('#nav_66572').addClass('sticky-header');
            // $('.menu-lg-logo-link').addClass('toggle');

            $('.breadcrumbParent').css({
                'margin-top': centerDivMargin,
            });
            if ($('#right-cta-buttons.affix').length) {
                $('#right-cta-buttons.affix').css({
                    'margin-top': $('.header-1-nav .bottom').height() + 5,
                });
            }
        } else {
            $('#nav_66572').removeClass('sticky-header');
            // $('.menu-lg-logo-link').removeClass('toggle');
            $('.breadcrumbParent').css({
                'margin-top': 0,
            });
            $('#right-cta-buttons.affix').removeAttr('style');
        }
    });
});

// if ($('#51785').length || $('#51810').length || $('#51810').length) {
//     $(document).ajaxComplete(function() {
//         centerDivMargin = $('.header-1-nav').innerHeight() - 0;
//         console.log('2 centerDivMargin => ', centerDivMargin);
//     });
// }