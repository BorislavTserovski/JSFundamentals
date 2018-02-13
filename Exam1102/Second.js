function solve(matrix, commands) {


    matrix = matrix.map(r=>r.split(' ').filter(c=>c!==' ').map(Number))



    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(' ')
        let force = tokens[0]
        let num = Number(tokens[1])
        switch (force.toLowerCase()) {
            case 'breeze':
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        if (row === num) {
                            matrix[row][col]-= 15
                            if (matrix[row][col] < 0) {
                                matrix[row][col] = 0
                            }
                        }

                    }
                }
                break;
            case 'gale':
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        if (col === num) {
                            matrix[row][col] -= 20
                            if (matrix[row][col] < 0) {
                                matrix[row][col] = 0
                            }
                        }

                    }
                }
                break;
            case 'smog':
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        matrix[row][col]  += num
                    }
                }
                break;

        }


    }

    let areasArray = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(Number(matrix[row][col]) >= 50){
              areasArray.push(`[${row}-${col}]`)
            }
        }
    }

    if(areasArray.length===0){
        console.log('No polluted areas')
    }else{
        console.log(`Polluted areas: ${areasArray.join(', ')}`)
    }


}

solve([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]

)