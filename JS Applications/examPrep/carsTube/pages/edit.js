import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const editTemplate = (element, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit = ${onSubmit}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value = ${element.brand} value="">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value = ${element.model} value="">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value = ${element.description} value="">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value = ${element.year} value="">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value = ${element.imageUrl} value="">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value = ${element.price} value="">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(element, createSubmitHandler(onSubmit)));

    async function onSubmit({ brand, model, description, year, imageUrl, price }, form) {
        year = Number(year);
        price = Number(price);
        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
            return alert('All fields are required')
        }
        if(price < 1){
            return alert('Price must be a positive Number!')
        }
        if(year < 1){
            return alert('Year must be a positive Number!')
        }

        await update(id, { brand, model, description, year, imageUrl, price });
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}