function solve(worker) {
    if (worker.handsShaking === true) {
        worker.bloodAlcoholLevel += (worker.weight * worker.experience * 0.1)
        worker.handsShaking = false
        return worker
    } else {
        return worker
    }
}

console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }

))