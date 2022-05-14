

/* Add Fav Icon */
$(function () {
  function changeFavicon() {
    $('head').append('<link type="image/x-icon" rel="shortcut icon" href="/site-uploads/1001334/Files/favicon.ico">')
  }
  changeFavicon();
});

$(document).ready(function () {
  $('body').find('i').text('');
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:+19023453161';
  $('body').find('a.tel-1').attr('href', tel_1);

  var tel_2 = 'tel:+19023450594';
  $('body').find('a.tel-2').attr('href', tel_2);
});

// to put left and right fixed menus under header
$(document).ready(function () {
  function handleFixedMenusPos() {
    var headerHeight = $('.header-1-nav').height();
    $('#sideTabs').css({ "top": headerHeight });

  }
  handleFixedMenusPos()
  $(window).on("scroll", function () {
    handleFixedMenusPos()
  });
  $(window).on('resize', function () {
    handleFixedMenusPos()
  });
});


/* Start handle SRP buttons */
if ($('.cta-btns').length) {
  var quote = $('.main-btn.quote.lightboxs');
  var quoteHtml = quote.html();
  quoteHtml = quoteHtml.replace("Get a quote", "Quote");
  quote.html(quoteHtml);
}
/* End handle SRP buttons */



/* handle VDP to Change Get Financed btn attrs(href - target) 
*  Work with list light 2109 - Details View => normal
*/
$(document).ready(function () {
  $(".get-financed").each(function () {
    var visibilityClass = $(this).attr("class").includes("hidden-xs") ? "hidden-xs" : "visible-xs";
    $(this).removeAttr('target');
    $(this).attr('href', '/Financing/');
  });
});


$(document).ready(function () {
  if ($('#showroom_vdp #details-tabs').length) {
    $(window).on("scroll", function () {
      if ($('#showroom_vdp #details-tabs').hasClass('affix')) {
        var mtop = $('.header-1-nav .bottom').height()
        $('#showroom_vdp #details-tabs').css({ "background-color": "#ddd", "margin-top": mtop, "padding": '0 !important' });
      } else {
        $('#showroom_vdp #details-tabs').removeAttr('style')
      }
    })
  }
});

