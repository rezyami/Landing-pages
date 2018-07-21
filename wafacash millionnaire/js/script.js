$(document).ready(function(){
	$('#media').hide();
	$('#win').hide();
	// $('.scroll-pane')
	//     .bind(
	//         'mousewheel',
	//         function(e){
	//             e.preventDefault();
	//         });
	// $('.scroll-pane .jspPane').jScrollPane({ autoReinitialise: true });

	$('.btn_menu').click(function(){
		$('.btn_menu').removeClass('current');
        $(this).addClass('current');
	});

	$('#regle').click(function(){
		$('#reglment').show();
		$('#media').hide();
		$('#win').hide();
	});
	$('#mediabtn').click(function(){
		$('#media').show();
		$('#reglment').hide();
		$('#win').hide();
	});
	$('#gagant').click(function(){
		$('#win').show();
		$('#media').hide();
		$('#reglment').hide();
	});
});