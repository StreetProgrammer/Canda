// global scripts

/*handle phone numbers anchor href attr*/
$(document).ready(function() {
    var tel_1 = 'tel:5194249374';
    $('body').find('a.tel-1').attr('href', tel_1);
    var tel_2 = 'tel:5196038374';
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

// remove spaces from i tags
$(document).ready(function() {
    $('body').find('i').text('');
});

/* Start Handle Fake anchors */
$(function() {
    $('[data-href]').on('click', function(e) {
        var target = $(this).attr('target') || undefined;
        if (!e.target.matches('a')) {
            console.log('target => ', target);
            var href = $(this).data('href');
            if (target === 'blank') {
                window.open(href, target);
            } else {
                window.location = href;
            }
        }
    });
});
/* End Handle Fake anchors */

// Website Scripts

/* Start Change site menu content for mobile */
$(function() {
    $('button.navbar-toggle').html(
        $('button.navbar-toggle').html() + '<span>Menu</span>'
    );
});
/* End Change site menu content for mobile */

/* Start  */
$(document).ready(function() {
    $('#brandSlider').multislider({
        interval: 2000,
        duration: 500,
    });
});
/* End  */