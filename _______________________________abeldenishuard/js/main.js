/*handle phone numbers anchor href attr*/
$(document).ready(function() {
    var tel_1 = 'tel:4186896283';
    $('body').find('a.tel-1').attr('href', tel_1);
    var tel_2 = 'tel:';
    $('body').find('a.tel-2').attr('href', tel_2);
});

$(document).ready(function() {
    $('body').find('i').text('');
});

/* Menu */
$(document).ready(function() {
    $('.navbar-toggle').on('click', function() {
        $(this).toggleClass('active');
    });
});

/* Active State Menu */
$(document).ready(function() {
    var url = window.location.pathname;
    $('ul.nav a[href="' + url + '"]')
        .parent()
        .addClass('active');
    $('ul.nav a')
        .filter(function() {
            return this.href == url;
        })
        .parent()
        .addClass('active');
});

/* Sticky Menu on Scroll */
$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 48) {
            $('#comp_1671645795095').addClass('sticky-nav');
        } else {
            $('#comp_1671645795095').removeClass('sticky-nav');
        }
    });
});

/* Slide to top */
$(document).ready(function() {
    $("a[href='#top']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: 0,
            },
            'slow'
        );
        return false;
    });
});

$(document).ready(function() {
    if ($('#normal_vdp').length) {
        if ($('.get-financed').length) {
            var el = $('.get-financed');
            var html = el.html();
            html = html.replace('Get Financed', 'Financing');
            el.html(html);
        }
        if ($('.trade-btn').length) {
            var el = $('.trade-btn');
            var html = el.html();
            html = html.replace('Value a Trade', 'Value your Trade');
            el.html(html);
        }

        if ($('.ecomm-btns .ecomm-btn').length) {
            var el = $('.ecomm-btns .ecomm-btn');
            var html = el.html();
            html = html.replace('Hold With Deposit', 'Reserve');
            el.html(html);
        }

        if ($('.our-price-div .our-price').length) {
            var el = $('.our-price-div .our-price');
            var html = el.html();
            html = html.replace('Dealer Price', 'Starting from:');
            el.html(html);
        }

        if ($('.our-price-div .primary').length) {
            var el = $('.our-price-div .primary');
            var html = el.html();
            html = html.replace('$', '');
            html = html.replace(' CAD', '$');
            el.html(html);
        }
    }
});

$(document).ready(function() {});

// var theLanguage = $('html').attr('lang');
// // Diferent language
// if (theLanguage == 'fr') {
//     $('.finacning-link').attr('href', '/fr/Finance-Request');

//     $('.finacning-link').attr('target', '_self');
// } else {
//     $('.finacning-link').attr('href', '/Finance-Request');

//     $('.finacning-link').attr('target', '_self');
// }

/* handle slider links in EN - FR */
$(document).ready(function() {
    if ($('[data-com-id="Slider"]').length) {
        $('.carousel-inner .item').each(function(idx, el) {
            var langPrefix = $('html').attr('lang');
            var element = $(el);
            var newHref =
                '/' +
                langPrefix +
                '/' +
                element.find('.sliderTitle').text().trim().replace(' ', '-');
            console.log('newHref => ', newHref);
            element.attr('href', newHref);
        });
    }
});

function changeSRPPriceLable() {
    if ($('.light2021').length) {
        if ($('.price.price.show-item .ttl').length) {
            $('.price.price.show-item .ttl').text('Starting from');
        }

        if ($('.price.price.show-item').length) {
            var el = $('.price.price.show-item');
            var html = el.html();
            var html = html.replace('CAD', '');
            el.html(html);
        }

        if (
            $('.add-to-cart-product.deposit-to-cart.add-to-cart-btn.show-item').length
        ) {
            var el = $(
                '.add-to-cart-product.deposit-to-cart.add-to-cart-btn.show-item'
            );
            var html = el.html();
            var html = html.replace('Deposit', 'Reserve');
            el.html(html);
        }
    }
}

$(document).ajaxComplete(function() {
    changeSRPPriceLable();
});

$(document).ready(function() {
    changeSRPPriceLable();
});