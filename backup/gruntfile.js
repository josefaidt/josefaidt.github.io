// wrapper function
module.exports = function(grunt){
	// load all our Grunt plugins
	require('load-grunt-tasks')(grunt);
	// var jpegRecompress = require('imagemin-jpeg-recompress');
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-git');

	grunt.initConfig({
	pkg:grunt.file.readJSON('package.json'),
		// task configuration goes here

		// jshint:{
		// 	options:{
		// 		'node':true,
		// 		'esnext':true,
		// 		'curly':false,
		// 		'smarttabs':false,
		// 		'indent':2,
		// 		'quotmark':'single'
		// 	},
		// 	all:['Gruntfile.js','js/script.js']
		// },

		sass:{
			production: {
				options:{
					paths:['css'],
					plugins:[ new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})],
					report:'min',
				},
				files:{
					'css/style.css':'css/style.scss',
					'css/page.css':'css/page.scss'
				}
			}
		},

		uglify: {
			my_target: {
				options: {
					mangle:false,
					report:'min'
				},
				files: {
					'js/script.min.js': ['js/script.js']
				}
			}
		},

		watch: {
			scripts:{
				files:'js/script.js',
				tasks:['uglify'],
				options:{
					livereload:true
				}
			},
			css:{
				files:'css/style.scss',
				tasks:['sass'],
				options:{
					livereload:true
				}
			},
			commit:{
				files:['.git/logs/HEAD'],
				tasks:['imagemin']
			}
		}

	});

    // define the default task that executes when we run 'grunt' from inside the project
	grunt.registerTask('default', ['watch']);

};