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
      $("#comp_1698686468141").addClass("sticky-nav");
    } else {
      $("#comp_1698686468141").removeClass("sticky-nav");
    }
  });
});

/* Change Slider transition from slide to fade */
$(function () {
  $(".carousel").removeClass("slide");
  $(".carousel").addClass("carousel-fade");
});

/*Delete slider component in mobile*/
$(function () {
  if ($(window).width() < 769) {
    $("#comp_1694191695996").remove();
    $(".slide").remove();
    $(".hidden-xs").remove();
  }
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

/* Change Get Financed to open page */
var theLanguage = $("html").attr("lang");
// Diferent language
if (theLanguage == "fr") {
  $(".finacning-link").attr("href", "/fr/Finance-Request");

  $(".finacning-link").attr("target", "_self");
} else {
  $(".finacning-link").attr("href", "/Finance-Request");

  $(".finacning-link").attr("target", "_self");
}

/* Change Value a Trade to open page */
$(".rt-action-btn.trade-btn").removeAttr("onclick");
var theLanguage = $("html").attr("lang");
// Diferent language
if (theLanguage == "fr") {
  $(".rt-action-btn.trade-btn").attr("href", "/fr/Value-Your-Trade");

  $(".rt-action-btn.trade-btn").attr("target", "_self");
} else {
  $(".rt-action-btn.trade-btn").attr("href", "/Value-Your-Trade");

  $(".rt-action-btn.trade-btn").attr("target", "_self");
}

/*Add Newsletter checkbox to all forms */
if ($(".formsParent").size() > 0 && $(".Newsletter-signup").size() == 0) {
  $(".formsParent .SendCopyCheck").before(
    '<div class="Newsletter-signup"><input type="checkbox" name="Newsletter" id="Newsletter-btn" value="1" title="Newsletter Sign up"><label>I agree to receive periodical offers, newsletter, safety and recall updates from the dealership. Consent can be withdrawn at any time.</label></div><div class="privacy-check"><input type="checkbox" name="Privacy" id="Privacy-btn" value="1" title="Privacy"><label>By submitting this information, you are accepting that it may be collected, used and disclosed as described in our <a href="/Privacy">privacy policy.</a></label></div>'
  );
}

/* Mobile filters fix */
$(document).ready(function () {
  $(".filter-xs-btn").click(function () {
    $("#filters").addClass("open");
  });
});

$(document).ready(function () {
  $(".filter-xs-btn").click(function () {
    $("#filters").addClass("open");
  });
});

/* update VDP  Value a Trade Link*/
$(function () {
  if ($("#normal_vdp").length) {
    var targets = ["model", "year", "manufacturer"];
    var newHref = "?";

    jQuery.each(targets, function (index, item) {
      var txt = $(".specs-row." + item + " .descColumnResponsive")
        .text()
        .trim();
      if (item === "manufacturer") {
        newHref += "make=" + txt;
      } else {
        newHref += item + "=" + txt + "&";
      }
    });
    var lgTradeBtn = $(".CTA-box .trade-btn");
    var smTradeBtn = $(".right-cta-buttons .trade-btn");

    lgTradeBtn.attr("href", lgTradeBtn.attr("href") + newHref);
    smTradeBtn.attr("href", smTradeBtn.attr("href") + newHref);
  }
});
