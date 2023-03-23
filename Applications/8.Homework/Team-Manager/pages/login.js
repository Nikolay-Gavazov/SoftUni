import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { login } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";


const loginTemplate = (onSubmit, error) => html`
<section id="login">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Login</h1>
                    </header>
                    <form id="login-form" class="main-form pad-large" @submit = ${onSubmit}>
                        ${error && html`<div class="error">${error}</div>`}
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <input class="action cta" type="submit" value="Sign In">
                    </form>
                    <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                    </footer>
                </article>
            </section>
`;

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));
    async function onSubmit({email, password}, form){

        if(email == '' || password == ''){
        ctx.render(loginTemplate(createSubmitHandler(onSubmit), 'All fields are required'));
        return
        }
        await login(email, password);
        form.reset();
        ctx.page.redirect('/myTeamsPage')
    }
}