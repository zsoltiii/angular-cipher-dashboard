'use strict';

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
