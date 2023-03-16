const section = document.getElementById('edit-movie');

export function editMoviePage(context){
    context.showSection(section);
    context.updateNav();
}