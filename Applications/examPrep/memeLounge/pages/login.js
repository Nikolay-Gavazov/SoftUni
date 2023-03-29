import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { login } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";


const loginTemplate = (onSubmit) => html`
<section id="login">
            <form id="login-form" @submit = ${onSubmit}>
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="#">Sign up</a>.</p>
                    </div>
                </div>
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