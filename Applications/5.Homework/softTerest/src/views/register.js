import { register } from "../user.js";

const section = document.getElementById('registerView');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context){
    ctx = context;
    context.showSection(section)

}

async function onSubmit(e){
    e.preventDefault();
    const data = new FormData(form);
    const {email, password, repeatPassword} = Object.fromEntries(data);

        if(password != repeatPassword){
            throw Error('Passwords do not match');
        }
        await register(email, password);
        alert('Regisration successful');
        ctx.updateNav();
        ctx.goTo('/catalog');
}

