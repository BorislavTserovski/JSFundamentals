function printArrayWithDelimiter(array){
    let separator = array.pop()
    console.log(array.join(separator))
}

printArrayWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
])