function numbersDivisible(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumber = '';

    for (let i = n; i < m; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }console.log(`The sum: ${sum}`);
    for (let i = n; i < m; i++){
        if (i % 9 === 0){
            outputNumber = i;
            console.log(outputNumber);
        }
    }

}
numbersDivisible(["100", "200"])