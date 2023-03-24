import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { register } from "../src/data/user.js";
import { createSubmitHandler, setUserData } from "../src/util.js";


const registerTemplate = (onSubmit, error) => html`
<section id="register">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Register</h1>
                    </header>
                    <form id="register-form" class="main-form pad-large" @submit = ${onSubmit}>
                    ${error && html`<div class="error">${error}</div>`}
                        <label>E-mail: <input type="text" name="email"></label>
                        <label>Username: <input type="text" name="username"></label>
                        <label>Password: <input type="password" name="password"></label>
                        <label>Repeat: <input type="password" name="repass"></label>
                        <input class="action cta" type="submit" value="Create Account">
                    </form>
                    <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
                    </footer>
                </article>
            </section>
`;

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({email, username, password, repass}, form){
        if(email == '' || password == '' || username == ''){
            ctx.render(registerTemplate(createSubmitHandler(onSubmit), 'All fields are required'));
            return
        }
        if(username.length < 3){
            ctx.render(registerTemplate(createSubmitHandler(onSubmit), 'Username must be at least 3 characters'));
            return
        }
        if(password.length < 3){
            ctx.render(registerTemplate(createSubmitHandler(onSubmit), 'Password must be at least 3 characters'));
            return
        }
        if(password != repass){
            ctx.render(registerTemplate(createSubmitHandler(onSubmit), 'Password don\'t match'));
            return
        }
       await register(email, username, password)

        form.reset();
        //TODO use redirect from requirements
        ctx.page.redirect('/myTeamsPage')
    }
}