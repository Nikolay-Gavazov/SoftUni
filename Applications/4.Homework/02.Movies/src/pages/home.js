const section = document.getElementById('home-page');

export function homePage(context){
    context.showSection(section);
    context.updateNav();
    section.querySelector('#add-movie-button').addEventListener('click', ()=>{
        context.goTo('/add')
    })
    
}

