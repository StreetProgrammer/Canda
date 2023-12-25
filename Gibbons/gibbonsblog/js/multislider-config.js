$(document).ready(function () {
    if ($('#brandSlider').length) {
        setTimeout(() => {

            $('#brandSlider').multislider({
                interval: 2000,
                duration: 250,
                pauseAbove: 767
            });
        }, 1000);
    }
})
