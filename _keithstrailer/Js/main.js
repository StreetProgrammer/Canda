/* Menu */
$(document).ready(function () {
  $('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active');
  });
});

/* Active State Menu */
$(document).ready(function () {
  var url = window.location.pathname;
  $('ul.nav a[href="' + url + '"]')
    .parent()
    .addClass('active');
  $('ul.nav a')
    .filter(function () {
      return this.href == url;
    })
    .parent()
    .addClass('active');
});

/* Sticky Menu on Scroll */
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 48) {
      $('#comp_1697057927071').addClass('sticky-nav');
    } else {
      $('#comp_1697057927071').removeClass('sticky-nav');
    }
  });
});

/* Slide to top */
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

// var theLanguage = $('html').attr('lang');
// // Diferent language
// if (theLanguage == 'fr') {
//   $('.finacning-link').attr('href', '/fr/Get-Financed');

//   $('.finacning-link').attr('target', '_self');
// } else {
//   $('.finacning-link').attr('href', '/Get-Financed');

//   $('.finacning-link').attr('target', '_self');
// }

// /* Slider Content */
// $(document).ready(function () {
//   var content =
//     '\
//   <div id="inner_content">\
//       <a href="/New-Inventory">\
//           <span>New Inventory</span>\
//           <span>Shop Here &nbsp; <i class="far fa-long-arrow-right">&nbsp;</i></span>\
//       </a>\
//       <a href="/Pre-Owned">\
//           <span>Pre-Owned</span>\
//           <span>Shop Here &nbsp; <i class="far fa-long-arrow-right">&nbsp;</i></span>\
//       </a>\
//       <a href="/Shop">\
//           <span>Shop Online</span>\
//           <span>Shop Here &nbsp; <i class="far fa-long-arrow-right">&nbsp;</i></span>\
//       </a>\
//   </div>\
//   ';

//   var target = $('#comp_1695457074806');
//   target.append(content);
// });

// /* Change SRP */
// function changeSRPLable() {
//   if ($('.light2021').length) {
//     if (
//       $('.add-to-cart-product.deposit-to-cart.add-to-cart-btn.show-item').length
//     ) {
//       var el = $(
//         '.add-to-cart-product.deposit-to-cart.add-to-cart-btn.show-item'
//       );
//       var html = el.html();
//       var html = html.replace('Deposit', 'Hold with Deposit');
//       var html = html.replace('fa-dollar-sign"', 'fa-shopping-cart');
//       el.html(html);
//     }
//   }
// }

// $(document).ajaxComplete(function () {
//   changeSRPLable();
// });

// $(document).ready(function () {
//   changeSRPLable();
// });
