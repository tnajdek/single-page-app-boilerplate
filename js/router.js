define([
	'jquery',
	'underscore',
	'backbone',
	'views/page/PageView'
	], function($, _, Backbone, PageView) {
		/* define the routes in the application */
		var AppRouter = Backbone.Router.extend({
			routes: {
				"": "home", 
				"page/": "view",
				"page/:page/": "view"
			}
		});

		var initialize = function(){
			var app_router = new AppRouter;
			app_router.on('route:home', function() {
				/* realistically you want more than one type of view handler, something like HomeView here
				or you could even go down the route of ListView or whatever is appropriate for your project */
				var pageView = new PageView();
				pageView.render({page: 'home'});
			});
			app_router.on('route:view', function(page){
				var pageView = new PageView();
				/* if there is no page passed in we can redirect to a listing page or some kind of landing page 
				or we can do as here and just redirect to an initial page */
				page = (page) ? page: 'page';
				pageView.render({page: page});
			});
			/* initialize history api for navigation within app */
			Backbone.history.start();
		};
		return { 
			initialize: initialize
		};
	});
