$(function(){
	/*Delete slider component in mobile*/
	if($(window).width()<700){
		$('.slide').remove();
		$('.hidden-xs').remove();
	}
});