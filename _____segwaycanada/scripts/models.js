$("#wrapper").each(function () {
  $(this).find(".model-info").first().addClass("active");
  $(this).find(".lineup-list").first().addClass("ll-active");
  $(this).find(".model-color").first().addClass("mc-active");
  $(this).find(".model-720").first().addClass("active");
  $(this).find(".modelImg").first().addClass("active");
});

$(".model-lineup-list p").on("mouseenter", function () {
  $(".model-lineup-list p").removeClass("ll-active");
  $(this).addClass("ll-active");
});

$(".model-lineup-list p").on("click", function (e) {
  e.preventDefault();
  $(".model-lineup-list p ll-active").removeClass("ll-active");
  $(this).addClass("ll-active");

  $(".model-left > .active").removeClass("active");
  $(".model-color-wrapper > .mc-active").removeClass("mc-active");
  $(".model-wrapper > .active").removeClass("active");
  $(".model-wrapper .model-info").eq($(this).index()).addClass("active");
  $(".model-wrapper .model-info")
    .eq($(this).index())
    .find(".modelImg")
    .first()
    .addClass("active");
});

$(".whitered").on({
  mouseenter: function () {
    $(this).find(".color-text").addClass("active");
  },
  mouseleave: function () {
    $(this).find(".color-text").removeClass("active");
  },
  click: function () {
    $(".model-color-wrapper > .mc-active").removeClass("mc-active");
    $(".model-left > .active").removeClass("active");
    $(this).addClass("mc-active");
    $(".model-whitered").addClass("active");
    $(".vr-red").addClass("active");
    $(".vr-green").removeClass("active");
  },
});
$(".grayblack").on({
  mouseenter: function () {
    $(this).find(".color-text").addClass("active");
  },
  mouseleave: function () {
    $(this).find(".color-text").removeClass("active");
  },
  click: function () {
    $(".model-color-wrapper > .mc-active").removeClass("mc-active");
    $(".model-left > .active").removeClass("active");
    $(this).addClass("mc-active");
    $(".model-grayblack").addClass("active");
    $(".vr-green").removeClass("active");
  },
});
$(".blackgreen").on({
  mouseenter: function () {
    $(this).find(".color-text").addClass("active");
  },
  mouseleave: function () {
    $(this).find(".color-text").removeClass("active");
  },
  click: function () {
    $(".model-color-wrapper > .mc-active").removeClass("mc-active");
    $(".model-left > .active").removeClass("active");
    $(this).addClass("mc-active");
    $(".model-blackgreen").addClass("active");
    $(".vr-red").addClass("active");
    $(".vr-green").removeClass("active");
  },
});
$(".blackblack").on({
  mouseenter: function () {
    $(this).find(".color-text").addClass("active");
  },
  mouseleave: function () {
    $(this).find(".color-text").removeClass("active");
  },
  click: function () {
    $(".model-color-wrapper > .mc-active").removeClass("mc-active");
    $(".model-left > .active").removeClass("active");
    $(this).addClass("mc-active");
    $(".model-blackblack").addClass("active");
    $(".vr-green").removeClass("active");
  },
});

$(".model-info .active").mousemove(function (e) {
  var screen_width = window.innerWidth;
  var amountMovedX = (e.pageX * 1) / 100;
  $(".model-left img").css("left", amountMovedX + "%");
});

/*-----------------------------------*/

$(".section-img:first").addClass("active");
$(".light-switch").css("opacity", "1");
$("#section1").hover(function () {
  $("#section1-img").addClass("active");
  $("#section2-img, #section3-img, #section4-img").removeClass("active");
  if (light.hasClass("ball-right")) {
    light.removeClass("ball-right");
  }
  if ($("#light-switch-on").hasClass("op0")) {
    $("#light-switch-on").removeClass("op0");
  }
  if ($("#section1-img-lights-on").hasClass("active")) {
    $("#section1-img-lights-on").removeClass("active");
  }
  $(".light-switch").css("opacity", "1");
});
$("#section2").hover(function () {
  $("#section2-img").addClass("active");
  $("#section1-img, #section3-img, #section4-img").removeClass("active");
  $(".light-switch").css("opacity", "0");
});
$("#section3").hover(function () {
  $("#section3-img").addClass("active");
  $("#section1-img, #section2-img, #section4-img").removeClass("active");
  $(".light-switch").css("opacity", "0");
});
$("#section4").hover(function () {
  $("#section4-img").addClass("active");
  $("#section1-img, #section2-img, #section3-img").removeClass("active");
  $(".light-switch").css("opacity", "0");
});

var light = $("#light-switch-ball");

light.click(function () {
  light.toggleClass("ball-right");
  $("#light-switch-on").toggleClass("op0");
  $("#section1-img-lights-on").toggleClass("active");
});

/*--------------------------------------------*/
$(document).ready(function () {
  $(".right-phone-button").click(function () {
    window.location = $(this).find("a:first").attr("href");
    return false;
  });
});
$(document).ready(function () {
  var set1 = $(
    "#phone-gif1, #gif-text1, #phone-gif3, #gif-text3, #phone-gif4, #gif-text4, #phone-gif5, #gif-text5"
  );
  var set2 = $(
    "#phone-gif1, #gif-text1, #phone-gif2, #gif-text2, #phone-gif4, #gif-text4, #phone-gif5, #gif-text5"
  );
  var set3 = $(
    "#phone-gif1, #gif-text1, #phone-gif2, #gif-text2, #phone-gif3, #gif-text3, #phone-gif5, #gif-text5"
  );
  var set4 = $(
    "#phone-gif1, #gif-text1, #phone-gif2, #gif-text2, #phone-gif3, #gif-text3, #phone-gif4, #gif-text4"
  );

  $(".left-phone-gif:first, .right-phone-text:first, .app-qr:first").addClass(
    "active"
  );
  $("#gif-list2").click(function () {
    $("#phone-gif2, #gif-text2").addClass("active");
    set1.removeClass("active");
  });
  $("#gif-list3").click(function () {
    $("#phone-gif3, #gif-text3").addClass("active");
    set2.removeClass("active");
  });
  $("#gif-list4").click(function () {
    $("#phone-gif4, #gif-text4").addClass("active");
    set3.removeClass("active");
  });
  $("#gif-list5").click(function () {
    $("#phone-gif5, #gif-text5").addClass("active");
    set4.removeClass("active");
  });

  var ios = $("#ios-qr, #ios-qr-button, #iosqrb-a");
  var android = $("#android-qr, #android-qr-button, #aqrb-a");
  $("#ios-qr-button").hover(function () {
    ios.addClass("active");
    android.removeClass("active");
  });
  $("#android-qr-button").hover(function () {
    android.addClass("active");
    ios.removeClass("active");
  });
});

/*--------------------------------------------------*/
$(document).ready(function () {
  $(".pure-panel:first").addClass("active");
  $("#pure-panel1").hover(function () {
    $("#pure-panel1").addClass("active");
    $("#pure-panel2, #pure-panel3, #pure-panel4").removeClass("active");
  });
  $("#pure-panel2").hover(function () {
    $("#pure-panel2").addClass("active");
    $("#pure-panel1, #pure-panel3, #pure-panel4").removeClass("active");
  });
  $("#pure-panel3").hover(function () {
    $("#pure-panel3").addClass("active");
    $("#pure-panel1, #pure-panel2, #pure-panel4").removeClass("active");
  });
  $("#pure-panel4").hover(function () {
    $("#pure-panel4").addClass("active");
    $("#pure-panel1, #pure-panel2, #pure-panel3").removeClass("active");
  });
});
