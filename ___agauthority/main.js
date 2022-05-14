$(document).ready(function () {

    // to change "All Sub Categories" to "All Categories" document ready!
    setTimeout(function () {
        $('#subcategories option[value="0"]').text('All Categories')
        console.log($('#subcategories option[value="0"]').text());
    }, 3000);

    function changeBoxesDependOnDocumentWidh() {
        var docWidth = $(document).width();
        if ($(document).width() <= 743) {
            $('.specs .field').each(function () {
                var IndicatorText = $(this).children("strong").text().trim().toLowerCase()
                if (IndicatorText === 'hours:' || IndicatorText === 'odometer:') {
                    var changableEle = $(this)
                    changableEle.insertBefore(changableEle.parent().prev().prev())
                }
            });

        } else {
            $('.price-oem').each(function () {
                if ($(this).prev().hasClass('field')) {
                    var changableEle = $(this).prev()
                    $(this).parent().children(".specs").last().append(changableEle)
                }
            });
        }
    }

    changeBoxesDependOnDocumentWidh()

    $(window).on('resize', function () {
        changeBoxesDependOnDocumentWidh()
    });



    $.ajaxSetup({
        beforeSend: function () {
            console.log('test');
        },
        complete: function () {
            console.log('completed');

            // to change "All Sub Categories" to "All Categories" after filter
            setTimeout(function () {
                $('#subcategories option[value="0"]').text('All Categories')
                console.log($('#subcategories option[value="0"]').text());
            }, 1000);

            changeBoxesDependOnDocumentWidh()
        }
    });
})
