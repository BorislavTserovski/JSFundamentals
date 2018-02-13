function extractSequence(array) {
    let result = []
    let max = Number(array[0])
    result.push(max)
    for(let i = 1; i <= array.length - 1; i++){
        if(Number(array[i]) >= max){
            max = array[i]
            result.push(max)
        }
    }

    console.log(result.join('\n'))

}

extractSequence(['1',
    '3',
    '8',
    '4',
    '10',
    '12',
    '3',
    '2',
    '24',
])