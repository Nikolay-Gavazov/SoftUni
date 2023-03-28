import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const editTemplate = (element, onSubmit) => html`
<section id="edit-page" class="auth">
            <form id="edit" @submit = ${onSubmit}>
                <h1 class="title">Edit Post</h1>
        
                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" .value = ${element.title} id="title" value="">
                </article>
        
                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" .value = ${element.description} id="description" value="">
                </article>
        
                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" .value = ${element.imageUrl} id="imageUrl" value="">
                </article>
        
                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" .value = ${element.address} id="address" value="">
                </article>
        
                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" .value = ${element.phone} id="phone" value="">
                </article>
        
                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>
`;

export async function editPage(ctx){
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(element, createSubmitHandler(onSubmit)));

    async function onSubmit({title, description, imageUrl, address, phone}, form){
        if(title == '' || description == '' || imageUrl == '' || address == '' || phone == ''){
            return alert('All fields are required')
        }

        await update(id, {title, description, imageUrl, address, phone});
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}