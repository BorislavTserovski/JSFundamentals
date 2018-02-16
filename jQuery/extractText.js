function extractText() {
    let result =  $("ul#items li")
        .toArray()
        .map(li => li.textContent)
        .join(", ");

    $('#result').text(result)
}


