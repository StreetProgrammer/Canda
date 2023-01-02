// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function() {
    var tel_1 = 'tel:4186896283';
    $('body').find('a.tel-1').attr('href', tel_1);
    var tel_2 = 'tel:0000000000';
    $('body').find('a.tel-2').attr('href', tel_2);
});

/* slide to top */
$(document).ready(function() {
    $("a[href='#top']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: 0,
            },
            'slow'
        );
        return false;
    });
});

/* remove spaces from i tags */
$(document).ready(function() {
    $('body').find('i').text('');
});

/* website scripts */