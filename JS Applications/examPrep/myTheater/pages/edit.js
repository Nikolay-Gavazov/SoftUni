import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const editTemplate = (element, onSubmit) => html`
<section id="editPage">
    <form class="theater-form" @submit = ${onSubmit}>
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" .value = ${element.title} type="text" placeholder="Theater name" value="To Kill A Mockingbird">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" .value = ${element.date} type="text" placeholder="Month Day, Year" value="December 13, 2018">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" .value = ${element.author} type="text" placeholder="Author" value="Aaron Sorkin, Fred Fordham">
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" .value = ${element.description}
                placeholder="Description">To Kill a Mockingbird is a 2018 play based on the 1960 novel of the same name by Harper Lee, adapted for the stage by Aaron Sorkin. It opened on Broadway at the Shubert Theatre on December 13, 2018. The play is set to transfer to London's West End at the Gielgud Theatre in March 2022.</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" .value = ${element.imageUrl} type="text" placeholder="Image Url"
                value="./images/Moulin-Rouge!-The-Musical.jpg">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(element, createSubmitHandler(onSubmit)));

    async function onSubmit({ title, date, author, description, imageUrl }, form) {
        if (title == '' || date == '' || author == '' || description == '' || imageUrl == '') {
            return alert('All fields are required')
        }

        await update(id, { title, date, author, description, imageUrl });
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}