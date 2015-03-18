'use strict';

describe('rot1', function () {
    var rot1Filter;

    beforeEach(module('zsoltiii.angular-cipher-filters'));

    beforeEach(inject(function ($filter) {
        rot1Filter = $filter('rot1');
    }));

    it('should return encrypted letter', function() {
        expect(rot1Filter('a')).toEqual('b');
    });

    it('should return encrypted sentence', function(){
        expect(rot1Filter('Why did the chicken cross the road?')).toEqual('Xiz eje uif dijdlfo dsptt uif spbe?');
    });

    describe('decoding', function() {
        it('should return decrypted letter', function() {
            expect(rot1Filter('n', true)).toEqual('m');
        });

        it('should return decrypted sentence', function(){
            expect(rot1Filter('Xiz eje uif dijdlfo dsptt uif spbe?', true)).toEqual('Why did the chicken cross the road?');
        });
    });
});