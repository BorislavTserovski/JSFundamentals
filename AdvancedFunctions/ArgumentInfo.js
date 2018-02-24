function solve() {
    let resultObject = {}
    let resultArr = []
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i]
        let type = typeof(obj)
        resultArr.push(`${type}: ${obj}`)
        if (!resultObject[type]) {
            resultObject[type] = 1
        } else {
            resultObject[type]++
        }
    }

    for (let item of resultArr) {
        console.log(item)
    }
    Object.keys(resultObject).sort((a, b) => resultObject[b] - resultObject[a]).forEach(k => console.log(`${k} = ${resultObject[k]}`))

}

solve('cat', 42, function () {
    console.log('Hello world!');
})