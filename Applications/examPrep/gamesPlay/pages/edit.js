import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, update } from "../src/data/data.js";
import { createSubmitHandler } from "../src/util.js";

const editTemplate = (element, onSubmit) => html`
<section id="edit-page" class="auth">
            <form id="edit" @submit = ${onSubmit}>
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value = ${element.title}  value="">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value = ${element.category}  value="">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" .value = ${element.maxLevel}  min="1" value="">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value = ${element.imageUrl}  value="">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" .value = ${element.summary}  id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;

export async function editPage(ctx){
    const id = ctx.params.id;
    const element = await getById(id);

    ctx.render(editTemplate(element, createSubmitHandler(onSubmit)));

    async function onSubmit({title, category, maxLevel, imageUrl, summary}, form){
        if(title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == ''){
            return alert('All fields are required')
        }

        await update(id, {title, category, maxLevel, imageUrl, summary});
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }
}