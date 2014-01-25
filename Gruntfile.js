'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            compass: {
                files: ['assets/scss/**/*.{scss,sass}'],
                tasks: ['compass']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', 'assets/js/*.js', '*.html', '*.php', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}']
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
                'force': true
            },
            all: [
                'Gruntfile.js',
                'assets/js/source/**/*.js'
            ]
        },

        uglify: {
            plugins: {
                options: {
                    sourceMap: 'assets/js/plugins.js.map',
                    sourceMappingURL: 'plugins.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'assets/js/plugins.min.js': [
                        'assets/js/source/plugins.js',
                        // 'assets/js/vendor/yourplugin/yourplugin.js',
                    ]
                }
            },
            main: {
                options: {
                    sourceMap: 'assets/js/main.js.map',
                    sourceMappingURL: 'main.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'assets/js/main.min.js': [
                        'assets/js/source/main.js'
                    ]
                }
            }
        },

		phpunit: {
            all: {
                dir: 'tests/phpunit/'
            }
        },

    });
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};