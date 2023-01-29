function validate() {
    const input = document.querySelector('input');
    input.addEventListener('change', focusOut = () => {
        const match = input.value.match(/[a-z]+[0-9]*[\@]{1}[a-z]*[\.]*[a-z]+[\.]{1}[a-z]{2,}/gm);
        if (match == input.value) {
            input.className = '';
        } else {
            input.className = 'error';
        }

    });

}