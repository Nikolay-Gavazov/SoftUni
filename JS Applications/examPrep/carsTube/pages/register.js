import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { register } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form id="register-form" @submit = ${onSubmit}>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>
`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({ username, password, repeatPass }, form) {
        if (username == '' || password == '') {
            return alert('All fields are required')
        }
        if (password != repeatPass) {
            return alert('Password don\'t match')
        }
        await register(username, password);
        form.reset();
 
        ctx.page.redirect('/catalog')
    }
}