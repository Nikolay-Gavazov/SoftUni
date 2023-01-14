let input = [
'1 2 3 4 3 1 9 4 5 6 7'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(" ").map(Number);

let maxLengthSequence = 1;
let maxSequenceIndex = -1;

for (let i = 0; i < arr.length - 1 ; i++) {

    let currentElement = arr[i];
    let currentSequenceLength = 1;

    for ( let j = i + 1; j < arr.length; j++) {
        let nextElement = arr[j];
        if(nextElement > currentElement){
            currentSequenceLength++;
        } else {
            break;
        }

        currentElement = nextElement;
    }

    if (currentSequenceLength >= maxLengthSequence) {
        maxLengthSequence = currentSequenceLength;
        maxSequenceIndex = i;
    }
}

let output = arr.slice(maxSequenceIndex, maxSequenceIndex + maxLengthSequence);

print(output.join(" "));