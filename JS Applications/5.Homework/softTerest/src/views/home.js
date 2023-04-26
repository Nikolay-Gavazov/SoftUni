const section = document.getElementById('homeView');

export function showHomeView(context){
    context.showSection(section)
    context.updateNav();
}