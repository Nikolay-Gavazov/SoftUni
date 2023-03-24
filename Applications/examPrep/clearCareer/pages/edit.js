import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById } from "../src/data/data.js";
import { getUserData } from "../src/util.js";


//TODO Replace with actual view

const editTemplate = (offer, userData) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    console.log(id);
    const offer = await getById(id);
    const userData = getUserData()
    ctx.render(editTemplate(offer, userData))
}