function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let expect = require('chai').expect

describe('check colors', function(){
    it('should return red for 255, 0, 0', function(){
        expect(rgbToHexColor(255, 0, 0)).to.be.equal('#FF0000')
    })
    it('should undefined for more than 255 red', function(){
        expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined)
    })
    it('should undefined for more than 255 green', function(){
        expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined)
    })
    it('should undefined for more than 255 blue', function(){
        expect(rgbToHexColor(0, 0, 256)).to.be.equal(undefined)
    })
    it('should undefined for less than 0 red', function(){
        expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined)
    })
    it('should undefined for less than 0 green', function(){
        expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined)
    })
    it('should undefined for less than 0 blue', function(){
        expect(rgbToHexColor(0, 0, -1)).to.be.equal(undefined)
    })
    it('should undefined for strings', function(){
        expect(rgbToHexColor('0', '0', '0')).to.be.equal(undefined)
    })
    it('should undefined for array', function(){
        expect(rgbToHexColor([1, 234, 32])).to.be.equal(undefined)
    })


})