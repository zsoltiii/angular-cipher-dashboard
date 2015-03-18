// Generated on 2015-02-22 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    meta: {
      banner: '/**\n' + ' * <%= pkg.description %>\n' +
          ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * @author <%= pkg.author %>\n' +
          ' * @link <%= pkg.homepage %>\n' +
          ' * @license <%= pkg.license %>\n**/\n\n'
    },

    uglify: {
      options: {
          banner: '<%= meta.banner %>'
      },
      build: {
          src: ['dist/<%= pkg.name %>.js'],
          dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    // Test settings
    karma : {
      options: {
          configFile: 'test/karma.conf.js',
          singleRun: true,
          autoWatch: false
      },
      local: {
          browsers: ['Chrome']
      }
    }
  });

  grunt.registerTask('test-js', ['jshint']);
  grunt.registerTask('test', ['jshint', 'karma:local']);
  grunt.registerTask('build', ['clean:dist', 'uglify']);
  grunt.registerTask('default', ['test', 'build']);
};
