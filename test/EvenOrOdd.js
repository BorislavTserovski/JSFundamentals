function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect

describe('check odd or even', function(){
    it('should return even for 6 letters', function(){
        expect(isOddOrEven('helloo')).to.be.equal('even')
    })
    it('should return odd for 5 letters', function(){
        expect(isOddOrEven('hello')).to.be.equal('odd')
    })
    it('should return undefined for non-string', function(){
        expect(isOddOrEven([2, 4])).to.be.equal(undefined)
    })
    it('should return undefined for object', function(){
        expect(isOddOrEven({name: 'pesho'})).to.be.equal(undefined)
    })
    it('should return even for empty', function(){
        expect(isOddOrEven('')).to.be.equal('even')
    })



})
