import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";


const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Login Form</legend>
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
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({ email, password }, form) {
        if (email == '' || password == '') {
            return alert('All fields are required')
        }
        await login(email, password);
        form.reset();

        ctx.page.redirect('/')
    }
}