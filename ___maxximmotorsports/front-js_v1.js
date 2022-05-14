$('.navbar-nav>li:nth-child(1) a').addClass("home-icon");
$('.navbar-nav>li:nth-child(1) a')[0].innerHTML = '<span class="glyphicon glyphicon-home">&nbsp;</span>';

setInterval(function () {
	if ($('.payment-options').size() > 0 && $('.payment-options').attr('src') == '/site-uploads/1001066/Images/payment-options2.jpg') {
		$('.payment-options').attr('src', '/site-uploads/1001066/Images/payment-options2.jpg');
	}

}, 30);

$(document).ready(function () {

	$("source").each(function (index) {
		var attr = $(this).attr('delaySrc')
		if (typeof attr !== typeof undefined && attr !== false) {
			console.log('Source delaySrc', attr);
			$(this).attr("src", attr);
			$(this).parent()[0].load();
			$(this).parent()[0].play();
		}
	});

	setTimeout(function () {
		$("iframe").each(function (index) {
			var attr = $(this).attr('delaySrc')
			if (typeof attr !== typeof undefined && attr !== false) {
				console.log('delaySrc', attr);
				$(this).attr("src", attr);
			}
		});
	}, 3000);

})


