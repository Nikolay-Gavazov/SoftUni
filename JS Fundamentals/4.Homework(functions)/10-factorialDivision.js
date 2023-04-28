function factorialDivision(firstNumber, secondNumber) {

    let firstProduct = 1;
    let secondProduct = 1;

    function firstFactorial() {
        for (let i = firstNumber; i > 0; i--) {
            firstProduct *= i;
        }
        return firstProduct;
    }

    function secondFactorial() {

        for (let i = secondNumber; i > 0; i--) {
            secondProduct *= i;
        }
        return secondProduct;
    }


    result = firstFactorial() / secondFactorial();

    console.log(result.toFixed(2));
}
factorialDivision(5, 3)