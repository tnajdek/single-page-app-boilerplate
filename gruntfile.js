module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				keepalive: true,
				// Change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
				}
			}
		},
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
				tasks: ['jade', 'less']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ["connect", "watch"]);

};