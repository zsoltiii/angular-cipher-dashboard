
module.exports = function(config) {
    'use strict';

    config.set({
        basePath: '../',
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'common/module.js',
            'src/**/*.js',
            'test/**/*.spec.js'
        ],
        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: false,
        frameworks: ['jasmine'],
        reporters: ['progress'],
        browsers: ['Chrome'],
        captureTimeout: 60000
    });
};