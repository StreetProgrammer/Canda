// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:5196883278';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = 'tel:8556993278';
  $('body').find('a.tel-2').attr('href', tel_2);
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    return false;
  });
});

// remove spaces from i tags
$(document).ready(function () {
  $('body').find('i').text('');
});

/* Start Handle Fake anchors */
$(function () {
  $('[data-href]').on('click', function (e) {
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
$(document).ready(function () {
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
$(document).ready(function () {
  if ($('#page_53040').length) {
    $('#fitmentSearch').length &&
      $('#fitmentSearch').attr('id', 'customFitmentSearch');
  }
  $('#customFitmentSearch').on('click', function () {
    var paremes = $('#fitmentForm').serialize();
    var href = location.href.replace(/\?.*/, '') + 'Adventure/?' + paremes;
    console.log('href => ', href);
    window.location.assign(href);
  });
});
// End handle Home SRP

/* Start Change site menu content for mobile */
$(function () {
  // $('button.navbar-toggle').html(
  //   '<span class="upper bold">Menu</span>' +
  //     '<img src="/site-uploads/1001372/images/svg/menu-bars.svg" alt="" style="width: 100%;">'
  // );
});
/* End Change site menu content for mobile */

/* Start Hide Content in VDP */
$(function () {
  if ($('.parts-vdp').length) {
    $('.parts-vdp').length &&
      $('.hidden-vdp').length &&
      $('.hidden-vdp').remove();
  }
});
/* End Hide Content in VDP */

// start Customized Parts VDP Tags Structure
$(document).ready(function () {
  if ($('.parts-vdp').length) {
    var btnsHtml = '';

    // var btnContainer_lg = $('.right-cta-buttons .CTA-box');
    // var btnContainer_sm = $('.right-cta-buttons.visible-xs');

    // console.log('btnContainer => ', btnContainer_lg.html());
    // var bookNow = btnContainer_lg.find('.book-demo');
    // var bookNowHref = bookNow.attr('href');
    // btnsHtml +=
    //   '<a class="btn btn-warning btn-block upper _16 w500 mb-3" href="' +
    //   bookNowHref +
    //   '">' +
    //   '<i class="fas fa-shopping-cart mx-2"></i>Book Now' +
    //   '</a>' +
    //   btnContainer_lg.html(btnsHtml);
    // btnContainer_sm.html(btnsHtml);

    // $('.simpleCart_quantityBox').hide();
    // $('.quote-btn').hide();
    // var addToCart = $(
    //   '.ecomm-btn.add-to-cart-product.add-to-cart-btn.add-to-cart.rt-action-btn'
    // );
    // addToCart.addClass('btn btn-warning _16');
    // addToCart.removeClass('ecomm-btn');

    // var oldhtml = addToCart.html();
    // addToCart.html(
    //   oldhtml.replace(
    //     oldhtml,
    //     '<i class="fas fa-shopping-cart mx-2"></i>Book Now'
    //   )
    // );
    // addToCart.after(
    //   '<a class="btn btn-primary btn-block upper _16 w500 mb-3" href="/Waiver/">' +
    //     '<i class="fas fa-exclamation-circle mx-2"></i>Sign our Waiver' +
    //     '</a>' +
    //     '<a class="btn btn-info btn-block upper _16 w500 mb-3" href="/FAQ/">Frequently asked questions<span class="icon arrows-right-icon">&nbsp;</span></a>'
    // );
  }
});
// End Customized Parts VDP Tags Structure

/* Start Start Handle slider inner content */
$(document).ready(function () {
  // check if we are in home (target page which contain the Slider)
  if ($('#page_53807')) {
    var $slider_inner_wrapper = $('#comp_1648048599153 .carousel.slide');
    console.log('slider_inner_wrapper => ', $slider_inner_wrapper);
    $slider_inner_wrapper.append(`<div class="content">
                <h1>BRP OEM Parts & Accessories</h1>                  
                <div class="actions">
                  <a class="btn btn-primary upper _18" href="https://partsfinder.onlinemicrofiche.com/lockhartsodyssey/showmodel.asp" target="blank">Shop Parts<i class="fas fa-chevron-right"></i></a>
                  <a class="btn btn-primary upper _18" href="Shop-Online">Shop Accessories <i class="fas fa-chevron-right"></i></a>
                </div>      
              </div>`);
  }
});
/* End Start Handle slider inner content */

/* Start Handle adding "Got Questions?" link to the menu */
$(document).ready(function () {
  setTimeout(() => {
    var li_dropdown = $('body').find('li.dropdown');
    console.log('li_dropdown => ', li_dropdown);

    li_dropdown.each(function (idx, li) {
      console.log('Lists => ', li);
      var ul = $(li).find('ul');
      ul.append(
        '<li class="got-questions"><a href="/Contact-Us"><i class="fas fa-phone-alt"></i> Got Questions?</a></li>'
      );
    });
  }, 10000);
});
/* Start Handle adding "Got Questions?" link to the menu */
