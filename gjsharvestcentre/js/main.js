// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:5194249374';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = 'tel:18884249374';
  $('body').find('a.tel-2').attr('href', tel_2);
  var tel_3 = 'tel:5194561672';
  $('body').find('a.tel-3').attr('href', tel_3);
  var tel_4 = 'tel:5195323525';
  $('body').find('a.tel-4').attr('href', tel_4);
  var tel_5 = 'tel:5195321854';
  $('body').find('a.tel-5').attr('href', tel_5);
  var tel_6 = 'tel:5192007585';
  $('body').find('a.tel-6').attr('href', tel_6);

  var tel_7 = 'tel:5196038374';
  $('body').find('a.tel-7').attr('href', tel_7);
  var tel_8 = 'tel:5195323525';
  $('body').find('a.tel-8').attr('href', tel_8);
  var tel_9 = 'tel:5195321854';
  $('body').find('a.tel-9').attr('href', tel_9);
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

/* Start Make parent menu elements clickable */
$(function () {
  if (window.innerWidth > 767) {
    $('.dropdown-toggle').on('click', function () {
      var el = $(this);
      window.location.href = el.attr('href');
    });
  } else {
    $('.dropdown-toggle').on('dblclick', function () {
      var el = $(this);
      window.location.href = el.attr('href');
    });
  }
});

/* End Make parent menu elements clickable */

/* Start Brands Slider */
$(document).ready(function () {
  $('#brandSlider').multislider({
    interval: 2000,
    duration: 500,
  });
});
/* End Brands Slider */

$(document).ready(function () {
  if ($('#normal_vdp').length) {
    if ($('.our-price-div .primary').length) {
      var el = $('.our-price-div .primary');
      var html = el.html();
      html = html.replace('Call for Price', '');
      el.html(html);
    }
  }
});

function changeSRPPriceLable() {
  if ($('.light2021').length) {
    if ($('.price.no_price').length) {
      var el = $('.price.no_price');
      var html = el.html();
      var html = html.replace('Contact for price', '');
      el.html(html);
    }
  }
}

$(document).ajaxComplete(function () {
  changeSRPPriceLable();
});

$(document).ready(function () {
  changeSRPPriceLable();
});
