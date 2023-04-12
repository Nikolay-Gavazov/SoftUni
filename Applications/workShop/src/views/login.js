import {html} from '../lib/lit-html.js'
import { createSubmitHandler } from '../util.js';
import { login } from '../data/auth.js';


const loginTemplate = (onLogin, formData = {}, error) => html `
<h1>Login</h1>
<section class = 'main'>
        <form @submit = ${onLogin}>
            <div class = 'layout'>
                ${error ? html`<p class = 'error'>${error}</p>` : null}
                <label for = 'username'>Username</label>
                <input id = 'username' type = 'text' name = 'username' .value = ${formData.username || ''}>        
                <label for = 'password'>Password</label>
                <input id = 'password' type = 'password' name = 'password'>
            </div>
            <button class ='btn form-row action'>Sign in</button>
        </form>
        <div>
            Don't have an account? <a href = '/register' class = 'link'>Sign up here</a>
        </div>
</section>
`;

export function loginView(ctx){
    update();
    function update(formData, error){
        ctx.render(loginTemplate(createSubmitHandler(onLogin), formData, error));
    }

    async function onLogin({username, password}, form){
        try {
            if(username == '' || password == ''){
                throw {
                    message: 'All fields are required'
                };
            }
            await login(username, password);
            ctx.page.redirect('/settings')
        } catch (err) {
            update({username}, err.message)
            err.handled = true;
        }
    }
}
