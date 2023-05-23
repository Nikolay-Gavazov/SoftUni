function reverseAnArrayOfNumbers(n, array) {

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = array[i];
    }

    //let output = arr.reverse().join(' ');
    //console.log(output);
    let output = ''
    for (let i = n - 1; i >= 0; i--) {
        output += arr[i] + ' ';
    }
    console.log(output);

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])