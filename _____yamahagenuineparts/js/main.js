/* Menu */
$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });
});

/* Active State Menu */
$(document).ready(function () {
  var url = window.location.pathname;
  $('ul.nav a[href="' + url + '"]')
    .parent()
    .addClass("active");
  $("ul.nav a")
    .filter(function () {
      return this.href == url;
    })
    .parent()
    .addClass("active");
});

/* Sticky Menu on Scroll */
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 48) {
      $("#html_1705994171125").addClass("sticky-nav");
    } else {
      $("#html_1705994171125").removeClass("sticky-nav");
    }
  });
});

/* Slide to top */
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

/* Stop the pause on mouse hover - carousel */
$(".carousel").carousel({
  pause: "false",
});

/* 404 page */

$(function () {
  if ($("img[alt='Error:404 Page Not Found']").length) {
    console.log("404");
    var content = `<div class="_404-container">
                          <div>
                              <p>404 PAGE NOT FOUND. CHECKOUT OUR INVENTORY OR <a href="/Contact-Us/">CONTACT US</a></p>
  
                              <div class="btn-link">
                                  <a href="/Yamaha-Parts/">Yamaha Parts</a>
                                  <a href="/Yamaha-Accessories/">Yamaha Accessories</a>
                              </div>
                          </div>
                      </div>`;

    $("#CenterDiv").html(content);
  }
});

/* this website */

// Update Menu
$(document).ready(function () {
  var oldHtml = $(".navbar-toggle").html();
  $(".navbar-toggle").html("<span class='wrapper'>" + oldHtml + "</span>");
});

$(document).mouseup(function (e) {
  var container = $(".navbar-collapse.collapse");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.removeClass("in");
  }
});

/* hamdle panel */
$(document).ready(function () {
  $(".clickToOpenAndHideME").on("click", function (e) {
    $(this).parent().removeClass("visible-xs");
    $(this).parent().addClass("hidden");
  });

  $(".clickToOpenAndHideOther").on("click", function (e) {
    var targetClass = $(this).attr("aria-controls").replace("-accord", "");
    console.log({ targetClass });

    $(".clickToOpenAndHideME." + targetClass)
      .parent()
      .addClass("visible-xs");
    $(".clickToOpenAndHideME." + targetClass)
      .parent()
      .removeClass("hidden");
  });
});

/* Start Handle Fake anchors */
$(function () {
  $("[data-href]").on("click", function (e) {
    var target = $(this).attr("target") || undefined;
    if (!e.target.matches("a")) {
      console.log("target => ", target);
      var href = $(this).data("href");
      if (target === "blank") {
        window.open(href, target);
      } else {
        window.location = href;
      }
    }
  });
});
/* End Handle Fake anchors */
