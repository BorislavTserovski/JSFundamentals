function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect

describe('find char', function(){
    it('should return b for bobby 3', function(){
        expect(lookupChar('Bobby', 3)).to.be.equal('b')
    })
    it('should return undefined for non-string', function(){
        expect(lookupChar(456, 3)).to.be.equal(undefined)
    })
    it('should return undefined for non-number', function(){
        expect(lookupChar('softuni', 'third')).to.be.equal(undefined)
    })
    it('should return incorrect index  for negative', function(){
        expect(lookupChar('softuni', -2)).to.be.equal('Incorrect index')
    })
    it('should return incorrect index  for bigger index than string length', function(){
        expect(lookupChar('softuni', 7)).to.be.equal('Incorrect index')
    })
    it('should return incorrect index  for bigger index than string length', function(){
        expect(lookupChar('softuni', 8)).to.be.equal('Incorrect index')
    })
    it('should return undefined for floating point number', function(){
        expect(lookupChar('softuni', 3.54)).to.be.equal(undefined)
    })



})
