let input = ['June', '21'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let mouth = gets();
let day = +gets();
let date = Date(day, mouth, 00)


switch (mouth) {
    case 'January':
        if (day >= 1 && day <= 31)
        print('Winter'); break;
    case 'February':
        if (day >= 1 && day <= 29)
        print('Winter'); break;
    case 'March':
        if (day >= 1 && day <= 19){
        print('Winter');
        }else if (day >= 20 && day <= 31)
        print('Spring'); break;
    case 'April':
        if (day >= 1 && day <= 30)
        print('Spring'); break;
    case 'May':
        if (day >= 1 && day <= 31)
        print('Spring'); break;
    case 'June':
        if (day >= '1' && day <= '20') {
        print('Spring'); break;

        }else if (day >= 21);
        print('Summer'); break;
    case 'July':
        if (day >= 1 && day <= 31)
        print('Summer'); break;
    case 'August':
        if (day >=1 && day <= 31)
        print('Summer'); break;
    case 'September':
        if (day >= 1 && day <= 21){
        print('Summer'); break;
    } else if (day >= 22)
        print('Autumn'); break;
    case 'October':
        if (day >= 1 && day <= 31)
        print('Autumn'); break;
    case 'November':
        if (day >= 1 && day <= 30)
        print('Autumn'); break;
    case 'December':
        if (day >=1 && day <= 20) {
        print('Autumn'); break;
        }else if (day >=21 && day <=31)
        print('Winter'); break;

}