import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { create } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const createTemplate = (onSubmit) => html`
<section id="create-meme">
            <form id="create-form" @submit = ${onSubmit}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`;

export function createPage(ctx){
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

    async function onSubmit({title, description, imageUrl}, form){
        if(title == '' || description == '' || imageUrl == ''){
            return alert('All fields are required')
        }
        await create({title, description, imageUrl});
        form.reset();

        ctx.page.redirect('/catalog')
    }
}