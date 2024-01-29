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
      $("#comp_1703261608355").addClass("sticky-nav");
    } else {
      $("#comp_1703261608355").removeClass("sticky-nav");
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
                                  <a href="/Barrie">Barrie</a>
                                  <a href="/Oakville">Oakville</a>
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
