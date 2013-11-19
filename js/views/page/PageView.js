// Filename: views/projects/list
define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone, home){
		 var PageView = Backbone.View.extend({
			el: $('.page'),
			render: function (options) {
				var that = this;
				if (options.page) {
					/* as this is just a way of getting up and running we aren't passing anything 
					to the template and therefore we can get away with dynamically pulling in the
					html we want. Normally in here we can call in some Js file and apply it after the 
					template has been rendered but as we are keeping this small and simple we are
					actually going to do two nested require. one for the template and one for it's script */
					var pageTemplate = 'text!templates/page/' + options.page + '.html';
					var pageScript = 'pages/' + options.page;
					require([pageTemplate, pageScript], function (pageTemplate, pageModule) {
						var template = _.template(pageTemplate, {page: options.page});
						that.$el.html(template);
						/* once the template has been rendered now run the appropriate script from it*/
						pageModule.init();
					});
				}
			}
		});
		return PageView;
});
