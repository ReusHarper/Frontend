window.addEventListener('load', function(){	
	// Carousel de seccion de cursos:
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  breakpoint: 1300,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});

});

addEventListener('DOMContentLoaded', () => {
	// Menu desplegable:
	const btn__menu = this.document.querySelector('.btn__menu');
	if (btn__menu){
		btn__menu.addEventListener('click', () => {
			const menu__items = this.document.querySelector('.menu__items');
			// Se muestra u oculta la clase 'show' dependiendo del caso
			menu__items.classList.toggle('show');
		});
	}
});