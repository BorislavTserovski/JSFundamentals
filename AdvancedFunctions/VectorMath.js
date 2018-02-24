function solution(vectors) {
    let vectorProccessor = (function () {
        return {
            add: (arrOne, arrTwo) => {
                let firstVector = arrOne.reduce((a, b) => a + b)
                let secondVector = arrTwo.reduce((a, b) => a + b)
                return [firstVector, secondVector]
            }
        }

    })
}





