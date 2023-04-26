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
        if(!email || !password || ! repeatPassword){
            throw Error('All fields are required!')
        }
        if(email.length < 3){
            throw Error('email is too short!')
        }
        if(password.length < 3){
            throw Error('Password is too short!')
        }
        if(password != repeatPassword){
            throw Error('Passwords do not match');
        }
        await register(email, password);
        alert('Regisration successful');
        form.reset()
        ctx.updateNav();
        ctx.goTo('/');
}

