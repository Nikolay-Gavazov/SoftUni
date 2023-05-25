document.getElementById('cars').addEventListener('click', showHide);

function showHide(e){
    if(e.target.classList.contains('more')){
        const btn = e.target;
        const div = e.target.parentElement.querySelector('.description');

        if(div.style.display == 'block'){
            btn.textContent = 'Show more'
            div.style.display = 'none'
        }else{
            btn.textContent = 'Hide'
            div.style.display = 'block';
        }
    }
}
