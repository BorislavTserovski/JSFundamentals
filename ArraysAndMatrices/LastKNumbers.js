function lastKNumbers(n, k) {

    let result = [1]

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k)
        let end = i - 1
        let sum = 0
        for (let j = start; j <= end; j++) {
            sum += result[j]
        }


        result.push(sum)
    }

    console.log(result.join('\n'))
}

lastKNumbers(6, 3)