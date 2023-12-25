$(document).ready(function () {
    $("video").each(function (index) {
        // console.log( index + ": " + $( this ).text() );
        console.log($(this).children());

    });

    $("iframe").each(function (index) {
        var attr = $(this).attr('delaySrc')
        if (typeof attr !== typeof undefined && attr !== false) {
            // ...
        }
        console.log('delaySrc', attr);
    });
})