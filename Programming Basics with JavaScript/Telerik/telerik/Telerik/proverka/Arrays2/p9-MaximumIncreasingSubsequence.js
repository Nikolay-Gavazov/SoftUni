let input = [
    [1,2,3,4,3,1,9,4,5,6,11]
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

var array = gets();

var maxSequence = 0;
var sequence = 1;
var sequenceNumbers = "";
var maxSequenceNumbers = "";

for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
        sequence++;
        sequenceNumbers += array[i] + " ";
    }

    else {
        if (maxSequence < sequence) {
            maxSequence = sequence;
            sequenceNumbers += array[i] + " ";
            maxSequenceNumbers = sequenceNumbers;
        }
        sequence = 1;
        sequenceNumbers = "";
    }
}

if (maxSequence < sequence) {
    sequenceNumbers += array[array.length - 1];
    maxSequenceNumbers = sequenceNumbers;
}

console.log(maxSequenceNumbers);