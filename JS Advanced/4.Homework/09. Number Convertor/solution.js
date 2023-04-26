function solve() {
    const firstOption = document.createElement('option');
    const secondOption = document.createElement('option');
    firstOption.value = 'binary';
    secondOption.value = 'hexadecimal';

    firstOption.innerHTML = 'Binary';
    secondOption.innerHTML = 'Hexadecimal';

    const menu = document.getElementById('selectMenuTo');
    menu.appendChild(firstOption);
    menu.appendChild(secondOption);

    const input = document.getElementById('input');
    const button = document.querySelector('button');
    button.addEventListener('click', convert);
    const result = document.getElementById('result');

    function convert() {
        if (menu.value == 'binary') {
            result.value = Number(input.value).toString(2);

        } else if (menu.value == 'hexadecimal') {
            result.value = Number(input.value).toString(16).toLocaleUpperCase();
        }
    }

}