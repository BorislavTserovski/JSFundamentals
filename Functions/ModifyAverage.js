function modifyAverage(number) {
    let numToString = number.toString()
    let sum = calculate(numToString)

    while (sum <= 5) {
        numToString += '9'
        sum = calculate(numToString)
    }

    console.log(numToString)

    function calculate(number) {
        let sum = 0

        for (let digit of number) {
            sum += Number(digit)
        }

        return sum / number.length
    }
}

modifyAverage(101)