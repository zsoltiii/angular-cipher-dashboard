'use strict';

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
