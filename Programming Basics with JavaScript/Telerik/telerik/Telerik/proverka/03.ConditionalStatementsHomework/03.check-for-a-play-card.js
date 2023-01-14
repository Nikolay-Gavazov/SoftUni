let input = [
    '7',
 ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let card = gets();

if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6 || card == 7 ||
    card == 8 || card == 9 || card == 10 || card === 'J' || card === 'Q' || card == 'K' || card == 'A') {
        print('yes');
    } else {
        print('no');
    }


