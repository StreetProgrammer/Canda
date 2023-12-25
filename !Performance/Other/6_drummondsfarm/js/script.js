$(function() {
    var buttons = $(".headBTN");
    var slides = $(".posts_outer")
    buttons.click(function() {
        slides.slideUp();

        if ($(this).next().css("display") == "none") {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    })
})
