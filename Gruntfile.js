// wrapper function
module.exports = function(grunt){

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
			dist: {
				options: {
					style: 'expanded'

				},
				files: {
					'css/style.css':'css/style.scss'
					// 'css/page.css':'css/page.scss'
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

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'css',
		      src: ['style.css', '!*.min.css'],
		      dest: 'css',
		      ext: '.min.css'
		    }]
		  }
		},

		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: '**/*.html',
				dest: 'dist/'
			}
		},

		// grunt watch cmd
		watch: {
			scripts:{
				files:'js/script.js',
				tasks:['uglify'],
				options:{
					livereload:true
				}
			},
			css:{
				files:['css/style.scss','css/page.scss'],
				tasks:['sass', 'cssmin'],
				options:{
					livereload:true
				}
			},
			html:{
				files:['*.html'],
				tasks:['copy'],
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

	// load all our Grunt plugins
	require('load-grunt-tasks')(grunt);
	// var jpegRecompress = require('imagemin-jpeg-recompress');
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

    // define the default task that executes when we run 'grunt' from inside the project
  // grunt.registerTask('default', ['sass']);
	grunt.registerTask('default', ['sass', 'cssmin', 'watch']);

};