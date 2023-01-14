let colors = ['spades', 'hearts', 'clubs', 'diamonds'];
let cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
// let cards = [2,3,4,5,6,7,8,9,10,11,12,13,14];


for(let i = 0; i<cards.length; i++) {
    let row = '';
    for(let j = 0; j<colors.length; j++) {
        row += cards[i] + ' of ' + colors[j] + ', ';
        // console.log(cards[i] + ' of ' + colors[j]);
    }
    console.log(row);
}