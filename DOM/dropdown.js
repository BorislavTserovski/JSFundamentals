function addItem() {
    let newItemText = document.getElementById('newItemText').value
    let newItemValue = document.getElementById('newItemValue').value
    let option = document.createElement('option')
    option.textContent = newItemText
    option.value = newItemValue
    let select = document.getElementById('menu')
    select.appendChild(option)
   document.getElementById('newItemText').value = ''
   document.getElementById('newItemValue').value = ''

}
