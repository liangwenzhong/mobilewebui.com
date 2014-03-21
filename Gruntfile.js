module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 4000,
					base: '_site'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['connect']);

};