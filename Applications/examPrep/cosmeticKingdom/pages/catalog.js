import { html } from "../../../../node_modules/lit-html/lit-html.js"
import { getAll } from "../src/data/data.js";

const catalogTemplate = (products) => html`
<h2>Products</h2>
<section id="dashboard">
${products.length > 0 ? html`
${products.map(product => html`
<div class="product">
    <img src="${product.imageUrl}" alt="example1" />
    <p class="title">${product.name}</p>
    <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
    <a class="details-btn" href="/details/${product._id}">Details</a>
</div>
`)}
` : html`
<h2>No products yet.</h2>
`}
</section>
`;

export async function catalogPage(ctx) {
    const products = await getAll();
    ctx.render(catalogTemplate(products))
}