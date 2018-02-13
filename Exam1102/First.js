function solve(array) {
    let money = 0
    let bitCoins = 0
    let day = -1

    for (var i = 1; i <= array.length; i++) {
        if (i % 3 !== 0) {
            money += Number(array[i - 1] * 67.51)
        } else {
            money += Number((array[i - 1] * 67.51) * 0.7)
        }
        while(money >= 11949.16){
            money -= 11949.16
            bitCoins ++
            if(day=== -1){
                day = i
            }
        }

    }
    console.log(`Bought bitcoins: ${bitCoins}`)
    if(day!==-1){
        console.log(`Day of the first purchased bitcoin: ${day}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

solve([100, 200, 300])