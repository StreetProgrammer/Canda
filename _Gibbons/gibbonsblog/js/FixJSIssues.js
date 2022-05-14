//=================================================================================
//Specify affected tags. Add or remove from list:
var tgs = new Array('div', 'td', 'tr');

//Specify spectrum of different font sizes:
var szs = new Array('xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large');
var startSz = 2;

function ts(trgt, inc) {
	if (!document.getElementById) return
	var d = document, cEl = null, sz = startSz, i, j, cTags;

	sz += inc;
	if (sz < 0) sz = 0;
	if (sz > 6) sz = 6;
	startSz = sz;

	if (!(cEl = d.getElementById(trgt))) cEl = d.getElementsByTagName(trgt)[0];

	cEl.style.fontSize = szs[sz];

	for (i = 0; i < tgs.length; i++) {
		cTags = cEl.getElementsByTagName(tgs[i]);
		for (j = 0; j < cTags.length; j++) cTags[j].style.fontSize = szs[sz];
	}
}
//=================================================================================

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date(); (function () { var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0]; s1.async = true; s1.src = 'https://embed.tawk.to/5e96072d35bcbb0c9ab10f3c/default'; s1.charset = 'UTF-8'; s1.setAttribute('crossorigin', '*'); s0.parentNode.insertBefore(s1, s0); })();

//=================================================================================

setTimeout(() => {
	(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; fnames[1] = 'FNAME'; ftypes[1] = 'text'; }(jQuery)); var $mcj = jQuery.noConflict(true);

}, 5000);
//=================================================================================
