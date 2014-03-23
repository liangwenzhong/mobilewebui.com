define(['backbone', 'views/intro', 'views/header'],
	function(Backbone, introView, headerView) {
		var AppView = Backbone.View.extend({
			el: "body",
			initialize: function() {
				this.render();
			},
			render: function() {
				new headerView();
				new introView();
				//触发一次屏幕调整
				$(window).resize();
			}
		});
		return AppView;
	});