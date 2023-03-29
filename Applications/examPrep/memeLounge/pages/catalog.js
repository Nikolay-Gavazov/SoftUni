import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";


const catalogTemplate = (elements) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        ${elements.length > 0 ? html `
        ${elements.map(el => html `
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${el.title}</p>
                    <img class="meme-image" alt="meme-img" src="${el.imageUrl}">
                </div>
                <div id="data-buttons">
                    <a class="button" href="/details/${el._id}">Details</a>
                </div>
            </div>
        </div>
        `)}
        ` : html `
        <p class="no-memes">No memes in database.</p>
        ` }
    </div>
</section>
`;

export async function catalogPage(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements))
}