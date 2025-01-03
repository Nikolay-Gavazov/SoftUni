import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { register } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";

//TODO Replace with actual view

const registerTemplate = (onSubmit) => html`
 <section id="registerPage">
            <form @submit = ${onSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`;

export function registerPage(ctx){
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({email, password, 'conf-pass': rePass}, form){
        if(email == '' || password == ''){
            return alert('All fields are required')
        }
        if(password != rePass){
            return alert('Password don\'t match')
        }
        await register(email, password);
        form.reset();

        ctx.page.redirect('/')
    }
}