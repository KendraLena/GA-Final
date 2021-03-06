(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	// initialize function, wrapper, slides. 
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
      console.log("this.wrapper", this.wrapper)
			this.slides = this.wrapper.querySelectorAll( ".slide" );
      console.log("this.slides", this.slides)
			// this.previous = this.el.querySelector( ".slider-previous" );
			// this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
			// allows slides to fade in and out of each other
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
			//sets time between slides
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 5000);
		},
		//makes it stop slideshow when you hover your mouse on it
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		// var slider = new Slideshow( "#main-slider" );
    var slider = new Slideshow( ".main-slider.one" );
    var slider = new Slideshow( ".main-slider.two" ); 
    var slider = new Slideshow( ".main-slider.three" ); 
    var slider = new Slideshow( ".main-slider.four" ); 
    var slider = new Slideshow( ".main-slider.five" ); 
    var slider = new Slideshow( ".main-slider.six" ); 
    var slider = new Slideshow( ".main-slider.seven" ); 
		
	});
	
	
})();