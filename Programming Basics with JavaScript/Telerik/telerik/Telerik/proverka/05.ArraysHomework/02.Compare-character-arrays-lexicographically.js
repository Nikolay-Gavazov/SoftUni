let input = [
    'telerik',
    'telerik'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstArr = gets().split('');
let secondArr = gets().split('');

let areEqual = true;

if (firstArr.length > secondArr.length) {
    print(`Second`);

} else if ( firstArr.length < secondArr.length) {
    print(`First`);

} else {

    for (let i = 0; i <= firstArr.length; i++) {

        if (firstArr[i] !== secondArr[i]) {
            areEqual = false;
            let firstArrElementCode = firstArr[i].charCodeAt(0);
            let secondArrElementCode = secondArr[i].charCodeAt(0);

            if (firstArrElementCode > secondArrElementCode) {
                print(`Second`);
            } else {
                print(`First`);
            }
            break;
        }
    }
    
    areEqual ? print(`Equal`) : "";
}