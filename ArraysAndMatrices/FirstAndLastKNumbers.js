function firstAndLastKNumbers(numbers) {
    let k = Number(numbers[0])
    console.log(numbers.slice(1, k + 1).join(' '))
    console.log(numbers.slice(numbers.length - 1 - k + 1, k + 2).join(' '))
}

firstAndLastKNumbers([2,
    7, 8, 9]
)