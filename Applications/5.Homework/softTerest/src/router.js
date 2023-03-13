export function initalizer(links){
    
    const main = document.getElementById('mainView')
    document.querySelector('nav').addEventListener('click', navigateClick);

    const context = {
        showSection,
        updateNav,
        goTo
    
    }
    return context
    
    
    
    function showSection(section){
        main.replaceChildren(section);
    }
    
    function navigateClick(e){
        e.preventDefault();
        let target = e.target;
        if(target.tagName == 'IMG'){
            target = target.parentElement;
        }
        if(target.tagName == 'A'){
            const url = new URL(target.href);
            goTo(url.pathname)
        }
    }
    
    function goTo(name, ...params){
        const handler = links[name];
        if(typeof(handler) == 'function'){
            handler(context, ...params);
        }
    }

    function updateNav(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            document.querySelectorAll('.user').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        }else{
            document.querySelectorAll('.user').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
        }
    }
}