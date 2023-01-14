let inputArray = ['2,1,1,2,3,3,2,2,2,1'];

let sequence = -1;
let maxSequence = -1;

for (i = 0; i < inputArray.length - 1; i++) {
	if (inputArray[i] === inputArray[i + 1]) {
		sequence++;
	} else {
		sequence = 1;
	}
	
	if (sequence > maxSequence) {
		maxSequence = sequence;
	}	
}	

console.log(maxSequence);