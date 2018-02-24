function result(name, age, weight, height) {
    let bmi = Math.round(weight / ((height / 100) * (height / 100)))
    let status = ''

    if (bmi >= 30) {
        status = 'obese'
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweight'
    } else if (bmi < 25 && bmi >= 18.5) {
        status = 'normal'
    } else if (bmi < 18.5) {
        status = 'underweight'
    }

    let chart = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    }

    if (bmi >= 30) {
        chart['recommendation'] = 'admission required'
    }

    return chart

}

