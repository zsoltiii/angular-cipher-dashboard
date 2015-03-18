'use strict';

/**
 * @ngdoc overview
 * @name angular-cipher-dashboard
 * @description
 * # angular-cipher-dashboard
 *
 * Main module of the application.
 */
angular.module('angular-cipher-dashboard', ['zsoltiii.angular-cipher-filters', 'ngRoute', 'frapontillo.bootstrap-switch']);


angular.module('angular-cipher-dashboard')
    .config(function($routeProvider) {

        $routeProvider

            .when('/playground', {
                templateUrl: 'views/playground.html',
                controller: 'PlaygroundCtrl'
            })

            .when('/dashboard', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })

            .otherwise({
                redirectTo: '/dashboard'
            });

    });