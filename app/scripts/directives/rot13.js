'use strict';

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