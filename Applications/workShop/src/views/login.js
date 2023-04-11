import {html} from '../lib/lit-html.js'
import { createSubmitHandler } from '../util.js';
import { login } from '../data/auth.js';


const loginTemplate = (onLogin, formData = {}, error) => html `
<h1>Login</h1>
<section class = 'main'>
        <form>
            ${error ? html`<p class = 'error'>${error}</p>` : null}
            <label>Username <input type = 'text' name = 'username' .value = ${formData.username || ''}></label>        
            <label>Password <input type = 'password' name = 'password'></label>
            <button class ='btn'>Sign in</button>
        </form>
        <p>don't have an account? <a href = '/register' class = 'link'>Sign up here</a></p>
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
