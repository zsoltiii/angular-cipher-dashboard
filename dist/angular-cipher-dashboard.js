/**
 * 
 * @version v0.0.0 - 2016-09-27
 * @author 
 * @link 
 * @license MIT
**/

'use strict';
// Source: app/scripts/app.js
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

// Source: app/scripts/controllers/main.js
/**
 * @ngdoc function
 * @name angular-cipher-dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular-cipher-dashboard
 */
angular.module('angular-cipher-dashboard')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.textAreaText = 'Add your text here';
    }]);

// Source: app/scripts/controllers/playground.js
/**
 * @ngdoc function
 * @name angular-cipher-dashboard.controller:PlaygroundCtrl
 * @description
 * # PlaygourndCtrl
 * Controller of the angular-cipher-dashboard
 */
angular.module('angular-cipher-dashboard')
    .controller('PlaygroundCtrl', ['$scope', function ($scope) {
        $scope.textAreaText = 'Something to start with on the Playground';
    }]);

// Source: app/scripts/directives/caesarCipher.js
angular.module('angular-cipher-dashboard')
    .directive('caesarCipher', function () {
        return {
            restrict: 'E',
            scope: {
                rotate: '@',
                source: '@'
            },
            templateUrl: 'views/directives/caesarCipherTemplate.html',
            controller: ['$scope', function($scope) {
                $scope.directiveRotation = parseInt($scope.rotate, 10);
                $scope.check = false;
            }],
            replace: true,
            link: function ($scope, element, attrs) {
                $scope.$watch('source', function(value) {
                    //console.log('source value: ' + value);
                });
            }
        };
    });

// Source: app/scripts/directives/rot1.js
angular.module('angular-cipher-dashboard')
    .directive('rot1', function () {
        return {
            restrict: 'E',
            scope: {
                source: '@'
            },
            templateUrl: 'views/directives/rot1Template.html',
            controller: ['$scope', function($scope) {
                $scope.check = true;
            }],
            replace: true,
            link: function ($scope, element, attrs) {
                $scope.$watch('source', function(value) {
                    //console.log('source value: ' + value);
                });
            }
        };
    });

// Source: app/scripts/directives/rot13.js
angular.module('angular-cipher-dashboard')
    .directive('rot13', function () {
        return {
            restrict: 'E',
            scope: {
                source: '@'
            },
            templateUrl: 'views/directives/rot13Template.html',
            replace: true,
            link: function ($scope, element, attrs) {
                $scope.$watch('source', function(value) {
                    //console.log('source value: ' + value);
                });

                element.find('i').on('click', function() {
                    bootbox.alert('ROT13 (using the default latin alphabet) is its own inverse, that is, encoding and decoding results in the same output!');
                });
            }
        };
    });
// Source: app/scripts/directives/vigenereCipher.js
angular.module('angular-cipher-dashboard')
    .directive('vigenereCipher', function () {
        return {
            restrict: 'E',
            scope: {
                keyword: '@',
                source: '@'
            },
            templateUrl: 'views/directives/vigenereCipherTemplate.html',
            controller: ['$scope', function($scope) {
                $scope.check = true;
            }],
            replace: true,
            link: function ($scope, element, attrs) {
                $scope.$watch('source', function(value) {
                    //console.log('source value: ' + value);
                });
            }
        };
    });
