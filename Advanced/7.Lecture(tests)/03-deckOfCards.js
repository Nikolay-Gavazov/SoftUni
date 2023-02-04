function printDeckOfCards(arr) {

    function playingCards(face, suit) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

        const cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }


        if (!cardFaces.includes(face) || !cardSuits.hasOwnProperty(suit)) {
            return `Invalid card: ${face}${suit}`
        }

        return `${face}${cardSuits[suit]}`
    }

    let result = []
    arr.forEach(el => {
        const suit = el.split('').splice(el.length - 1).join('');
        const face = el.split('').splice(0, el.length - 1).join('');
        let res = playingCards(face, suit)
        if (res.includes('Invalid')) {
            console.log(res);
            result = '';
            return
        }
        result.push(res);

    });
    console.log(result);

}
printDeckOfCards(['AS', '10D', 'KH', '1C'])