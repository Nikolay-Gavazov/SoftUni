import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";


const editTemplate = (team, onSubmit, error) => html `
    <section id="edit">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Edit Team</h1>
                    </header>
                    <form id="edit-form" class="main-form pad-large" @submit = ${onSubmit}>
                    ${error && html`<div class="error">${error}</div>`}
                        <label>Team name: <input type="text" .value = ${team.name} name="name"></label>
                        <label>Logo URL: <input type="text" .value = ${team.logoUrl} name="logoUrl"></label>
                        <label>Description: <textarea .value = ${team.description} name="description"></textarea></label>
                        <input class="action cta" type="submit" value="Save Changes">
                    </form>
                </article>
            </section>
`;


export async function editPage(ctx){
    const id = ctx.params.id;
    const team = await getById(id);
    ctx.render(editTemplate(team, onSubmit));

    async function onSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name')
        const logoUrl = formData.get('logoUrl')
        const description = formData.get('description');
        if(name == '' || logoUrl == '' || description == ''){
            ctx.render(editTemplate(onSubmit, 'All fields are required'));
            return
        }
        if(name.length < 4){
            ctx.render(editTemplate(onSubmit, 'Name must be at least 4 characters'));
            return
        }
        if(description.length < 10){
            ctx.render(editTemplate(onSubmit, 'Description must be at least 10 characters'));
            return
        }
        const data = {
            name,
            logoUrl,
            description
        }
        await update(id, data)
        form.reset();
        ctx.page.redirect(`/details/${team._id}`)
    }
}