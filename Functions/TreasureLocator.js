function treasureLocator(coordinates) {
    let result = ''
    for (let i = 0; i < coordinates.length; i += 2) {
        let x = coordinates[i]
        let y = coordinates[i + 1]
        if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            result = 'Tokelau'
        } else if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            result = 'Tuvalu'
        } else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            result = 'Samoa'
        } else if (x >= 0 && x <= 2 && y >= 6 && y <= 8){
            result = 'Tonga'
        }else if(x>=4&&x<=9&&y>=7&&y<=8){
            result = 'Cook'
        }else{
            result = 'On the bottom of the ocean'
        }

        console.log(result)

            }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3])