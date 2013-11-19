module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jade: {
			compile: {
				files: [
					{
						"index.html": "templates/index.jade"
					},
					{
						expand: true,
						src: ["templates/page/*.jade"],
						ext: ".html"
					}
				]
			}
		},
		less: {
			development: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		},
		watch: {
			scripts: {
				files: [
						"templates/index.jade",
						"templates/layout/header.jade",
						"templates/page/*.jade",
						"less/**/*.less"
				],
				tasks: ['default']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['jade', 'less']);

};