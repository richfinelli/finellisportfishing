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
				namespace: "mr-rotato" // Defaults to “carousel”.
			})
			.bind({
				'mr-rotato-beforemove' : function() {
					$('.events').append("<li>“beforemove” event fired.</li>");
				},
				'mr-rotato-aftermove' : function() {
					$('.events').append("<li>“aftermove” event fired.</li>");
				}
			})
			.after('<ul class="events">Events</ul>');

            $('.current-year').text(getYear());
});