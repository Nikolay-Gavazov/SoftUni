import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";


const catalogTemplate = (shoes) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${shoes.length > 0 ? html `
    <ul class="card-wrapper">
        ${shoes.map(shoe => html `
        <li class="card">
            <img src="${shoe.imageUrl}" alt="travis" />
            <p>
                <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${shoe.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
            <a class="details-btn" href="/details/${shoe._id}">Details</a>
        </li>
        `)}
    </ul>
    ` : html `
    <h2>There are no items added yet.</h2>
    `}    
</section>
`;

export async function catalogPage(ctx) {
    const shoes = await getAll();
    ctx.render(catalogTemplate(shoes))
}