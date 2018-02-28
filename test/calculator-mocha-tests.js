function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}



let expect = require('chai').expect

describe('check calculator', function(){
    let calc
    beforeEach(function(){
        calc = createCalculator()
    })
    it('should return 8 for add 5, add 3', function(){
        calc.add(3); calc.add(5); let value = calc.get();
        expect(value).to.be.equal(8)
    })
    it('should return -3 for add 5, subtract 8', function(){
        calc.add(5); calc.subtract(8); let value = calc.get();
        expect(value).to.be.equal(-3)
    })
    it('should return -3 for add 5, add -8', function(){
        calc.add(5); calc.add(-8); let value = calc.get();
        expect(value).to.be.equal(-3)
    })
    it('should return -3 for add 5 as string, add -8', function(){
        calc.add('5'); calc.add(-8); let value = calc.get();
        expect(value).to.be.equal(-3)
    })
    it('should return NaN for add string', function(){
        calc.add('Gosho'); let value = calc.get().toString();
        expect(value).to.be.equal('NaN')
    })
    it('should return NaN for subtract string', function(){
        calc.subtract('Gosho'); let value = calc.get().toString();
        expect(value).to.be.equal('NaN')
    })
    it('should work for non-integers', function(){
        calc.add(5.3); calc.subtract(1.1); let value = calc.get().toFixed(1);
        expect(value).to.be.equal('4.2')
    })
    it('should be 0 after create', function(){
         let value = calc.get();
        expect(value).to.be.equal(0)
    })
})