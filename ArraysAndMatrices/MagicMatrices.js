function magicMatrices(matrix) {
    let sum = 0
    matrix[0].forEach(n => {
        sum += n
    })
    for (let i = 0; i <= matrix.length - 1; i++) {
        let current = 0
        matrix[i].forEach(n => {
            current += n
        })
        if (sum !== current) {
            return false
        }
    }
    let colSum = 0
    for (let row = 0; row <= matrix.length - 1; row++) {
        for (let col = 0; col <= matrix.length - 1; col++) {
             colSum+=matrix[row][col]
        }
        if(colSum!==sum){
            return false
        }
        colSum = 0
    }

    return true
}

console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))