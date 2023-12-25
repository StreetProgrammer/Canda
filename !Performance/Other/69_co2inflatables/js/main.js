/* Menu */
$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
      $(this).toggleClass("active");
  });
});

/* Active State Menu */
$(document).ready(function () {
  var url = window.location.pathname;
  $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
  $('ul.nav a').filter(function() {
       return this.href == url;
  }).parent().addClass('active');
});

/* Sticky Menu on Scroll */
$(function () {
  $(window).on("scroll", function () {
      if ($(window).scrollTop() > 48) {
          $("#comp_1695306480105").addClass("sticky-nav");
      } else {
          $("#comp_1695306480105").removeClass("sticky-nav");
      }
  });
});

/* Change Slider transition from slide to fade */
$(function () {
  $(".carousel").removeClass("slide");
  $(".carousel").addClass("carousel-fade");
});

/* Brands Slider */
$(document).ready(function() {
  $('#brandSlider').multislider({
      interval: 8000,
      duration: 500,
  });
});


/* Slide to top */
$(document).ready(function () {
  $("a[href='#top']").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
});

var theLanguage = $('html').attr('lang');
// Diferent language
if (theLanguage == "fr") {
  $(".finacning-link").attr(
    "href",
    "/fr/Finance-Request"
  );
  
  $(".finacning-link").attr("target", "_self");

} else {
  $(".finacning-link").attr(
    "href",
    "/Finance-Request"
  );
  
  $(".finacning-link").attr("target", "_self");
}

  /* Hide html above component on vdp */
  if($("#detailsParentDiv").size()>0){
    $('.inventory-page').css("display","none");
    };

   /* Show disclaimer on vdp */
   if($("#detailsParentDiv").size()>0){
    $('.disclaimer-vdp').css("display","block");
    };