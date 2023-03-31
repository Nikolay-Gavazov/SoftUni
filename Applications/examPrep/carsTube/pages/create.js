import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { create } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const createTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form id="create-form" @submit=${onSubmit}>
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onSubmit)));

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
        await create({ brand, model, description, year, imageUrl, price });
        form.reset();

        ctx.page.redirect('/catalog')
    }
}