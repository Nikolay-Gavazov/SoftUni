function sumNumbers(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;
    let currentNum = 0;

    while (sum < num) {
        currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"])