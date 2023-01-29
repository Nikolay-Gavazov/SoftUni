function focused() {
    const element = Array.from(document.querySelectorAll('div>div input'));
    element.forEach(el => {
        el.addEventListener('focus', focus = (event) =>{event.target.parentElement.className = 'focused'});
        el.addEventListener('blur', focusOut = (event) =>{event.target.parentElement.className = ''});
    });
   
}