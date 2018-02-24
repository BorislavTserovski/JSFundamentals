function solve(arr) {

    let processor = (function () {
        let result = []
        return {
            add: (word) => {result.push(word)},
            remove: (word) => {
                result = result.filter(w => w!== word)
            },
            print: () => {
                console.log(result.join(','))
            }
        }
    })()

    for(let word of arr){
        let tokens = word.split(' ')
        let command = tokens[0]
        if(command==='print'){
            processor.print()
        }else if(command==='add'){
            let w = tokens[1]
            processor.add(w)
        }else if(command==='remove'){
            let w = tokens[1]
            processor.remove(w)
        }


    }
}

solve(['add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print'])