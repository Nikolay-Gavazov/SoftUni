let arr  = [2, 1, 3, 1, 2, 1];
let n = arr.length;
let result = true;  
/* Check the wave form  
* If arr[1] is greater than left and right  
* Same pattern will be followed by whole   
* elements, else reverse pattern  
* will be followed by array elements  
*/
if (arr[1] > arr[0] && arr[1] > arr[2]) {  
    for (let i = 1; i < n - 1; i += 2) {  
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {  
            result = true;  
        }  
        else {  
            result = false;  
            break;  
        }  
    }  
    // Check for last element  
    if (result == true && n % 2 == 0) {  
        if (arr[n - 1] <= arr[n - 2]) {  
            result = false;  
        }  
    }  
}  
else if (arr[1] < arr[0] && arr[1] < arr[2]) {  
    for (let i = 1; i < n - 1; i += 2) {  
        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {  
            result = true;  
        }  
        else {  
            result = false;  
            break;  
        }  
    }  
    // Check for last element  
    if (result == true && n % 2 == 0) {  
        if (arr[n - 1] >= arr[n - 2]) {  
            result = false;  
        }  
    }  
}  
console.log(result ? 'Yes' : 'No');