'use strict';

describe('vigenereCipher', function () {
    var vigenereCipherFilter;

    beforeEach(module('zsoltiii.angular-cipher-filters'));

    beforeEach(inject(function ($filter) {
        vigenereCipherFilter = $filter('vigenereCipher');
    }));

    it('should return the letter c', function() {
        expect(vigenereCipherFilter('a', 'caesar')).toEqual('c');
    });

    it('should return encrypted string', function(){
        expect(vigenereCipherFilter('did', 'caesar')).toEqual('fih');
    });

    it('should return encrypted sentence', function(){
        expect(vigenereCipherFilter('Why did the chicken cross the road?', 'caesar')).toEqual('Yhc viu vhi uhzekif ciqsw lhv toev?');
    });

    describe('decoding', function() {
        it('should return the letter a', function() {
            expect(vigenereCipherFilter('c', 'caesar', true)).toEqual('a');
        });

        it('should return decrypted sentence', function(){
            expect(vigenereCipherFilter('Yhc viu vhi uhzekif ciqsw lhv toev?', 'Caesar', true)).toEqual('Why did the chicken cross the road?');
        });
    });
});