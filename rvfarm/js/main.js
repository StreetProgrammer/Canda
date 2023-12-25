// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:905-605-7056';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = 'Tel:+1-519-755-9383';
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
    var target = $(this).attr('target') || undefined;
    if (!e.target.matches('a')) {
      console.log('target => ', target);
      var href = $(this).data('href');
      if (target === 'blank') {
        window.open(href, target);
      } else {
        window.location = href;
      }
    }
  });
});
/* End Handle Fake anchors */

// Website Scripts

$(document).ready(function () {
  if ($('#normal_vdp').length) {
    if ($('.our-price-div').length) {
      var el = $('.our-price-div');
      var html = el.html();
      var html = html.replace('Dealer Price ', 'Price: ');
      var html = html.replace('CAD', '');
      el.html(html);
    }

    if (
      $('.ecomm-btn.add-to-cart-product.deposit-to-cart.add-to-cart-btn').length
    ) {
      var el = $(
        '.ecomm-btn.add-to-cart-product.deposit-to-cart.add-to-cart-btn'
      );
      var html = el.html();
      var html = html.replace(
        'Hold With Deposit',
        '<i class="fas fa-shopping-cart aria-hidden=" true"="" aria-hidden="true"></i> Reserve'
      );
      el.html(html);
    }

    if ($('.deposit-info-btn').length) {
      var el = $('.deposit-info-btn');
      var html = el.html();
      var html = html.replace('What is Hold With Deposit?', 'What is Reserve?');
      el.html(html);
    }
  }
});

function changeSRPLable() {
  if ($('.light2021').length) {
    if (
      $('.add-to-cart-product.deposit-to-cart.add-to-cart-btn.show-item').length
    ) {
      var el = $(
        '.add-to-cart-product.deposit-to-cart.add-to-cart-btn.show-item'
      );
      var html = el.html();
      var html = html.replace('Deposit', 'Reserve');
      var html = html.replace('fa-dollar-sign"', 'fa-shopping-cart');
      el.html(html);
    }
  }
}

$(document).ajaxComplete(function () {
  changeSRPLable();
});

$(document).ready(function () {
  changeSRPLable();
});

/* Handle - I want this */
function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf('?') + 1)
    .split('&');
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

$(document).ready(function () {
  var q = getUrlVars()['w-info'] || getUrlVars()['s-info'];
  q = q.replaceAll('_', ' ');
  q = q.replaceAll('%28', '(');
  q = q.replaceAll('%29', ')');
  q = q.replaceAll('%', '/');

  if ($("[idd='Warranty']").length && q.length > 0) {
    $("[idd='Warranty']").attr('value', q);
    $("[idd='Warranty']").attr('disabled', true);
    $("[idd='Warranty']").addClass('disabled');
  } else if ($("[idd='Service']").length && q.length > 0) {
    $("[idd='Service']").attr('value', q);
    $("[idd='Service']").attr('disabled', true);
    $("[idd='Service']").addClass('disabled');
  }
});

/* change VDP Financing Link */
var theLanguage = $('html').attr('lang');
// Diferent language
if (theLanguage == 'fr') {
  $('.finacning-link').attr('href', '/fr/Financing');

  $('.finacning-link').attr('target', '_self');
} else {
  $('.finacning-link').attr('href', '/Financing');

  $('.finacning-link').attr('target', '_self');
}
