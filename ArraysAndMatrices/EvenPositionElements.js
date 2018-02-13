function evenPositionElements(numbers) {
    let result = []
    numbers.forEach((num, i) => {
        if (i % 2 === 0) {
            result.push(num)
        }
    })

    console.log(result.join(' '))
}

evenPositionElements(['20', '30', '40'])