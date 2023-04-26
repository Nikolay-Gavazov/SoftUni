import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";

import { createSubmitHandler } from "../src/util.js";


const editTemplate = (shoe, onSubmit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit = ${onSubmit}>
                <input type="text" name="brand" .value = ${shoe.brand} id="shoe-brand" placeholder="Brand" />
                <input type="text" name="model" .value = ${shoe.model} id="shoe-model" placeholder="Model" />
                <input type="text" name="imageUrl" .value = ${shoe.imageUrl} id="shoe-img" placeholder="Image url" />
                <input type="text" name="release" .value = ${shoe.release} id="shoe-release" placeholder="Release date" />
                <input type="text" name="designer" .value = ${shoe.designer} id="shoe-designer" placeholder="Designer" />
                <input type="text" name="value" .value = ${shoe.value} id="shoe-value" placeholder="Value" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const shoe = await getById(id);
    ctx.render(editTemplate(shoe, createSubmitHandler(onSubmit)));

    async function onSubmit({ brand, model, imageUrl, release, designer, value }, form) {
        if (brand == '' || model == '' || imageUrl == '' || release == '' || designer == '' || value == '') {
            return alert('All fields are required')
        }
        await update(id, { brand, model, imageUrl, release, designer, value })
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}