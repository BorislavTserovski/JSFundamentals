function proccessOddNumbers(numbers) {
    console.log(numbers.filter((num, index) => index % 2 !== 0).map(num => num * 2).reverse().join(' '))
}

proccessOddNumbers([10, 15, 20, 25])