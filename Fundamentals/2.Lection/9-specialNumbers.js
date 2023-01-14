function specialNumbers(num) {

    for (let currentNum = 1; currentNum <= num; currentNum++) {
        let sum = 0;
        let numAsString = currentNum.toString();
        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }
        if (sum  === 5 || sum === 7 || sum === 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }
    }

}
specialNumbers(20)