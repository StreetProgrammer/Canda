$(function () {
	/*Delete slider component in mobile*/
	/*if ($(window).width() < 700) {
		$('.slide').remove();
		$('.hidden-xs').remove();
		$('.desktop-only').remove();


	}
	let count = 0*/

	/* load weatehr widget  */
	// const loadScriptsTimer = setTimeout(loadScripts, 5000);
	const userInteractionEvents = ["mouseover", "keydown", "touchmove", "touchstart"];
	userInteractionEvents.forEach(function (event) {
		window.addEventListener(event, triggerScriptLoader, {
			passive: true
		});
	});

	function triggerScriptLoader() {
		loadScripts();
		clearTimeout(loadScriptsTimer);
		userInteractionEvents.forEach(function (event) {
			window.removeEventListener(event, triggerScriptLoader, {
				passive: true
			});
		});
	}
	function loadScripts() {
		if (count == 0) {
			$(`<video __idm_id__="11763713" autoplay="" class="video" data-bgvideo="true" loop="" muted="" poster="/site-uploads/1001172/Images/7.jpg" style=" "><source src="/site-uploads/1001172/video/dan_bg.mp4" type="video/mp4"></video>`).insertAfter(".video-content");
			$(`<script async="" defer="" crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v5.0"></script> <div class="fb-page" data-adapt-container-width="true" data-height="300" data-hide-cover="false" data-href="https://www.facebook.com/DanREquipment/" data-show-facepile="false" data-small-header="true" data-tabs="timeline" data-width="">&nbsp;</div>`).insertAfter(".fb_reset");
			count++
		}

		// var fileref = document.createElement('script')
		// fileref.setAttribute("type", "text/javascript")
		// fileref.setAttribute("src", "https://platform.twitter.com/widgets.js")
		// document.body.appendChild(fileref);
		// var fileref2 = document.createElement('script')

		// fileref2.setAttribute("type", "text/javascript")
		// fileref2.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v10.0")
		// document.body.appendChild(fileref2);
		// if ($(window).width() >700) {
		// 	!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');


		// 	(function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));

		// $( `<script type="text/javascript"> (function () { var tabPanels = [ $('#panelFacebook'), $('#panelInstagram'), $('#panelWeather'), $('#panelPartslookup') ]; $.each( tabPanels, function(index, panel) { panel.hover(function() { panel.stop().animate({right: 0}); }, function() { panel.stop().animate({right: "-100%"}); }); }); }) (); </script>` ).insertAfter( "#panelPartslookup" );
	}

	// }

});