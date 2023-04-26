function colorize() {
    let rows = document.querySelectorAll('table tr');
    let i = 0;
    for (let row of rows) {
        i++;
        if (i % 2 == 0) {
            row.style.background = 'teal';
        }
    }

}