function theHungryProgrammer(products, commands) {
    let mealsCount = 0
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i]
        let tokens = currentCommand.split(' ')
        let command = tokens[0]
        switch (command.toLowerCase()) {
            case 'serve' :
                console.log(`${products.pop()} served!`)
                break;
            case 'eat' :
                mealsCount++
                console.log(`${products.shift()} eaten`)
                break;
            case 'add':
                products.unshift(tokens[1])
                break;
            case 'shift' :
                let first = Number(tokens[1])
                let second = Number(tokens[2])
                let temp = products[first]
                products[first] = products[second]
                products[second] = temp
                break;
            case'consume' :
                let startIndex = Number(tokens[1])
                let endIndex = Number(tokens[2])
                mealsCount += (endIndex - startIndex) + 1
                products.splice(startIndex, (endIndex - startIndex + 1))
                console.log('Burp!')
                break;
            case 'end' :
                break;
        }

    }

    if (products.length === 0) {
        console.log('The food is gone')
        console.log(`Meals eaten: ${mealsCount}`)
    } else {
        console.log(`Meals left: ${products.join()}`)
        console.log(`Meals eaten: ${mealsCount}`)
    }

}

theHungryProgrammer(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',]

)


