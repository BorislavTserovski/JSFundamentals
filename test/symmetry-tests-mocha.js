function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal =
        (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect


describe('check symmetry', function(){
    it('should return false for non-array', function(){
        expect(isSymmetric(1, 2, 3)).to.be.equal(false)
    })
    it('should return false for non-symmetric', function(){
        expect(isSymmetric([1, 1, -1, 1])).to.be.equal(false)
    })
    it('should return true for symmetric', function(){
        expect(isSymmetric([2,2,3,2,2])).to.be.equal(true)
    })
    it('should return false for string', function(){
        expect(isSymmetric('22322')).to.be.equal(false)
    })
    it('should work with floating-point numbers', function(){
        expect(isSymmetric([2.3, 3.4, 5.1, 3.4, 2.3])).to.be.equal(true)
    })
    it('should return true for one element', function(){
        expect(isSymmetric([2])).to.be.equal(true)
    })
    it('should work for objects', function(){
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5] )).to.be.equal(false)
    })
    it('should work for objects - true case', function(){
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]  )).to.be.equal(true)
    })

})