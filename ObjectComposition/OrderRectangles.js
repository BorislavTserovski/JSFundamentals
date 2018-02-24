function solve(rectangles) {
    function createRect(w, h) {
        let rectangle = {
            width: w,
            height: h,
            area: function () {
                return this.width * this.height
            },
            compareTo: function (other) {
                let result = other.area() - rectangle.area()
                return result || (other.width) - (rectangle.width)
            }
        }

        return rectangle
    }

    let result = []

    for (let [width, height]of rectangles) {
        let rect = createRect(width, height)
        result.push(rect)
    }

    result.sort((a, b) => a.compareTo(b))
    return result
}

solve([[10,5], [3,20], [5,12]])