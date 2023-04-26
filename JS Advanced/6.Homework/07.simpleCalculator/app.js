function calculator() {
    let sumEl1;
    let sumEl2;
    let resultEl;

    return{
        init: (selector1, selector2, resultSelector) => {
            sumEl1 = document.querySelector(selector1);
            sumEl2 = document.querySelector(selector2);
            resultEl = document.querySelector(resultSelector);
        },
        add: () => (resultEl.value = Number(sumEl1.value) + Number(sumEl2.value)),
        subtract: () => (resultEl.value = sumEl1.value - sumEl2.value)
    };
}
const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');




