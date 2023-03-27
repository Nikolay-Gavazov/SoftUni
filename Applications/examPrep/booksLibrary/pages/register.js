import { html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({ email, password, 'confirm-pass': rePass }, form) {
        if (email == '' || password == '') {
            return alert('All fields are required')
        }
        if (password != rePass) {
            return alert('Password don\'t match')
        }
        await register(email, password);
        form.reset();

        ctx.page.redirect('/')
    }
}