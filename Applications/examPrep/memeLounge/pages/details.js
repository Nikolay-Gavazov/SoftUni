import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById} from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, deleteItem) => html`
<section id="meme-details">
    <h1>Meme Title: ${element.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${element.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${element.description}</p>

            ${element.isOwner ? html `
            <a class="button warning" href="/edit/${element._id}">Edit</a>
            <button class="button danger" @click = ${deleteItem}>Delete</button>
            ` : null}
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const element = await getById(id);
    const userData = getUserData();

    if (userData) {
        element.isOwner = element._ownerId == userData._id;
    }
    ctx.render(detailsTemplate(element, deleteItem,))
    

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            del(id);
            ctx.page.redirect('/catalog')
        }
    }
}