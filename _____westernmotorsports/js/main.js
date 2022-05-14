/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = 'tel:8446343526';
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

/* Start Start Handle slider inner content */

$(document).ready(function () {
  // check if we are in home (target page which contain the Slider)
  if ($('#page_52165')) {
    var $slider_inner_wrapper = $('#comp_1636822778310 .carousel.slide');
    console.log("slider_inner_wrapper => ", $slider_inner_wrapper);
    $slider_inner_wrapper.append(`
                          <div class="content">
                            <h1>Your Four-Season Fun Dealer</h1>
                          
                            <h3>The Largest Motor Sport Indoor Showroom in Western Newfoundland</h3>
                          
                          </div>
                          `);
  }
});

/* End Start Handle slider inner content */

// Start Bottom Form Container UP & Down
$(document).ready(function () {
  $('#up-down').on('click', function () {
    var spanClass = $(".bottom-fixed .controller span").attr('class');
    var spanNewClass
    var border
    if (spanClass === 'down') {
      spanNewClass = 'up'
      border = true;
    } else {
      spanNewClass = 'down'
      border = false;
    }
    console.log(spanClass);
    $(".bottom-fixed .content").slideToggle("slow", function () {
      $(".bottom-fixed .controller span").removeClass();
      $(".bottom-fixed .controller span").addClass(spanNewClass);
      if (border) {
        $(".bottom-fixed .controller").css('border-top', '5px solid var(--main-color)');
      } else {
        $(".bottom-fixed .controller").css('border-top', '0');
      }
    });
  });
});
// End Bottom Form Container UP & Down

// Start Bottom Form Container Hide in all Pages but Inventory
$(document).ready(function () {
  if (!$("[data-com-id='ESC Ads']").length) {
    $('.footer-content-container .bottom-fixed').hide();
    $('.footer-bottom').css({
      "padding-bottom": "1.2vw"
    })
  }

});
// End Bottom Form Container Hide in all Pages but Inventory