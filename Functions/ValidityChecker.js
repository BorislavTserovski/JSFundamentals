function validityChecker([x1, y1, x2, y2]) {
    console.log(getDistance(x1, y1, 0, 0)?`{${x1}, ${y1}} to {0, 0} is valid`: `{${x1}, ${y1}} to {0, 0} is invalid`)
    console.log(getDistance(x2, y2, 0, 0)?`{${x2}, ${y2}} to {0, 0} is valid`: `{${x2}, ${y2}} to {0, 0} is invalid`)
    console.log(getDistance(x1, y1, x2, y2)?`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`: `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)


    function getDistance(x1, y1, x2, y2) {
        if (Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))) {
            return true
        }

        return false
    }
}

validityChecker([2, 1, 1, 1])