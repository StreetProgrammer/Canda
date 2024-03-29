// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:8778780233';
  $('body').find('a.tel-1').attr('href', tel_1);
  var tel_2 = '';
  $('body').find('a.tel-2').removeAttr('href');
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

// Handle header logo
var oldContent = $('.nav.navbar-nav').find('>li:nth-child(1) a').html();
$(document).ready(function () {
  $('.nav.navbar-nav')
    .find('>li:nth-child(1) a')
    .html(
      '<img src="/site-uploads/1001435/images/rvlink-logo.png" style="margin: 1px;max-width: 80%;">'
    );

  function Change_site_menu_content() {
    if (window.innerWidth > 767) {
      $('.nav.navbar-nav')
        .find('>li:nth-child(1) a')
        .html(
          '<img src="/site-uploads/1001435/images/rvlink-logo.png" class="nav-desktop-logo" style="margin: 1px;max-width: 95%;">'
        );
    } else {
      $('.nav.navbar-nav').find('>li:nth-child(1) a').html(oldContent);
      $('.nav.navbar-nav')
        .find('>li:nth-child(1) a')
        .css({ 'font-size': '16px' });
    }
  }
  $(function () {
    Change_site_menu_content();
  });

  $(window).on('resize', function () {
    Change_site_menu_content();
  });
  /* End Change site menu content for mobile */
});

// make parent main nav links clickable
$(document).ready(function () {
  $('.nav.navbar-nav')
    .find('>li a')
    .on('click', function (e) {
      e.preventDefault();
      window.location.href = $(this).attr('href');
    });

  /* End Change site menu content for mobile */
});

$('.letters-list a').click(function (e) {
  e.preventDefault();
  var divId = $(this).attr('href');
  console.log($(this).attr('href'));
  $('html, body').animate(
    {
      scrollTop: $(divId).offset().top - 40, //#DIV_ID is an example. Use the id of your destination on the page
    },
    'slow'
  );
});

// remove "this" from Normal VDP share btn

$(document).ready(function () {
  if ($('#normal_vdp').length) {
    var shareContainer1 = $('.CTA-box .dropdown');
    var oldshareContainer1Content = shareContainer1.html();
    var newshareContainer1Content = oldshareContainer1Content.replace(
      'Share this',
      'Share'
    );
    shareContainer1.html(newshareContainer1Content);

    var shareContainer2 = $('.right-cta-buttons .dropdown');
    var oldshareContainer2Content = shareContainer2.html();
    var newshareContainer2Content = oldshareContainer2Content.replace(
      'Share this',
      'Share'
    );
    shareContainer2.html(newshareContainer2Content);
  }
});

// append custom content to ADS Page [SRP & VDP]
$(document).ready(function () {
  if ($('#normal_vdp').length) {
    $('.model-title').detach().prependTo('.model-details-content');
    console.log('we are in VDP Page');
  }
});
