function solve(face, suit) {
    let validFaces = ['A', 'J', 'K', 'Q', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    let validSuites = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if (validFaces.indexOf(face) < 0) {
        throw new Error('Invalid card face!')
    }
    if (!validSuites.hasOwnProperty(suit)) {
        throw new Error('Invalid card suit!')
    }

    let card = {
        face: face,
        suit: suit,

        toString: function () {
            return this.face + validSuites[this.suit]
        }
    }

    return card.toString()
}

console.log(solve('A', 'S'))