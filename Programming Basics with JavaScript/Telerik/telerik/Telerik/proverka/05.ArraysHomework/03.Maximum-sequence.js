let input = [
    '2 1 1 2 3 3 2 2 2 2 1'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(' ').map(Number);
let maxSequenceLength = 1;

for (let i = 0; i < arr.length; i++) {

    let currentElement = arr[i];
    let currentSequenceLength = 1;
    
    for( let j = i + 1; j < arr.length; j++) {

        let nextElement = arr[j];
        
        if(nextElement === currentElement) {
            currentSequenceLength++;
        } else {
            break;
        }

        if (currentSequenceLength > maxSequenceLength) {
            maxSequenceLength = currentSequenceLength;
        }
    }
}
    print(maxSequenceLength);