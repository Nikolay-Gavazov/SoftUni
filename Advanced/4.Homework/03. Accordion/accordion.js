function toggle() {
    let button = document.getElementsByClassName('button')[0]

    if (button.innerText == 'MORE') {
        button.innerText = 'LESS';
        document.getElementById("extra").style.display = 'block';

    } else {
        button.innerText = 'MORE';
        document.getElementById("extra").style.display = 'none';
    }

}