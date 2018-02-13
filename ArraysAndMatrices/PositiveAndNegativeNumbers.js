function positiveAndNegativeNumbers(numbers) {
    let result = []
    numbers.forEach(number => {
        if(number >= 0){
            result.push(number)
        }else{
            result.unshift(number)
        }
    })

    console.log(result.join('\n'))
}

positiveAndNegativeNumbers([7, -2, 8, 9])