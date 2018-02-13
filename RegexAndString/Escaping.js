function escaping(array) {
    let result = '<ul>\n'
    for (let item of array){
        result += ' <li>'
        item = item.replace(/>/g, '&gt;')
        item = item.replace(/</g, '&lt;')
        item = item.replace(/&/g, '&amp;')
        item = item.replace(/"/g, '&quot;')

        result += item
        result += '</li>'
        result += '\n'
    }
    result += '</ul>'

    return result
}

console.log(escaping(["<b>unescaped text</b>", 'normal text']))