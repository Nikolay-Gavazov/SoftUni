import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";


const editTemplate = (product, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Product</h2>
        <form class="edit-form" @submit = ${onSubmit}>
            <input type="text" name="name" .value = ${product.name} id="name" placeholder="Product Name" />
            <input type="text" name="imageUrl" .value = ${product.imageUrl} id="product-image" placeholder="Product Image" />
            <input type="text" name="category" .value = ${product.category} id="product-category" placeholder="Category" />
            <textarea id="product-description" .value = ${product.description} name="description" placeholder="Description" rows="5"
                cols="50"></textarea>

            <input type="text" name="price" .value = ${product.price} id="product-price" placeholder="Price" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const product = await getById(id);
    ctx.render(editTemplate(product, createSubmitHandler(onSubmit)));

    async function onSubmit({ name, imageUrl, category, description, price }, form) {
        if (name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
            return alert('All fields are required')
        }
        await update(id, { name, imageUrl, category, description, price })
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}