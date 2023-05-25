document.querySelector('#del').addEventListener('click', (e) => {
    const confirmation = confirm('Are you sure?');
    if (!confirmation) {
        e.preventDefault();
    }
})