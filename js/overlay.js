$(document).ready(function() {
	var overlay=$("#overlay-bg");
	overlay.hide();
	
	setTimeout(function(){
		overlay.fadeIn(750);
		
		$("div").click(function(e){
			if($(this).is("#overlay") )
			{
				e.stopPropagation();
			}
			else
			{
				overlay.fadeOut(750);
			}
		});
	},3000);
	setTimeout(function(){
		overlay.fadeOut(750);
	},13000);
});