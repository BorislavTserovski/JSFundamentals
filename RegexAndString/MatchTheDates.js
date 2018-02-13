function matchTheDates(text) {
    let result = []
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g
    let m

    while ((m = regex.exec(text))!==null){
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        result.push(m)
    }

   for(let date of result){
        let tokens = date.toString().split(',')
       console.log(`${tokens[0]} (Day: ${tokens[1]}, Month: ${tokens[2]}, Year: ${tokens[3]})`)
   }
}

matchTheDates('1-Jan-1999 is a valid date.\n' +
    'So is 01-July-2000.\n' +
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.\n')