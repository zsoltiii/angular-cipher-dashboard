'use strict';

angular.module('zsoltiii.angular-cipher-filters')
    .filter('rot13', ['caesarCipherFilter', function(caesarCipherFilter) {
        return function(str, decode) {
            var rotation;

            if (typeof decode === 'boolean' && decode === true) {
                rotation = -13;
            } else {
                rotation = 13;
            }

            return caesarCipherFilter(str, rotation);
        };
    }
]);