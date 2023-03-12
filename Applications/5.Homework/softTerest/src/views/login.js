import { login } from "../user.js";

const section = document.getElementById('loginView');

const form = section.querySelector('form');
form.addEventListener('submit', submit);

let ctx = null;

export function showLogin(context){
    ctx = context;
    context.showSection(section)

}

async function submit(e){
    e.preventDefault();

    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');

    await login(email, password);
    ctx.updateNav();
    ctx.goTo('/catalog');
}
