define(['backbone', 'swipe'], function(Backbone, Swipe) {
	var introView = Backbone.View.extend({
		el: "#intro-page",
		initialize: function() {
			this.render();
		},
		events: {
			"click .slider-bullets .slider-bullet": "changeSlider"
		},

		render: function() {
			var me = this;
			window.introSlider = new Swipe(document.getElementById('intro-slider'), {
				startSlide: 0,
				speed: 400,
				// auto: 3000,
				continuous: false,
				disableScroll: false,
				stopPropagation: false,
				callback: function(index, elem) {
					$(me.el).find(".slider-bullets .slider-bullet").removeClass("selected").eq(index).addClass("selected");
				},
				transitionEnd: function(index, elem) {}
			});

			$(window).on("resize", this.resizeSlider);
		},
		changeSlider: function(e) {
			var index = $(e.currentTarget).attr("data-index");
			window.introSlider.slide(index, 400);
		},
		resizeSlider: function() {
			var swipImgH = $("#intro-slider .swipe-wrap .swipe-item img").height();
			var swipImgW = $("#intro-slider .swipe-wrap .swipe-item img").width();
			if (swipImgH < $(window).height()) {
				$("#intro-slider .swipe-wrap .swipe-item img").removeClass("fixWidth").addClass("fixHeight");
			}
			if (swipImgW < $(window).width()) {
				$("#intro-slider .swipe-wrap .swipe-item img").removeClass("fixHeight").addClass("fixWidth");
			}
		}
	});
	return introView;
});