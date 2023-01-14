let input = '11:00 PM';

let HM = input.substring(0, 2);
let time = Number(HM);

let designator = input.substring(5);

switch (true) {
    case (designator === ' PM'):
        if (time <=11){
        console.log('beer time');
        break;
        }else
        console.log('non-beer time');
        break;
    case (designator === 'PM'):
        console.log('beer time');
        break;
        
    case (designator === ' AM'):
        if (time >= 0 && time < 3){
            console.log('beer time');
        break;
        }else
        console.log('non-beer time');
}






