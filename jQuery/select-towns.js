function attachEvents() {
    $('#items').on('click', 'li', function () {
        let town = $(this)
        if (town.attr('data-selected')) {
            town.removeAttr('data-selected')
            town.css('background', '')
        } else {
            town.attr('data-selected', 'true')
            town.css('background', '#DDD')
        }

    })
    $('#showTownsButton').on('click', function(){
        let selLi = $('#items li[data-selected=true]')
        let towns = selLi.toArray()
            .map(li => li.textContent).join(', ')
        $('#selectedTowns')
            .text("Selected towns: " + towns)

    })
}
