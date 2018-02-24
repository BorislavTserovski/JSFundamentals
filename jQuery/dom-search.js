function domSearch(container, isCaseSensitive) {
    let mainContainer = $(`${container}`);
    mainContainer.addClass('items-control');

    //Adding div
    let addDiv = $('<div></div>');
    addDiv.addClass('add-controls');
    addDiv.append($('<label>Enter text: </label>'));
    let textArea = $('<input id="addText" type="text" >');
    let addButton = $('<a href="#" style="display: inline-block">Add</a>');
    addButton.addClass('button');
    addDiv.append(textArea);
    addDiv.append(addButton);

    //Searching div

    let searchDiv = $('<div class="search-controls"></div>');
    searchDiv.append($('<label>Search:</label>'));
    searchDiv.append($('<input id="searchText" type="text">').on('input', function(){
        if(isCaseSensitive){
            $('li:contains(' + $('#searchText').val() + ')').css('display', '')

        }else{
            $('li').each((i, li) => {
                if ($(li).text().toLowerCase().indexOf($('#searchText').val().toLowerCase()) > 0) {
                    $(li).css('display', '')
                }

          })

        }
    }));



    //Results div
    let resultsDiv = $('<div class="result-controls"></div>');
    let ul = $('<ul class="items-list"></ul>');
    resultsDiv.append(ul);

    addButton.on('click', function () {
        let itemValue = $('#addText').val();
        let li = $(`<li ><a a class="button" href="#">X</a>
        <strong>${itemValue}</strong></li>`);
        li.addClass('list-item');
        ul.append(li);
        $('#addText').val('');

        li.on('click', function () {
            $(this).remove()
        })

    });





    mainContainer.append(addDiv);
    mainContainer.append(searchDiv);
    mainContainer.append(resultsDiv)


}
