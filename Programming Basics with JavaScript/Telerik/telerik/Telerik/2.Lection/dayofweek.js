let input = ['fridaYy'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let dayOfWeek = gets().toLowerCase();

switch (true) {
    case dayOfWeek === 'monday':
        print(1); break;
    case dayOfWeek === 'tuesday':
        print(2); break;
    case dayOfWeek === 'wednesday':
        print(3); break;
    case dayOfWeek === 'thursday':
        print(4); break;
    case dayOfWeek === 'friday':
        print(5); break;
    case dayOfWeek === 'saturday':
        print(6); break;
    case dayOfWeek === 'sunday':
        print(7); break;
    default:
    print('not a day of week');

}