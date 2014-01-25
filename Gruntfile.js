'use strict';
module.exports = function(grunt) {
 
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
    grunt.initConfig({
 
        // watch for changes and trigger compass, jshint, uglify and livereload
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
 
        // compass and scss
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },
 
        // javascript linting with jshint
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
 
        // uglify to concat, minify, and make source maps
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
        }
 
    });
 
    // rename tasks
    grunt.renameTask('rsync', 'deploy');
 
    // register task
    grunt.registerTask('default', ['watch']);
 
};