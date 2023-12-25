$(function () {
	/*Delete slider component in mobile*/
	if ($(window).width() < 700) {
		$('.slide').remove();
		$('.hidden-xs').remove();
		$('.desktop-only').remove();
		 
		
	}


	// /* load weatehr widget  */
	// // const loadScriptsTimer = setTimeout(loadScripts, 5000);
	// const userInteractionEvents = ["mouseover", "keydown", "touchmove", "touchstart"];
	// userInteractionEvents.forEach(function (event) {
	// 	window.addEventListener(event, triggerScriptLoader, {
	// 		passive: true
	// 	});
	// });

	// function triggerScriptLoader() {
	// 	loadScripts();
	// 	clearTimeout(loadScriptsTimer);
	// 	userInteractionEvents.forEach(function (event) {
	// 		window.removeEventListener(event, triggerScriptLoader, {
	// 			passive: true
	// 		});
	// 	});
	// }
	// function loadScripts() {

	// 	// var fileref = document.createElement('script')
	// 	// fileref.setAttribute("type", "text/javascript")
	// 	// fileref.setAttribute("src", "https://platform.twitter.com/widgets.js")
	// 	// document.body.appendChild(fileref);
	// 	// var fileref2 = document.createElement('script')

	// 	// fileref2.setAttribute("type", "text/javascript")
	// 	// fileref2.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v10.0")
	// 	// document.body.appendChild(fileref2);
	// 	if ($(window).width() >700) {
	// 		!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
		
		
	// 		(function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));
		
 	// 	// $( `<script type="text/javascript"> (function () { var tabPanels = [ $('#panelFacebook'), $('#panelInstagram'), $('#panelWeather'), $('#panelPartslookup') ]; $.each( tabPanels, function(index, panel) { panel.hover(function() { panel.stop().animate({right: 0}); }, function() { panel.stop().animate({right: "-100%"}); }); }); }) (); </script>` ).insertAfter( "#panelPartslookup" );
	// }

	// }

});