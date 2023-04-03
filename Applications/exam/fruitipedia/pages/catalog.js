import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";


const catalogTemplate = (data) => html`
<h2>Fruits</h2>
        <section id="dashboard">
          ${data.length > 0 ? html `
          ${data.map(fruit => html `
          <div class="fruit">
            <img src="${fruit.imageUrl}" alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/details/${fruit._id}">More Info</a>
          </div>
          `)}
          ` : html `
          <h2>No fruit info yet.</h2>
          `}
        </section>
`;

export async function catalogPage(ctx) {
    const data = await getAll();
    ctx.render(catalogTemplate(data))
}