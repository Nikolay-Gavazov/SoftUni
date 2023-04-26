function generateReport() {
    const output = document.getElementById('output');

    const resultArr = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const trs = Array.from(document.querySelectorAll('tbody tr'));

    trs.forEach(el => {
        const current = {};
        Array.from(el.querySelectorAll('td')).forEach((x, i) => {
            if (checks[i].checked) {
                current[checks[i].name] = x.textContent;
            }
        })
        resultArr.push(current);
    });
    output.value = JSON.stringify(resultArr)
}