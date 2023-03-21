import { html } from "../../../node_modules/lit-html/lit-html.js";
import { register } from "../Furniture/src/data.js";

const registerTemplate = (onSubmit, error) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`;

export async function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(event){
        event.preventDefault();

        const {email, password, rePass} = event.target.elements;

        if(!email.value || !password.value || ! rePass.value){
            return ctx.render(registerTemplate(onSubmit, 'All fields are required!'))
        }

        if(password.value != rePass.value){
            return ctx.render(registerTemplate(onSubmit, 'Password don\'t match!'))
        }

        try {
            await register(email.value, password.value, rePass.value)
        } catch (error) {
            
        }
    }
}