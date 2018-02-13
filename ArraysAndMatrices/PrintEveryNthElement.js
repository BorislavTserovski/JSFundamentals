function printEveryNthElement(array) {
    let step = Number(array.pop())
    for (let i = 0; i <= array.length - 1; i++) {
        if (i % step === 0) {
            console.log(array[i])
        }
    }
}

printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
])