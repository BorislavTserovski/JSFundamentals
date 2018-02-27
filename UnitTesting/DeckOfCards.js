function solve(arr) {
    let cards = []
    for (let card of arr) {
        let face = ''
        if (card.length === 3) {
            face = '10'
        } else {
            face = card[0]
        }
        let suit = card[card.length - 1]

        try {
            let cardToPush = createACard(face, suit)
            cards.push(cardToPush)
        }
        catch (ex) {
            console.log(`Invalid card: ${card}`)
            return
        }


    }

    console.log(cards.join(' '))

    function createACard(face, suit) {
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
}

solve(['AS', '10D', 'KH', '2C'])