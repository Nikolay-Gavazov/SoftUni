import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const editTemplate = (error, element, onSubmit) => html`
${error.length > 0 ? html `
 <section id="notifications">
            <div id="errorBox" class="notification">
                <span>${error}</span>
            </div>
        </section>
` : null}
<section id="edit-meme">
            <form id="edit-form" @submit = ${onSubmit}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value = ${element.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value = ${element.description}>
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value = ${element.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`;

export async function editPage(ctx){
    let error = '';
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(error, element, createSubmitHandler(onSubmit)));

    async function onSubmit({title, description, imageUrl}, form){
        if(title == '' || description == '' || imageUrl == ''){
            error = 'All fields are required';
            ctx.render(editTemplate(error, createSubmitHandler(onSubmit)));
            return
        }

        await update(id, {title, description, imageUrl});
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}