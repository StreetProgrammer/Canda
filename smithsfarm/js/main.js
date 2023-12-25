$(document).ready(function () {
  var el = $('#t_hour');
  var html = el.html().split("\t");
  html = `<strong>${html[0]}</strong><br>${html[1]}`;

  el.html(html)
});

$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

/* Add Fav Icon */
$(function () {
  function changeFavicon() {
    $('head').append('<link type="image/x-icon" rel="shortcut icon" href="/site-uploads/1001320/Images/new-images/favicon.ico">')
  }
  changeFavicon();
});


$(document).ready(function () {
  $('body').find('i').text('');
});

$(document).ready(function () {
  var d = new Date();
  var year = d.getFullYear();
  $('#copyrightYear').html(year);

});

// to put left and right fixed menus under header
$(document).ready(function () {
  function handleFixedMenusPos() {
    var headerHeight = $('.header-0-nav').height();
    $('#right-nav').css({ "top": headerHeight });
    $('#side-navs').css({ "top": headerHeight });
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



/* handle VDP to display  "Contact for price" if item don't have price 
*  Work with list light 2109 - Details View => normal
*/
if ($('.right-cta-buttons').length && $(".price-box").length === 0) {
  $(".right-cta-buttons").each(function () {
    var visibilityClass = $(this).attr("class").includes("hidden-xs") ? "hidden-xs" : "visible-xs";
    var el = $(this).parent().children(".price-box");
    var isExist = el.length;
    if (!isExist) {
      var toBeAdded = $('<div class="price-box container-fluid ' + visibilityClass + '">' +
        '<div class="our-price-div" style="color: rgb(0, 153, 0);">' +
        '<span class="our-price" style="color: rgb(97, 99, 101); font-size: 22px;">Price </span>' +
        '<span class="primary">Contact for price</span></div>' +
        '</div>');
      toBeAdded.insertBefore($(this));
    }
  });
}

/* handle VDP to make custom display price div content 
*  Work with list light 2109 - Details View => normal
*/
if ($('.our-price-div').length) {
  var el = $('.our-price-div')
  var pricLabelEl = el.children('.our-price');
  pricLabelEl.css({ 'color': '#616365', 'font-size': '22px' });
  var html = el.html()
  el.css('color', '#009900')
  var html = html.replace("Dealer Price", "Price");
  // var html = html.replace("CAD", "");
  // var html = html.replace("USD", "");
  el.html(html)
}

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


