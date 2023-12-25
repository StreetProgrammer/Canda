// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:403-346-5238';
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
  $('.nav.navbar-nav')
    .find('>li:nth-child(1) a')
    .html(
      '<img src="/site-uploads/1001398/Images/TURPLE_BROS_LOGO_2021_STREET_2000.png" style="margin: 1px;max-width: 80%;">'
    );

  function Change_site_menu_content() {
    if (window.innerWidth > 767) {
      $('.nav.navbar-nav')
        .find('>li:nth-child(1) a')
        .html(
          '<img src="/site-uploads/1001398/Images/TURPLE_BROS_LOGO_2021_STREET_2000.png" class="nav-desktop-logo" style="margin: 1px;max-width: 95%;">'
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
  if ($('[ppanel="ESC Ads"]').length) {
    console.log('we are in ADS Page');
    var centerDiv = $('#CenterDiv');
    var txt =
      'All prices do NOT include freight, PDI, Tire Recycle, manufacture surcharges, or GST. We do try our best to keep prices accurate, but mistakes do happen, if there is a discrepancy between in-store and online prices, in-store prices will be used. While we do our best to maintain stocking levels on the website, errors due occur. If there are any discrepancies, you will contacted as soon as possible.';
    centerDiv.append(
      '<div class="container container-90"> <p class="col-sm-10 col-sm-offset-1">' +
        txt +
        '</p></div>'
    );
  }
});
