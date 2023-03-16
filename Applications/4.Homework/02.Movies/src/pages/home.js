const section = document.getElementById('home-page');

export function homePage(context){
    context.showSection(section);
    context.updateNav();
}