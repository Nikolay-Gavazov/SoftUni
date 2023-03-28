import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const editTemplate = (element, onSubmit) => html`
<section id="editPage">
    <form class="editForm" @submit = ${onSubmit}>
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" .value = ${element.name} id="name" type="text" value="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" .value = ${element.breed} id="breed" type="text" value="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" .value = ${element.age} id="age" type="text" value="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" .value = ${element.weight} id="weight" type="text" value="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" .value = ${element.image} id="image" type="text" value="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(element, createSubmitHandler(onSubmit)));

    async function onSubmit({ name, breed, age, weight, image}, form) {
        if (name == '' || breed == '' || age == '' || weight == '' || image == '') {
            return alert('All fields are required')
        }

        await update(id, { name, breed, age, weight, image});
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}