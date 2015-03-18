'use strict';

angular.module('zsoltiii.angular-cipher-filters')
    .filter('caesarCipher', ['alphabetsDefinitions', function(alphabetsDefinitions) {
        return function(str, rotation, alphabets) {

            if (angular.isUndefined(str)) {
                return null;
            }

            if (angular.isUndefined(rotation)) {
                rotation = 0;
            }

            if (angular.isUndefined(alphabets)) {
                alphabets = [];
                alphabets.push(
                    alphabetsDefinitions.ISOBasicLatinLowercase,
                    alphabetsDefinitions.ISOBasicLatinUppercase
                );
            }

            var message = str;

            var _runThrough = function (str, rotation, alphabet) {
                var result = '';

                for (var i = 0; i < str.length; i++) {
                    var pos = alphabet.indexOf(str.charAt(i));
                    if(pos >= 0) {
                        if (rotation >= 0) {
                            result += alphabet.charAt((pos + rotation) % alphabet.length);
                        } else {
                            result += alphabet.charAt((alphabet.length + pos + rotation) % alphabet.length);
                        }

                    } else {
                        result += str.charAt(i);
                    }
                }
                return result;
            };

            angular.forEach(alphabets, function(alphabet) {
                message = _runThrough(message, rotation, alphabet);
            });

            return message;
        };
    }
]);