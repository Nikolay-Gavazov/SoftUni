function deleteByEmail() {
    const input = document.querySelector('input');
    const result = document.getElementById('result');
    const tr = Array.from(document.querySelectorAll('tr'));

    tr.forEach(el => {
        if(el.textContent.includes(input.value)){
            el.remove();
            result.textContent = 'Deleted.';
        }else{
            result.textContent = 'Not found.';
        }
    });
}