function extract(element) {
    let result = []
    let text = document.getElementById(element).textContent
    let pattern = /\(([^)]+)\)/g
    let match = pattern.exec(text)

    while (match){
        result.push(match[1])
        match = pattern.exec(text)
    }

    return result.join(';')
}