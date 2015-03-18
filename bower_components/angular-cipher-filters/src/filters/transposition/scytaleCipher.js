'use strict';

angular.module('zsoltiii.angular-cipher-filters')
    .filter('scytaleCipher', function() {
        return function(str, dimensions, decode) {

            if (angular.isUndefined(str)) {
                return null;
            }

            if (angular.isUndefined(dimensions)) {
                dimensions = 1;
            }

            var i, j;
            var returnArray = [];

            var message = str.replace(/\s/g, '').toUpperCase();
            var rows = message.length / dimensions;
            var messageArray = message.split('');

            if (decode === true) {
                for(j = 0; j < dimensions; j++) {
                    for(i = 0; i < rows; i++) {
                        returnArray.push(messageArray[j+i*dimensions]);
                    }
                }

                return returnArray.join('');
            } else {
                for(i = 0; i < rows; i++) {
                    for(j = 0; j < dimensions; j++) {
                        returnArray.push(messageArray[i+j*rows]);
                    }
                }

                return returnArray.join('');
            }
        };
    });