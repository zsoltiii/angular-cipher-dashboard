'use strict';

describe('caesarCipher', function () {
    var caesarCipher;

    beforeEach(module('zsoltiii.angular-cipher-filters'));

    beforeEach(inject(function ($filter) {
        caesarCipher = $filter('caesarCipher');
    }));

    describe('default parameters', function() {
        it('should return the letter n with default parameters', function() {
            expect(caesarCipher('a')).toEqual('a');
        });

        it('should return encrypted sentence with default parameters', function(){
            expect(caesarCipher('Why did the chicken cross the road?')).toEqual('Why did the chicken cross the road?');
        });
    });

    describe('rotation parameter', function() {
        it('should return the letter c with rotation of 2', function() {
            expect(caesarCipher('a', 2)).toEqual('c');
        });

        it('should return the letter A with rotation of 1', function() {
            expect(caesarCipher('Z', 1)).toEqual('A');
        });

        it('should return encrypted sentence with rotation of 13', function(){
            expect(caesarCipher('Why did the chicken cross the road?', 13)).toEqual('Jul qvq gur puvpxra pebff gur ebnq?');
        });
    });

    describe('alternative alphabets', function() {
        var alphabetShort;

        beforeEach(function(){
            alphabetShort = 'abcdef';
        });

        it('should return the letter a with rotation of 2', function() {
            expect(caesarCipher('e', 2, [alphabetShort])).toEqual('a');
        });

        it('should return encrypted sentence with rotation of 2', function() {
            expect(caesarCipher('Why did the chicken cross the road?', 2, [alphabetShort])).toEqual('Why fif tha ehiekan eross tha rocf?');
        });
    });

    describe('decoding', function() {
        it('should return the letter v with rotation of -5', function() {
            expect(caesarCipher('a', -5)).toEqual('v');
        });

        it('should return the letter A with rotation of -2', function() {
            expect(caesarCipher('C', -2)).toEqual('A');
        });

        it('should return decrypted sentence with default parameters', function(){
            expect(caesarCipher('Jul qvq gur puvpxra pebff gur ebnq?', -13)).toEqual('Why did the chicken cross the road?');
        });
    });
});