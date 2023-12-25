// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function() {
    var tel_1 = 'tel:4166298989';
    $('body').find('a.tel-1').attr('href', tel_1);
    var tel_2 = '';
    $('body').find('a.tel-2').removeAttr('href');
});

/* slide to top */
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

// remove spaces from i tags
$(document).ready(function() {
    $('body').find('i').text('');
});

/* Start Handle Fake anchors */
$(function() {
    $('[data-href]').on('click', function(e) {
        if (!e.target.matches('a')) {
            var href = $(this).data('href');
            window.location = href;
        }
    });
});
/* End Handle Fake anchors */

// Website Scripts

// Handle header logo
var oldContent = $('.nav.navbar-nav').find('>li:nth-child(1) a').html();
$(document).ready(function() {
    // $('.nav.navbar-nav')
    //   .find('>li:nth-child(1) a')
    //   .html(
    //     '<img src="/site-uploads/1001368/images/logo.png" style="margin: 1px;max-width: 80%;">'
    //   );
    // function Change_site_menu_content() {
    //   if (window.innerWidth > 767) {
    //     $('.nav.navbar-nav')
    //       .find('>li:nth-child(1) a')
    //       .html(
    //         '<img src="/site-uploads/1001368/images/svg/logo.svg" style="margin: 1px;max-width: 95%;">'
    //       );
    //   } else {
    //     $('.nav.navbar-nav').find('>li:nth-child(1) a').html(oldContent);
    //     $('.nav.navbar-nav')
    //       .find('>li:nth-child(1) a')
    //       .css({ 'font-size': '16px' });
    //   }
    // }
    // $(function () {
    //   Change_site_menu_content();
    // });
    // $(window).on('resize', function () {
    //   Change_site_menu_content();
    // });
    /* End Change site menu content for mobile */
});

// start handle Home SRP
$(document).ready(function() {
    if ($('#page_53040').length) {
        $('#fitmentSearch').length &&
            $('#fitmentSearch').attr('id', 'customFitmentSearch');
    }
    $('#customFitmentSearch').on('click', function() {
        var paremes = $('#fitmentForm').serialize();
        var href = location.href.replace(/\?.*/, '') + 'Adventure/?' + paremes;
        console.log('href => ', href);
        window.location.assign(href);
    });
});
// End handle Home SRP

/* Start Change site menu content for mobile */
$(function() {
    $('button.navbar-toggle').html(
        '<span class="upper bold">Menu</span>' +
        '<img src="/site-uploads/1001372/images/svg/menu-bars.svg" alt="" style="width: 100%;">'
    );
});
/* End Change site menu content for mobile */

/* Start Hide Content in VDP */
$(function() {
    if ($('.parts-vdp').length) {
        $('.parts-vdp').length &&
            $('.hidden-vdp').length &&
            $('.hidden-vdp').remove();
    }
});
/* End Hide Content in VDP */

// start Customized Parts VDP Tags Structure
$(document).ready(function() {
    if ($('.parts-vdp').length) {
        var partsPriceDiv = $('.parts-price-div');
        var htmlToAppend =
            '<div style="flex: 1 1;display: flex;justify-content: flex-end;"><img alt="Super Sonic Road Race School" loading="lazy" src="/site-uploads/1001372/images/SSRRS_Logo 1.svg"></div>';
        partsPriceDiv.append(htmlToAppend);

        $('.simpleCart_quantityBox').hide();
        $('.quote-btn').hide();
        var addToCart = $(
            '.ecomm-btn.add-to-cart-product.add-to-cart-btn.add-to-cart.rt-action-btn'
        );
        addToCart.addClass('btn btn-warning');
        addToCart.removeClass('ecomm-btn');

        var oldhtml = addToCart.html();
        addToCart.html(
            oldhtml.replace(
                oldhtml,
                '<i class="fas fa-shopping-cart mx-2"></i>Book Now'
            )
        );
        addToCart.after(
            '<a class="btn btn-primary btn-block upper _16 w500 mb-3" data-target="#WaiverModal" data-toggle="modal" href="#">' +
            '<i class="fas fa-exclamation-circle mx-2"></i>Sign our Waiver' +
            '</a>' +
            '<a class="btn btn-info btn-block upper _16 w500 mb-3" href="/FAQ/">Frequently asked questions<span class="icon arrows-right-icon">&nbsp;</span></a>' +
            '<div aria-hidden="true" aria-labelledby="WaiverModal" class="modal" id="WaiverModal" role="dialog"' +
            'tabindex="-1">' +
            '<div class="modal-dialog" role="document">' +
            '<div class="modal-content">' +
            '<div class="modal-body heading_font">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );

        var riskContent =
            '<h4>A Word About The Risk</h4>\
                              <p>Motorcycling is inherently a risky sport - it is your responsibility to stay safe.</p>\
                              <p>Our courses are fun but also strenuous, tiring, and mentally and physically challenging.</p>\
                              <p>It’s up to you to speak up anytime during your course to opt out if you have reached your limit or are not comfortable.</p>';
        var riskLgContent =
            '<div class="about-risk hidden-xs" style="width: 32%; margin: 1.2vw 0.5vw 0.5vw 0.5vw;">\
                          ' +
            riskContent +
            '\
        </div>';
        var riskXsContent =
            '<div class="about-risk visible-xs" style="width: 100%; margin: 1.2vw 0.5vw 0.5vw 0.5vw;">\
                          ' +
            riskContent +
            '\
        </div>';
        $(riskLgContent).insertAfter('.model-tabs.container-fluid');
        $(riskXsContent).insertBefore('.model-tabs.container-fluid');
    }
});
// End Customized Parts VDP Tags Structure

/* Start Start Handle slider inner content */
$(document).ready(function() {
    // check if we are in home (target page which contain the Slider)
    if ($('#page_53132')) {
        var $slider_inner_wrapper = $('#comp_1646080094052 .carousel.slide');
        console.log('slider_inner_wrapper => ', $slider_inner_wrapper);
        $slider_inner_wrapper.append(`<div class="content">
                <img src="/site-uploads/1001372/images/svg/__S.svg"/>
                <h1>Super Sonic road Race School by Motul</h1>                        
                <h3>Canadian Mini Superbike Championship Series by Motul | Canada Cup</h3>                         
                <a class="btn btn-trans upper _22" href="Our-Story">Who we are</a>
              </div>`);
    }
});
/* End Start Handle slider inner content */