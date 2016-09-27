'use strict';

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
