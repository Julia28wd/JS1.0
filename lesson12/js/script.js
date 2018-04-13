$(document).ready(function() {
	$('.modal').css('top', '-600px'); 
	$('body').delegate('.main_btna, .main_btn, [href = "#sheldure"]', 'click', function(){
  	$('.overlay').fadeToggle('slow');
		$('.modal').animate({dispay: "show", top: "+=600px"}, 1000);
	});

	$('.close').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').animate({dispay: "hide", top: "-=600px"}, 1000);
	});
});