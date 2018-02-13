function aggregateTable(array) {
    let splited = array.join('').split('|')
    let towns = []
    let sum = 0
    for (let i = 0; i < splited.length; i++) {
        if (i % 2 !== 0) {
            towns.push(splited[i].trim())
        } else {
            sum += Number(splited[i].trim())
        }

    }

    let result = towns.join(', ')
    console.log(result)
    console.log(sum)
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)