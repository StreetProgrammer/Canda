/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:7055262248';
  $('body').find('a.tel-1').attr('href', tel_1);

  var tel_2 = '';
  $('body').find('a.tel-2').removeAttr('href');
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
});

// make main meun dropdown clickable
$(function () {
  $('#comp_1631289418653 .nav.navbar-nav').children('li').each(function (i, el) {
    if ($(el).hasClass('dropdown')) {
      $(el).find('.dropdown-toggle').on('click', function (e) {
        console.log("window.innerWidth => ", window.innerWidth);
        var url = $(el).find('.dropdown-toggle').attr('href');
        if (window.innerWidth > 767) {
          window.location.href = url;
        }
      });
    }
  });
})

// remove spaces from i tags
$(document).ready(function () {
  $('body').find('i').text('');
});

// remove spaces from i tags
$(document).ready(function () {
  if ($('#details-tabs').length) {
    let target = $('#details-tabs')[0];
    // observer.observe(target);
  }
});


$(document).ready(function () {
  if ($('.available .avl').length) {
    var available = $('.available .avl');
    available.text('In Stock');
  }

  if (pageName == "items/itemid") {
    /*Redirect the product options to inner page to fix the options drop donw issue*/
    $('.main-option, .second-option').attr("onchange", "window.location = ('/shop-online'+this.options[this.selectedIndex].value)")
  }
});