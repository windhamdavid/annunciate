'use strict';
module.exports = function(grunt) {
 
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
    grunt.initConfig({
 
        watch: {
            options: {
                livereload: true,
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                files: ['*.html', '*.php', 'assets/img``/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },
 
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },
 
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
         all: [
                'Gruntfile.js',
                'assets/js/source/**/*.js'
            ]
        },
 
        uglify: {
            dist: {
                options: {
                    sourceMap: 'assets/js/map/source-map.js'
                },
                files: {
                    'assets/js/plugins.min.js': [
                        'assets/js/source/plugins.js',
                        'assets/js/vendor/**/*.js',
                        '!assets/js/vendor/modernizr*.js'
                    ],
                    'assets/js/main.min.js': [
                        'assets/js/source/main.js'
                    ]
                }
            }
        },
		
        rsync: {
            options: {
                exclude: ['.git*', '.DS_Store*', '._*', '.Spotlight*', '.Trashes*', '*thumbs.db*'],
                recursive: true,
                spawn: false,
                syncDestIgnoreExcl: true
            }
        }
		
        phpunit: {
            all: {
                dir: 'tests/phpunit/'
            }
        },
 
    });

	grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks('grunt-contrib-watch');
	
    grunt.registerTask('default', [
      'uglify',
      'version',
	  'watch'
    ]);
	
    grunt.registerTask('dev', [
      'watch'
    ]);
 
};