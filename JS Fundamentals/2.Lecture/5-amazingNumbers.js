function amazingNumbers(input) {

    let sum = 0;
    let num = input.toString();

    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i]);
        sum += digit
    }
    let result = sum.toString().includes('9');

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

} amazingNumbers(900)