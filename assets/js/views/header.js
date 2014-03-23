define(['backbone', 'waypoints'], function(Backbone, waypoints) {
	var HeaderView = Backbone.View.extend({
		el: "#header",
		initialize: function() {
			this.render();
		},
		render: function() {
			console.info(this.el);
			$(this.el).waypoint(function() {
				if ($(this).hasClass("scroll")) {
					$(this).removeClass("scroll");
				} else {
					$(this).addClass("scroll");
				}
			});
		}
	});
	return HeaderView;
});