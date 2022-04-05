$(function() {

	// Window loads
  $(window).on('load', function() {
		// Preloader
		$("#site-preloader").fadeOut("slow");
		// Initialize AOS
    AOS.init({
      duration: 1000
    });
  });

	// Add header scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			 $('.site-navbar').addClass('header-scroll');
		} else {
			 $('.site-navbar').removeClass('header-scroll');
		}
	});

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});

		setTimeout(function() {
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');
        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });
        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });
        counter++;
      });
    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
    });

		$(window).resize(function() {
			var $this = $(this),
			w = $this.width();
			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();
			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});

	}; 
	siteMenuClone();

	$(document).on("click", "#home", function () {
		$('#section-about-awc').addClass('d-none');
		$('#section-home').removeClass('d-none');
		$('li#home').addClass('active');
		$('li#aboutAwc').removeClass('active');
	});

	$(document).on("click", "#aboutAwc", function () {
		$('#section-home').addClass('d-none');
		$('#section-about-awc').removeClass('d-none');
		$('li#aboutAwc').addClass('active');
		$('li#home').removeClass('active');
	
	});

});