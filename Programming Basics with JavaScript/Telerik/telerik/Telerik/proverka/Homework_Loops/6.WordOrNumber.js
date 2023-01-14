// Input.
let input = [
    'good',

];


// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// Solution

let text = gets();
let text1 = parseInt(text);
let isNaNed = isNaN(text1);



switch (isNaNed) {

    case false:
        print(text1 + 1);
        break;

    case true:
        let first = text.substring(0, 1);
        let second = text.substring(1);

        print(second + first);
        break;

}
