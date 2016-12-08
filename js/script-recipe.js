$(document).ready( function(){

	$('.icon-menu').hide();

	$('.js-show-recipe').click(function(){		/*Etapa 8*/
		$(this).addClass("active");		/*Etapa 9*/
		$('.page').removeClass("make");		/*Etapa 8*/
		$('.js-show-make').removeClass("active");	/*Etapa 9*/
	});

	$('.js-show-make').click(function(){	/*Etapa 8*/
		 $('.page').addClass("make");		/*Etapa 8*/
		 $(this).addClass("active");	/*Etapa 9*/
		 $('.js-show-recipe').removeClass("active");	/*Etapa 9*/
	});

	$('.icon-arrow-left-alt').click(function(){		/*Etapa 10*/
 		window.location = 'index.html';
 	});

	
});