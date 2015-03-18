'use strict';

describe('scytale', function () {
    var scytaleFilter;

    beforeEach(module('zsoltiii.angular-cipher-filters'));

    beforeEach(inject(function ($filter) {
        scytaleFilter = $filter('scytaleCipher');
    }));

    it('should return encrypted letter', function() {
        expect(scytaleFilter('a', 4)).toEqual('A');
    });

    it('should return encrypted message with default values', function() {
        expect(scytaleFilter('Help me I am under attack')).toEqual('HELPMEIAMUNDERATTACK');
    });

    it('should return encrypted message', function() {
        expect(scytaleFilter('Help me I am under attack', 4)).toEqual('HENTEIDTLAEAPMRCMUAK');
    });

    describe('decoding', function() {
        it('should return encrypted message', function() {
            expect(scytaleFilter('HENTEIDTLAEAPMRCMUAK', 4, true)).toEqual('HELPMEIAMUNDERATTACK');
        });
    });
});