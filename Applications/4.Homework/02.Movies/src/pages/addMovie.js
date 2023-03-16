const section = document.getElementById('add-movie');

export function addMoviePage(context){
    context.showSection(section);
    context.updateNav();
}