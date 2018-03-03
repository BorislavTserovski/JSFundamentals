let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect

describe('math enforcer', function(){
    it('should return 5 for add 5 to 0', function(){
        expect(mathEnforcer.addFive(0)).to.be.equal(5)
    })
    it('should return -8 for subtract 10 from 2', function(){
        expect(mathEnforcer.subtractTen(2)).to.be.equal(-8)
    })
    it('should return 10 for sum -10 and 20', function(){
        expect(mathEnforcer.sum(-10, 20)).to.be.equal(10)
    })
    it('should return close to 10.45 for sum 4 and 6.45', function(){
        expect(mathEnforcer.sum(4, 6.45)).to.be.equal(10.45)
    })
    it('should return 3.5 for add 5 to -1.5', function(){
        expect(mathEnforcer.addFive(-1.5)).to.be.equal(3.5)
    })
    it('should return undefined for add 5 to non-number', function(){
        expect(mathEnforcer.addFive('judge')).to.be.equal(undefined)
    })
    it('should return undefined for sub 10 to non-number', function(){
        expect(mathEnforcer.subtractTen('judge')).to.be.equal(undefined)
    })
    it('should return undefined for sum 5 to a non-number', function(){
        expect(mathEnforcer.sum(5, 'judge')).to.be.equal(undefined)
    })
    it('should return undefined for sum non-number to a non-number', function(){
        expect(mathEnforcer.sum('hello', 'judge')).to.be.equal(undefined)
    })
    it('should return undefined for sum non-number to 7', function(){
        expect(mathEnforcer.sum('hello', 7)).to.be.equal(undefined)
    })
    it('should return -20 for sub 10 from -10', function(){
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
    })
    it('should return undefined for sum objects', function(){
        expect(mathEnforcer.sum({value:4}, 7)).to.be.equal(undefined)
    })
    it('should return -45 for sum -15 and -30', function(){
        expect(mathEnforcer.sum(-15, -30)).to.be.equal(-45)
    })
    it('should return undefined for sum array', function(){
        expect(mathEnforcer.sum([3, 4])).to.be.equal(undefined)
    })
    it('should return undefined for sum only one parameter', function(){
        expect(mathEnforcer.sum(2)).to.be.equal(undefined)
    })
    it('should return undefined for sum with no params', function(){
        expect(mathEnforcer.sum()).to.be.equal(undefined)
    })

    it('should return -45.45 for sum -15 and -30.45', function(){
        expect(mathEnforcer.sum(-15.34, -30.45)).to.be.closeTo(-45.79, 0.01)
    })
    it('should return -45.45 for sum -15 and -30.45', function(){
        expect(mathEnforcer.sum(-15.34, -30)).to.be.closeTo(-45.34, 0.01)
    })
    it('should return -45.45 for sum -15 and -30.45', function(){
        expect(mathEnforcer.sum(15.34, 30.5)).to.be.closeTo(45.84, 0.01)
    })
    it('should return undefined for sub 10 from array', function(){
        expect(mathEnforcer.subtractTen([10])).to.be.equal(undefined)
    })
    it('should return 9.87 for add 5 to floating 4.87', function(){
        expect(mathEnforcer.addFive(4.87)).to.be.closeTo(9.87, 0.01)
    })
    it('should return 2 for sub 10 from 12', function(){
        expect(mathEnforcer.subtractTen(12)).to.be.equal(2)
    })
})
