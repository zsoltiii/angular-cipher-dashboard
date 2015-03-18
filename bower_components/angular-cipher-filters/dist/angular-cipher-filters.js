/**
 * @name angular-cipher-filters
 * @description A collection of common ciphers implemented as angular filers
 * @version v0.1.0 - Released on 2015-03-01
 * @author Zsolt Szalai
 * @license MIT
 * @link 'https://github.com/zsoltiii/angular-cipher-filters'
**/

'use strict';
// Source: common/module.js
angular.module('zsoltiii.angular-cipher-filters', []);

angular.module('zsoltiii.angular-cipher-filters')
    .constant('alphabetsDefinitions', {
        // http://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet
        'ISOBasicLatinLowercase': 'abcdefghijklmnopqrstuvwxyz',
        'ISOBasicLatinUppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    });

// Source: src/filters/monoalphabetic/caesarCipher.js
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
// Source: src/filters/monoalphabetic/rot1.js
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
// Source: src/filters/monoalphabetic/rot13.js
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
// Source: src/filters/polyalphabetic/vigenereCipher.js
angular.module('zsoltiii.angular-cipher-filters')
    .filter('vigenereCipher', ['caesarCipherFilter', 'alphabetsDefinitions', function(caesarCipherFilter, alphabetsDefinitions) {
        return function(str, keyword, decode, alphabets) {

            if (angular.isUndefined(str)) { return null; }
            if (angular.isUndefined(keyword)) { return str; }

            if (angular.isUndefined(alphabets)) {
                alphabets = [];
                alphabets.push(
                    alphabetsDefinitions.ISOBasicLatinLowercase,
                    alphabetsDefinitions.ISOBasicLatinUppercase
                );
            }

            var j = 0, message = '';

            for (var i = 0; i < str.length; i++) {

                if (angular.equals(str.charAt(i), ' ')) {
                    message += str.charAt(i);
                    continue;
                }

                var keywordPos = alphabetsDefinitions.ISOBasicLatinLowercase.indexOf(keyword.charAt(j % keyword.length).toLowerCase());

                if(keywordPos >= 0) {

                    if (decode === true) {
                        message += caesarCipherFilter(str.charAt(i), -keywordPos, alphabets);
                    } else {
                        message += caesarCipherFilter(str.charAt(i), keywordPos, alphabets);
                    }

                } else {
                    message += str.charAt(i);
                }

                j++;
            }

            return message;
        };
    }]);
// Source: src/filters/transposition/scytaleCipher.js
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