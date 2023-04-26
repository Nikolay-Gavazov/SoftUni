import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { login } from "../src/data/user.js";
import { createSubmitHandler } from "../src/util.js";

//TODO Replace with actual view

const loginTemplate = (onSubmit) => html`
@submit = ${onSubmit}

`;

export function loginPage(ctx){
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));
    //TODO change user object
    async function onSubmit({email, password}, form){
        if(email == '' || password == ''){
            return alert('All fields are required')
        }
        await login(email, password);
        form.reset();
        //TODO use redirect from requirements
        ctx.page.redirect('/')
    }
}