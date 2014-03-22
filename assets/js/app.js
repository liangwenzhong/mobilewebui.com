$(function() {
	// Isotope
	var userAgent = window.navigator.userAgent;

	window.introSlider = new Swipe(document.getElementById('intro-slider'), {
		startSlide: 0,
		speed: 400,
		auto: 3000,
		continuous: false,
		disableScroll: false,
		stopPropagation: false,
		callback: function(index, elem) {
			// console.info("callback" + index);
			$(".slider-bullets .slider-bullet").removeClass("selected").eq(index).addClass("selected");
		},
		transitionEnd: function(index, elem) {}
	});

	$(".slider-bullets .slider-bullet").click(function() {
		var index = $(this).attr("data-index");
		window.introSlider.slide(index, 400);
	});

	function parallasseRs() {
		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) || userAgent.match(/Android/i)) {
			return; // non attivare
		} else {
			var $window = $(window);
			var scrollHandler = function() {
				var $bgobj = $('#intro-slider .swipe-wrap .swipe-item img'); // assigning the object	
				if ($bgobj.length) {
					var yPos = (($window.scrollTop() - $bgobj.offset().top) / 5);
					if ($(window).scrollTop() + $(window).height() > $(document).height()) return;
					$bgobj.css({
						"margin-top": -yPos + 'px'
					});
				}
			};
			$(window).on('scroll', function() {
				window.requestAnimationFrame(scrollHandler);
			});
		}
	}

	var resiezeWindow = function() {
		var swipImgH = $("#intro-slider .swipe-wrap .swipe-item img").height();
		var swipImgW = $("#intro-slider .swipe-wrap .swipe-item img").width();
		if (swipImgH < $(window).height()) {
			$("#intro-slider .swipe-wrap .swipe-item img").css({
				"height": "100%",
				"width": "auto"
			});
		}

		if (swipImgW < $(window).width()) {
			$("#intro-slider .swipe-wrap .swipe-item img").css({
				"height": "auto",
				"width": "100%"
			});
		}

		// window.introSlider.setup();
	};

	$("#header").waypoint(function() {
		if ($(this).hasClass("scroll")) {
			$(this).removeClass("scroll");
		} else {
			$(this).addClass("scroll");
		}
	});

	$(window).resize(function() {
		resiezeWindow();
	});

	init = function() {
		resiezeWindow();
	};

	init();
});