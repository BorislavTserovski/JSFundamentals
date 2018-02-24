function sortArray(array, sortMethod) {
    let sortDesc =  function(a, b) {
       return  b - a
    }

    let sortAsc = function (a,b) {
       return  a - b
    }

    let sortingMethods = {
        'asc' : sortAsc,
        'desc': sortDesc
    }

    return array.sort(sortingMethods[sortMethod])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))