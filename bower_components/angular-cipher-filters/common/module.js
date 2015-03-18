'use strict';

angular.module('zsoltiii.angular-cipher-filters', []);

angular.module('zsoltiii.angular-cipher-filters')
    .constant('alphabetsDefinitions', {
        // http://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet
        'ISOBasicLatinLowercase': 'abcdefghijklmnopqrstuvwxyz',
        'ISOBasicLatinUppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    });
