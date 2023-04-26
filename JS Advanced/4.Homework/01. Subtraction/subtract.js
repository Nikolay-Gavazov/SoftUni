function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;
    const res = Number(firstNum) - Number(secondNum);

    document.getElementById('result').innerText = res;

}