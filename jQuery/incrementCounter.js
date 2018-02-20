function increment(containerId) {
    let container = $(`${containerId}`)
    let fragment = document.createDocumentFragment()
    let textArea = $('<textArea>')
    let buttonToIncrement = $('<button>Increment</button>')
    let buttonToAdd = $('<button>Add</button>')
    let list = $('<ul>')

    textArea.val(0)
    textArea.addClass('counter')
    textArea.attr('disabled', true)

    buttonToIncrement.addClass('btn')
    buttonToIncrement.attr('id', 'incrementBtn')

    buttonToAdd.addClass('btn')
    buttonToAdd.attr('id', 'addBtn')

    list.addClass('results')

    $(buttonToIncrement).on('click', function(){
        textArea.val(Number(textArea.val()) + 1)
    })

    $(buttonToAdd).on('click', function(){
        let li = $(`<li>${textArea.val()}</li>`)
        li.appendTo(list)
    })

    textArea.appendTo(fragment)
    buttonToIncrement.appendTo(fragment)
    buttonToAdd.appendTo(fragment)
    list.appendTo(fragment)

    container.append(fragment)

}
