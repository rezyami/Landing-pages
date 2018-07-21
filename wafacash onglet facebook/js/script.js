$(document).ready(function(){
	$('.scroll-pane')
	    .bind(
	        'mousewheel',
	        function(e){
	            e.preventDefault();
	        });
	$('.scroll-pane .jspPane').jScrollPane({ autoReinitialise: true });
});