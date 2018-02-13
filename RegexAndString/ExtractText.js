function extractText(text) {
   let start = text.indexOf('(')
    let result = []
    while (start > -1){
       let end = text.indexOf(')', start)
        if(end===-1){
           break
        }
        let word = text.substring(start + 1, end)
        result.push(word)
     start = text.indexOf('(', end)
    }

    return result.join(', ')
}