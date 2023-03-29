import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { register } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";

const registerTemplate = (error ,onSubmit) => html`
${error.length > 0 ? html `
 <section id="notifications">
            <div id="errorBox" class="notification">
                <span>${error}</span>
            </div>
        </section>
` : null}
<section id="register">
            <form id="register-form" @submit = ${onSubmit}>
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="/login">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`;

export function registerPage(ctx){
    let error = '';
    ctx.render(registerTemplate(error, createSubmitHandler(onSubmit)));

    async function onSubmit({email, password, repeatPass, username, gender}, form){
        console.log(email, password, repeatPass, username, gender);
        if(email == '' || password == '' || username == ''){
            error = 'All fields are required';
            ctx.render(registerTemplate(error, createSubmitHandler(onSubmit)));
            return
        }
        if(password != repeatPass){
            error = 'Password don\'t match';
            ctx.render(registerTemplate(error, createSubmitHandler(onSubmit)));
            return
        }
        await register(email, password, username, gender);
        form.reset();

        ctx.page.redirect('/catalog')
    }
}