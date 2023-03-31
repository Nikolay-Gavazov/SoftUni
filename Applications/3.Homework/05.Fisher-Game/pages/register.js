import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { register } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";


const registerTemplate = (onSubmit) => html`
<section id="register-view">
            <h2>Register</h2>
            <form id="register" @submit = ${onSubmit}>
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="rePass"></label>
                <p class="notification"></p>
                <button>Register</button>
            </form>
        </section>
`;

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
  
    async function onSubmit({email, password, rePass}, form){
        if(email == '' || password == ''){
            return alert('All fields are required')
        }
        if(password != rePass){
            return alert('Password don\'t match')
        }
        await register(email, password);
        form.reset();

        ctx.page.redirect('/catalog')
    }
}