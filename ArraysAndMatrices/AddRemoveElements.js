function addRemoveElements(array) {
    let result = []

    for (let i = 1; i <= array.length; i++) {
        switch (array[i - 1].toLowerCase()) {
            case 'add' :
                result.push(i)
                break;
            case 'remove' :
                result.pop()
                break;
        }
    }
    if (result.length === 0) {
        console.log('Empty')
    } else {
        console.log(result.join('\n'))
    }

}

addRemoveElements(['remove', 'remove', 'remove',])