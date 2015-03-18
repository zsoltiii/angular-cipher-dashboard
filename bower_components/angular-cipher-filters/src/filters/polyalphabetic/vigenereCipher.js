'use strict';

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