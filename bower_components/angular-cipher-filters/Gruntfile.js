'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [
                'Gruntfile.js',
                'src/**/*.js'
            ],
            test: {
                src: ['test/**/*.js'],
                options: {
                    jshintrc: 'test/.jshintrc'
                }
            }
        },

        karma : {
            options: {
                configFile: 'test/karma.conf.js',
                singleRun: true,
                autoWatch: false
            },
            local: {
                browsers: ['Chrome']
            }
        },

        meta: {
            banner: '/**\n' +
                ' * @name <%= pkg.name %>\n' +
                ' * @description <%= pkg.description %>\n' +
                ' * @version v<%= pkg.version %> - Released on <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @license <%= pkg.license %>\n' +
                ' * @link \'<%= pkg.homepage %>\'\n**/\n\n'
        },

        concat: {
            options: {
                banner: '<%= meta.banner %>\'use strict\';\n',
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            build: {
                src: ['common/*.js', 'src/filters/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            build: {
                src: ['dist/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        }

    });

    grunt.registerTask('test-js', ['jshint']);
    grunt.registerTask('test', ['jshint', 'karma:local']);
    grunt.registerTask('build', ['concat', 'uglify']);

    grunt.registerTask('default', ['test', 'build']);

};