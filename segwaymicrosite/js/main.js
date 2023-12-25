/*handle phone numbers anchor href attr*/
$(document).ready(function () {
  var tel_1 = "tel:7054340738";
  $("body").find("a.tel-1").attr("href", tel_1);

  // var tel_2 = '';
  // $('body').find('a.tel-2').removeAttr('href');
});

/* slide to top */
$(document).ready(function () {
  $("a[href='#top']").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });
});

// make main meun first li hovable to display Mega-Menu clickable
$(function () {
  var target_toggler = $("#comp_1639067811143 .nav.navbar-nav").children(
    "li:first-child"
  );
  var close_mega_menu = $(".mega-menu .close-mega-menu");
  var target_toggler_a = target_toggler.children("a");
  target_toggler_a.html(
    '\
                <img src="/site-uploads/1001362/images/home/menu-bars.svg" alt="">\
                <span>The Lineup</span>\
  '
  );

  var menu_content = $(".mega-menu");
  target_toggler.on({
    mouseenter: function (e) {
      if ($(window).width() < 767) {
        return;
      }
      console.log("enter => ", target_toggler_a);
      var top =
        $("#comp_1639067811143").offset().top +
        $("#comp_1639067811143").outerHeight(true) -
        $(window).scrollTop();
      // top = $(window).height() - $('#comp_1639067811143').offset().top - $('#comp_1639067811143').height();
      menu_content.css({
        display: "block",
        top,
      });
    },
    mouseleave: function (e) {
      if ($(window).width() < 767) {
        return;
      }
      console.log("bye! => ", target_toggler_a);
      setTimeout(() => {
        var is_mouse_on_menu = menu_content.is(":hover");
        if (!is_mouse_on_menu) {
          menu_content.removeAttr("style");
        }
      }, 300);
    },
    click: function (e) {
      e.preventDefault();
      if ($(window).width() > 767) {
        return;
      }
      menu_content.css({
        display: "block",
        top: 0,
      });
    },
  });

  menu_content.on({
    // mouseenter: function (e) {
    //   console.log('enter => ', target_toggler_a);
    //   var top = $('#comp_1639067811143').offset().top + $('#comp_1639067811143').outerHeight(true);

    //   menu_content.css({
    //     display: 'block',
    //     top
    //   })
    // },
    mouseleave: function (e) {
      setTimeout(() => {
        menu_content.removeAttr("style");
      }, 300);
    },
  });

  close_mega_menu.on("click", function (e) {
    setTimeout(() => {
      menu_content.removeAttr("style");
    }, 500);
  });
});

// remove spaces from i tags
$(document).ready(function () {
  $("body").find("i").text("");
});

/* Start Start Handle slider inner content */

$(document).ready(function () {
  // check if we are in home (target page which contain the Slider)
  // if ($('#page_52165')) {
  //   var $slider_inner_wrapper = $('#comp_1636822778310 .carousel.slide');
  //   console.log("slider_inner_wrapper => ", $slider_inner_wrapper);
  //   $slider_inner_wrapper.append(`
  //                         <div class="content">
  //                           <h1>Your Four-Season Fun Dealer</h1>
  //                           <h3>The Largest Motor Sport Indoor Showroom in Western Newfoundland</h3>
  //                         </div>
  //                         `);
  // }
});

/* End Start Handle slider inner content */

// Start Bottom Form Container UP & Down
$(document).ready(function () {
  // $('#up-down').on('click', function () {
  //   var spanClass = $(".bottom-fixed .controller span").attr('class');
  //   var spanNewClass
  //   var border
  //   if (spanClass === 'down') {
  //     spanNewClass = 'up'
  //     border = true;
  //   } else {
  //     spanNewClass = 'down'
  //     border = false;
  //   }
  //   console.log(spanClass);
  //   $(".bottom-fixed .content").slideToggle("slow", function () {
  //     $(".bottom-fixed .controller span").removeClass();
  //     $(".bottom-fixed .controller span").addClass(spanNewClass);
  //     if (border) {
  //       $(".bottom-fixed .controller").css('border-top', '5px solid var(--main-color)');
  //     } else {
  //       $(".bottom-fixed .controller").css('border-top', '0');
  //     }
  //   });
  // });
});
// End Bottom Form Container UP & Down

// Start Bottom Form Container Hide in all Pages but Inventory
$(document).ready(function () {
  // if (!$("[data-com-id='ESC Ads']").length) {
  //   $('.footer-content-container .bottom-fixed').hide();
  //   $('.footer-bottom').css({
  //     "padding-bottom": "1.2vw"
  //   })
  // }
});
// End Bottom Form Container Hide in all Pages but Inventory
/* Start Change Breadcrumbs Backgrounds Random */
$(document).ready(function () {
  var ba_arr = [
    "breadcrumb-bg.jpg",
    "breadcrumb-bg-2.jpg",
    "breadcrumb-bg-3.jpg",
  ];
  $("nav.breadcrumbParent").css({
    "background-image":
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/site-uploads/1001362/images/' +
      ba_arr[Math.floor(Math.random() * 3)] +
      '")',
  });
});
/* End Change Breadcrumbs Backgrounds Random */

/* Abdallah adding promotions in VDP */
$(function () {
  if ($(".CTA-box")) {
    $(".CTA-box").after(
      '<div class="promotions-box"><h2>Promotions</h2><div class="promotion-bg"><div class="promotion-overlay">Available Promotions <a href="/Promotions" class="main-anchor"><span>Explore More</span><img class="svg-arrows" loading="lazy" alt="Arrows" src="/site-uploads/1001362/images/arrows.svg"></a></div></div></div>'
    );
  }
});

/* Start Handle Fake anchors */
$(function () {
  $("[data-href]").on("click", function (e) {
    if (!e.target.matches("a")) {
      var href = $(this).data("href");
      window.location = href;
    }
  });
});
/* End Handle Fake anchors */

/* Start Change site menu content for mobile */
$(function () {
  $("button.navbar-toggle").html(
    '<img src="/site-uploads/1001362/images/home/menu-bars.svg" alt="" style="height: 100%;">'
  );
});
/* End Change site menu content for mobile */

/**/
$(function () {
  $(window).on("scroll", function () {
    // console.log($(window).scrollTop(), $(".home-main-sec .item").offset().top);
    // if (
    //   $(window).scrollTop() > $(".home-main-sec .item").offset().top &&
    //   $(window).scrollTop() < $(".home-main-sec .item").next().offset().top
    // ) {
    //   console.log("YES");
    // } else {
    //   console.log("NO");
    // }
    //
    // var hT = $(".home-main-sec .item").offset().top,
    //   hH = $(".home-main-sec .item").outerHeight(),
    //   wH = $(window).height(),
    //   wS = $(this).scrollTop();
    // if (wS > hT + hH - wH) {
    //   console.log("H1 on the view!");
    // }
    //
  });

  window.onscroll = function () {
    var parent = document.querySelector(".home-main-sec");
    if (parent) {
      var section = parent.querySelectorAll(".item");

      var bScroll = $(window).scrollTop();
      for (var i = 0; i < section.length; i++) {
        var sHeight = section[i].offsetHeight;
        var offsets = section[i].offsetTop;
        console.log(i, bScroll, sHeight, offsets);
        if (bScroll > offsets) {
          console.log("YES");
          section[i].className = "item active";
        } else {
          console.log("No");

          section[i].className = "item";
        }
      }
    }
  };
});
/**/
