'use strict';

angular.module('angular-cipher-dashboard')
    .directive('rot1', function () {
        return {
            restrict: 'E',
            scope: {
                source: '@'
            },
            templateUrl: 'views/directives/rot1Template.html',
            replace: true,
            link: function ($scope, element, attrs) {
                $scope.$watch('source', function(value) {
                    //console.log('source value: ' + value);
                });
            }
        };
    });