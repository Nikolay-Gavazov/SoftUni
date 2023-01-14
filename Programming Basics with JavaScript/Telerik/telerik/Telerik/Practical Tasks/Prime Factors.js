let input = ['80'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
while (n > 1) {
    if (n % 2 === 0) {
        n /= 2;
        print('2');
        continue;
    }
    if (n % 3 === 0) {
        n /= 3;
        print('3');
        continue;
    }
    if (n % 5 === 0) {
        n /= 5;
        print('5');
        continue;
    }
    if (n % 7 === 0) {
        n /= 7;
        print('7');
        continue;
    }
    if (n % 11 === 0) {
        n /= 11;
        print('11');
        continue;
    }
    if (n % 13 === 0) {
        n /= 13;
        print('13');
        continue;
    }
    if (n % 17 === 0) {
        n /= 17;
        print('17');
        continue;
    }
    if (n % 19 === 0) {
        n /= 19;
        print('19');
    }
    if (n % 23 === 0){
        n /= 23;
        print('23');
        continue;
    }
    else {
        break;
    }
}