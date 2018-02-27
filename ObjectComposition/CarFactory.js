function solve(car) {
    let result = {
        model: car.model,
        engine: {},
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels: [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    }
    if (car.power >= 0 && car.power <= 90) {
        result.engine.power = 90
        result.engine.volume = 1800
    } else if (car.power > 90 && car.power <= 120) {
        result.engine.power = 120
        result.engine.volume = 2400
    } else if (car.power > 120 && car.power <= 200) {
        result.engine.power = 200
        result.engine.volume = 3500
    }

    if (car.wheelsize % 2 === 0){
        result.wheels = [car.wheelsize - 1, car.wheelsize - 1, car.wheelsize - 1, car.wheelsize - 1]
    }

        return result
}

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
))