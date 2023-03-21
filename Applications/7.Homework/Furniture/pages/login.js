import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { login } from "../src/data.js";

const loginTemplate = (onSubmit, error) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                ${error && html`<p>${error}</p>`}
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`

export async function loginPage(ctx){
    ctx.render(loginTemplate(onSubmit))

   async function onSubmit(event){
    event.preventDefault();

    const {email, password} = event.target.elements;

        if(!email.value || !password.value){
            return ctx.render(registerTemplate(onSubmit, 'All fields are required!'))
        }

        try {
            await login(email.value, password.value)
            event.target.reset();
            ctx.updateNav();
            ctx.page.redirect('/');
        } catch (error) {
            ctx.render(loginTemplate(onSubmit, error.message))
        }
    }
}