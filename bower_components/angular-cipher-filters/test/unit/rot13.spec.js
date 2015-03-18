'use strict';

describe('rot13', function () {
    var rot13Filter;

    beforeEach(module('zsoltiii.angular-cipher-filters'));

    beforeEach(inject(function ($filter) {
        rot13Filter = $filter('rot13');
    }));

    it('should return encrypted letter', function() {
        expect(rot13Filter('a')).toEqual('n');
    });

    it('should return encrypted sentence', function(){
        expect(rot13Filter('Why did the chicken cross the road?')).toEqual('Jul qvq gur puvpxra pebff gur ebnq?');
    });

    describe('decoding', function() {
        it('should return decrypted letter', function() {
            expect(rot13Filter('n', true)).toEqual('a');
        });

        it('should return decrypted sentence', function(){
            expect(rot13Filter('Jul qvq gur puvpxra pebff gur ebnq?', true)).toEqual('Why did the chicken cross the road?');
        });
    });
});