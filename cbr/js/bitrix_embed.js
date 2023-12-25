$(function(){
	if (typeof CKEDITOR == "undefined" && $('#bitrix-wef').size()>0) {
		$bitrix_ob = $('#bitrix-wef');
	   $bitrix_ob.replaceWith('<script data-b24-form="'+$bitrix_ob.data("b24-form")+'" data-skip-moving="true">'+'</script>');
		(function(w,d,u){
					var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
					var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
			})(window,document,$bitrix_ob.data('jslink'));   
	}
});