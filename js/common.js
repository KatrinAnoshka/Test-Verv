$(document).ready(function() {

	/************* Всплывающая форма *************/


	$(".header__button, .registration__link").click(function() {
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});
   	
   	// Стрелка наверх
	$(".footer__img").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});



});	