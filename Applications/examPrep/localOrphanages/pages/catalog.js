import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";

const catalogTemplate = (elements) => html`
<section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            ${elements.length > 0 ? html `
            <div class="all-posts">
                ${elements.map(el => html `
                <div class="post">
                    <h2 class="post-title">${el.title}</h2>
                    <img class="post-image" src="${el.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${el._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
                `)}    
            </div>
            ` : html `
            <h1 class="title no-posts-title">No posts yet!</h1>
            `}
        </section>
`;

export async function catalogPage(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(albums))
}