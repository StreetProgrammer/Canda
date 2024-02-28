$.fn.addBack = function (selector) {
  return this.add(
    selector == null ? this.prevObject : this.prevObject.filter(selector)
  );
};
$(document).ready(function () {
  var intTimeOut = 5000;

  $("#html_1709055912038 .owl-carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    mouseDrag: false,
    nav: true,
    navElement: "div",
    navClass: ["owl-prev", "owl-next"],
    navText: ["prev", "next"],
    dotsContainer: ".dots",
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    onInitialized: function (event) {
      $("#circle1").circleChart({
        color: "#505050",
        background: false,
        speed: intTimeOut,
        widthRatio: 0.03,
        value: 100,
        size: 60,
        startAngle: 75,
        animation: "linearTween",
      });
    },
    onTranslate: function (event) {
      var page = event.page.index;
      triggerChart(page);
    },
  });

  function triggerChart(index) {
    $(".dots .dot").eq(index).find(".circleChart").circleChart({
      speed: 0,
      value: 1,
      size: 60,
      startAngle: 75,
    });
    $(".dots .dot").eq(index).find(".circleChart").circleChart({
      color: "#505050",
      background: false,
      speed: intTimeOut,
      widthRatio: 0.03,
      value: 100,
      size: 60,
      startAngle: 75,
      animation: "linearTween",
    });
  }

  $(".about_us02 .infor .prev").on("click", function () {
    owl.trigger("prev.owl");
  });
  $(".about_us02 .infor .next").on("click", function () {
    owl.trigger("next.owl");
  });

  $("#flexslider").flexslider({
    animation: "slide",
    direction: "horizontal",
    reverse: false,
    smoothHeight: false,
    slideshowSpeed: 13000,
    animationSpeed: 500,
    directionNav: true,
  });

  $(document).ready(function () {
    fixFlexsliderHeight();
  });
  $(window).load(function () {
    fixFlexsliderHeight();
  });
  $(window).resize(function () {
    fixFlexsliderHeight();
  });
});

/*-------------------------*/
videobox = function (e, o) {
  e.preventDefault();

  var contentText =
    '<video id="myVideo" width="320" height="240" controls="true" autoplay="autoplay" loop="loop"><source src="#MediaId#" type="video/mp4" /> </video>';
  var mediaId = o.attr("href");
  var title = o.attr("title");
  var updatedContent = contentText.replace("#MediaId#", mediaId);

  $.fancybox({
    content: updatedContent,
    type: "inline",
    helpers: { overlay: { locked: false } },
  });
};

$("a.videoBoxLink").click(function (e) {
  videobox(e, $(this));
});
