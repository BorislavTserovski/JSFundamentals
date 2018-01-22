function insideVolume(numbers) {
    let x1 = 10
    let x2 = 50
    let y1 = 20
    let y2 = 80
    let z1 = 15
    let z2 = 50
    for (let i = 0; i < numbers.length; i += 3) {
        let x = numbers[i]
        let y = numbers[i + 1]
        let z = numbers[i + 2]

        if (x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2){
            console.log('inside')
        }else{
            console.log('outside')
        }

            }
}

insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
)