'use strict';

angular.module('zsoltiii.angular-cipher-filters')
    .filter('rot1', ['caesarCipherFilter', function(caesarCipherFilter) {
        return function(str, decode) {
            var rotation;

            if (typeof decode === 'boolean' && decode === true) {
                rotation = -1;
            } else {
                rotation = 1;
            }

            return caesarCipherFilter(str, rotation);
        };
    }
    ]);