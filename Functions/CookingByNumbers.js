function cookingByNumbers(args) {
    let number = Number(args[0])

    for (let i = 1; i < args.length; i++) {
        let command = args[i]
        switch (command.toLowerCase()) {
            case 'chop' :
                number /= 2
                console.log(number)
                break
            case 'dice':
                number = Math.sqrt(number)
                console.log(number)
                break
            case 'spice':
                number++
                console.log(number)
                break
            case 'bake':
                number *= 3
                console.log(number)
                break
            case 'fillet':
                number *= 0.8
                console.log(number)
                break
        }
    }

}

cookingByNumbers([9, 'chop'])