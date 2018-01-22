function templateFormat(questions) {
    let result = ''

    result += '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n'

    for (let i = 0; i < questions.length; i += 2) {
        let question = questions[i]
        let answer = questions[i + 1]
        result += '<question>\n' +
            `   ${question} \n` +
            '  </question>\n' +
            '  <answer>\n' +
            `    ${answer}\n` +
            '  </answer>\n'
    }

    result += '</quiz>'

    console.log(result)


}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
)