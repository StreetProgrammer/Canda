$('#comp_1562157311371 .open-details-btn').each(function () {

	var oldUrl = $(this).attr("href"); // Get current url
	var newUrl = oldUrl.replace("Home", "New-Inventory"); // Create new url

	var oldclass = $(this).attr("class"); // Get current url
	var newclass = oldUrl.replace("pushstate", " "); // Create new url


	$(this).attr("href", newUrl); // Set herf value
	$(this).attr("class", newclass); // Set herf value

});
// $("#comp_1562157311371").append("<a class='btn btn-primary btn-lg' href='/New-Inventory/'>See More</a>");
$('#comp_1562157933609 .open-details-btn').each(function () {

	var oldUrl = $(this).attr("href"); // Get current url
	var newUrl = oldUrl.replace("Home", "Used-Equipment"); // Create new url

	var oldclass = $(this).attr("class"); // Get current url
	var newclass = oldUrl.replace("pushstate", " "); // Create new url


	$(this).attr("href", newUrl); // Set herf value
	$(this).attr("class", newclass); // Set herf value

});

// $("#comp_1562157933609").append("<a class='btn btn-primary btn-lg' href='/Used-Equipment/'>See More</a>");


$('.carousel').carousel({
	interval: 5000,
	hover: 'pause'
});


$(document).ready(function () {
	async function clearTabs() {
		$('a[ads-target]').each(function (index) {
			let target = $($(this).attr('ads-target'));
			$(this).removeClass('active-tab')
			target.removeClass('in');
			target.removeAttr("style")
		})
	}

	const targets = [
		{
			el: "comp_1562157311371",
			href: "/New-Inventory/"
		},
		{
			el: "comp_1562157933609",
			href: "/Used-Equipment/"
		},
		{
			el: "comp_1620995404673",
			href: "/Parts Specials/"
		},
	]
	$('a[ads-target]').each(function (index) {
		let target = $($(this).attr('ads-target'));
		target.addClass('collapse');
		for (let i = 0; i < targets.length; i++) {
			if (target.attr('id') === targets[i].el) {
				target.append($(`<div class="more"><a class="hidden-xs" href="${targets[i].href}">
								See More 
								<span class="skew">
									<i aria-hidden="true" class="fas fa-long-arrow-alt-up"></i>
								</span> 
							</a></div>`));
			}
		}
		if (index === 0) {
			$(this).addClass('active-tab')
			target.addClass('in');
			target.css({ "display": "flex" });
		} else {
			$(this).removeClass('active-tab')
		}
	})

	$('a[ads-target]').on('click', function () {
		let $this = $(this)
		clearTabs().then(function () {
			let target = $($this.attr('ads-target'))
			$this.addClass('active-tab')
			target.addClass('in')
			target.css({ "display": "flex" });
		});
	})
});

