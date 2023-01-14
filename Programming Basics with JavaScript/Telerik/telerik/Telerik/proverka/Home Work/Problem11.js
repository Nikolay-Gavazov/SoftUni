let sum = 6;
let inputArray  = [1,2,3,4,3,6,5,8,3,9];

for (i = 0; i < inputArray.length; i++) {
	for (j = i + 1; j < inputArray.length; j++) {
		if (inputArray[i] + inputArray[j] === sum) {
			console.log(inputArray[i] + ", " + inputArray[j]);
		}	
	
	}
}

