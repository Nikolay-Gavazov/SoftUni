function sumTable() {
    let sum = 0;
    let table = document.querySelectorAll('table tr');

    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        let price = cols[cols.length - 1].textContent;
        sum += Number(price);
    }

    document.getElementById('sum').textContent = sum

}