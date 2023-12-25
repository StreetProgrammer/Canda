$(function () {
    $('.formOptions').hide();
    $('.current-opt').show();

    $('#choose').change(function () {
        $('.formOptions').slideUp();
        $('.formOptions').removeClass('current-opt');
        $("." + $(this).val()).slideDown();
        $("." + $(this).val()).addClass('current-opt');
    });
});