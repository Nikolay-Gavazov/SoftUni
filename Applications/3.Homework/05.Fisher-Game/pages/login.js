import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { login } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";

//TODO Replace with actual view

const loginTemplate = (onSubmit) => html`
<section id="login-view">
            <h2>Login</h2>
            <form id="login" @submit = ${onSubmit}>
                <label>Email: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <p class="notification"></p>
                <button>Login</button>
            </form>
        </section>
`;

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({email, password}, form){
        if(email == '' || password == ''){
            return alert('All fields are required')
        }
        await login(email, password);
        form.reset();

        ctx.page.redirect('/catalog')
    }
}