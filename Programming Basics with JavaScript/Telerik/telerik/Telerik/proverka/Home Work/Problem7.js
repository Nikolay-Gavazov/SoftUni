let inputArray = [2, 1, 3, 1, 2, 1];

let result = "Yes";
let current;
let previous;

for (i = 0; i < inputArray.length - 1; i++) {
	if (inputArray[i] < inputArray[i + 1]) {
		current = "less than";
	} else {
		current = "greater than";
	}
	
	if (i > 0 && current === previous) {
		result = "No";
		break;
	}
	
	previous = current;
}
	
console.log(result);