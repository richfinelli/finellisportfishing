function getYear() {
    return new Date().getFullYear();
}

$(document).ready(function() {
		$('.slidewrap').carousel({
			slider: '.slider',
			slide: '.slide',
			slideHed: '.slidehed',
			nextSlide : '.next',
			prevSlide : '.prev',
			addPagination: false,
			addNav : false
		});
		
		$('.slidewrap2').carousel({
			slider: '.slider',
			slide: '.slide',
			addNav: false,
			addPagination: false,
			speed: 300 // ms.
		});
		
		
		$('.slidewrap3').carousel({
			slider: '.slider3',
			slide: '.slide3',
			addNav: false,
			addPagination: false,
			speed: 300 // ms.
		});

        $('.current-year').text(getYear());
});