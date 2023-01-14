let input = ['5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let HY = +gets();

if (HY === 1) {
    print(10);
} else if (HY === 2) {
    print(20);
} else if (HY === 3) {
    print(24);
} else if (HY === 4) {
    print(28);
} else if (HY === 5) {
    print(32);
} else if (HY === 6) {
    print(36);
} else if (HY === 7) {
    print(40);
} else if (HY === 8) {
    print(44);
} else if (HY === 9) {
    print(48);
} else if (HY === 10) {
    print(52);
} else if (HY === 11) {
    print(56);
} else if (HY === 12) {
    print(60);
} else if (HY === 13) {
    print(64);
} else if (HY === 14) {
    print(68);
} else if (HY === 15) {
    print(72);
}