/* Header */

var dHelperObj = {
  "d-Snarler-AT5": "pulldown-nav-snarler-at5-wrapper",
  "d-Snarler-AT6": "pulldown-nav-snarler-at6-wrapper",
  "d-villain": "pulldown-nav-villain-wrapper",
  "d-svillain": "pulldown-nav-super-villain-wrapper",
  "d-ut10-crew": "pulldown-nav-ut10crew-wrapper",
  "d-ut10": "pulldown-nav-ut10-wrapper",
};

var mHelperObj = {
  "m-Snarler-AT5": "pulldown-nav-snarler-at5-wrapper",
  "m-Snarler-AT6": "pulldown-nav-snarler-at6-wrapper",
  "m-villain": "pulldown-nav-villain-wrapper",
  "m-svillain": "pulldown-nav-super-villain-wrapper",
  "m-ut10-crew": "pulldown-nav-ut10crew-wrapper",
  "m-ut10": "pulldown-nav-ut10-wrapper",
};

/* open - close mobile menu */
$("#showMenu").on("click", function () {
  var clickedEl = $(this);
  var icon = $(this).find("i");
  var target = $(".mobile-nav");

  if (target.hasClass("opend")) {
    target.removeClass("opend");
    icon.removeClass("fa-close");
    icon.addClass("fa-bars");
    for (const [key, value] of Object.entries(mHelperObj)) {
      $("." + value).removeClass("opend");
    }
  } else {
    target.addClass("opend");
    icon.removeClass("fa-bars");
    icon.addClass("fa-close");
  }
});

/* open - close header models */
$(".nav-wrapper .model").on("click", function () {
  var justCloseIt = false;
  var clickedEl = $(this);
  var obj = $(this).attr("id")[0] === "m" ? mHelperObj : dHelperObj;
  var target = $("." + obj[$(this).attr("id")]);

  function myFunction() {
    return new Promise((resolve) => {
      for (const [key, value] of Object.entries(obj)) {
        if (key === clickedEl.attr("id") && target.hasClass("opend")) {
          justCloseIt = true;
        } else {
          $("." + value).removeClass("opend");
        }
      }
      resolve();
    });
  }
  myFunction().then(() => {
    if (justCloseIt) {
      target.removeClass("opend");
    } else {
      target.addClass("opend");
    }
  });
});

/**/
$(".three-button").click(function () {
  window.location = $(this).find("a:first").attr("href");
  return false;
});

/**/

$(window).load(function () {
  $("#promotions .flexslider").flexslider({
    animation: "fade",
  });
});

$(document).ready(function () {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const element = document.querySelector("div.hamburger");
      element.style.display = "block";
    },
    false
  );
});
