import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { approvingMember, create, sendRequest } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const createTemplate = (onSubmit, error) => html`
<section id="create">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>New Team</h1>
                    </header>
                    <form id="create-form" class="main-form pad-large" @submit = ${onSubmit}>
                    ${error && html`<div class="error">${error}</div>`}
                        <label>Team name: <input type="text" name="name"></label>
                        <label>Logo URL: <input type="text" name="logoUrl"></label>
                        <label>Description: <textarea name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Create Team">
                    </form>
                </article>
            </section>
`;

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));
    async function onSubmit({name, logoUrl, description}, form){
        if(name == '' || logoUrl == '' || description == ''){
            ctx.render(createTemplate(createSubmitHandler(onSubmit), 'All fields are required'));
            return
        }
        if(name.length < 4){
            ctx.render(createTemplate(createSubmitHandler(onSubmit), 'Name must be at least 4 characters'));
            return
        }
        if(description.length < 10){
            ctx.render(createTemplate(createSubmitHandler(onSubmit), 'Description must be at least 10 characters'));
            return
        }
        const data = {
            name,
            logoUrl,
            description
        }
        const team = await create(data);
        const responce = await sendRequest({'teamId': team._id, 'status': 'member'});
        approvingMember(responce._id, {'status': 'member'})
        form.reset();
        ctx.page.redirect(`/details/${team._id}`)
    }

}