requirejs.config({
	baseUrl: ".",
	paths: {
		"domReady": "/assets/vendor/requirejs/domReady",
		"text": "/assets/vendor/requirejs/text",
		"jquery": "/assets/vendor/jquery/jquery-2.1.0.min",
		"backbone": "/assets/vendor/backbonejs/backbone-min",
		"underscore": "/assets/vendor/underscorejs/underscore-min",
		"swipe": "/assets/vendor/swipe/swipe",
		"bootstrap": "/assets/vendor/bootstrap/js/bootstrap.min",
		"waypoints": "/assets/vendor/jquery-waypoints/waypoints.min",
		"views": "/assets/js/views"
	},
	urlArgs: "bust=" + (new Date()).getTime(),
	waitSeconds: 0,
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone',
		},
		'waypoints': {
			deps: ['jquery'],
			exports: 'waypoints'
		},
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		},
		'swipe': {
			exports: 'Swipe'
		}
	}
});

require(['views/app', 'jquery'], function(appView, $) {
	new appView();
	$('body').css("background-color","#ffffff");
	$(".page-loading").css("visibility", 'hidden');
	$("article,section").css("visibility", 'visible');
});