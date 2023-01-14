let input = [11];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let dayOfWeek = gets();

switch (true) {
    case dayOfWeek === 1:
        print('monday'); break;
    case dayOfWeek === 2:
        print('tuesday'); break;
    case dayOfWeek === 3:
        print('wednesday'); break;
    case dayOfWeek === 4:
        print('thursday'); break;
    case dayOfWeek === 5:
        print('friday'); break;
    case dayOfWeek === 6:
        print('saturday'); break;
    case dayOfWeek === 7:
        print('sunday'); break;
    default:
        print('not a day of week')
}