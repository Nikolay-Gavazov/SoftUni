let inputArray = ['7, 8, 9,10, 11, 12, 11, 13,']

let result = "Yes";

for (i = 0; i < inputArray.length-1; i++) {
	if (inputArray[i] < inputArray[i + 1]) {
        continue;
    
	} else {
		result = "No";
		break;
	}
}		
	
console.log(result);
	