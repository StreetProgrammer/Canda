$(function () {

	var dateObj = new Date()
	var weekday = dateObj.toLocaleString("default", { weekday: "long" })

	$(".hours-container .hour-item span:first-child").each(function (index) {
		if ($(this).text() === weekday) {
			$(this).parent().css({ 'background-color': 'var(--main-color)', 'color': '#FFF' })
		}
	});

	$("#sideTabs .tab-link").each(function (index) {
		// $(this).css({ "left": "-60px" });
		$(this).css({ "left": "-8vh" });
	});

	$(".tab-content")
		.mouseover(function () {
			if ($(this).attr('id') === "panelHCWH") {
				$(this).css({ "left": "-400px", "width": "400px" })
			} else if ($(this).attr('id') === "panelWeather") {
				$(this).css({ "left": "-500px", "width": "500px" })
			} else {
				$(this).css("left", "-300px")
			}
		})
		.mouseout(function () {
			$(this).css("left", "0px")
		});


	// Expand all Filters by default
	$('.filter-collapse-container .collapse').collapse('show');
	$(this).prop('disabled', true);
	$('#collapse-trigger-collapse').prop('disabled', false);

	// to put left and right fixed menus under header
	function handleFixedMenusPos() {
		var headerHeight = $('#html_1423854497828').height() + 5
		$('#sideTabs').css({ "top": headerHeight });
		$('#side-navs').css({ "top": headerHeight });

	}

	handleFixedMenusPos()


	$(window).on('resize', function () {
		handleFixedMenusPos()
	});



	var pathname = window.location.pathname;
	if ((pathname.match(/\//g) || []).length > 2) {
		$('.access-sidebar').hide();
		if ($('#html_1559136218234').length) {
			$('#html_1559136218234').hide();
		}
	}
});