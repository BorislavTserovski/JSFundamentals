function matchAllWords(text) {
    let regex = /\w+/g
    let m
    let result = []
    while ((m = regex.exec(text)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        result.push(m)
    }

    return result.join('|')
}

console.log(matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'))