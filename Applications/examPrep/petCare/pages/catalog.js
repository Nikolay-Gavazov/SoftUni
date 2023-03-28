import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";

const catalogTemplate = (elements) => html`
 <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
                ${elements.length > 0 ? html `
                ${elements.map(el => html `
                <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="${el.image}">
                    </article>
                    <h2 class="name">${el.name}</h2>
                    <h3 class="breed">${el.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${el._id}">Details</a>
                    </div>
                </div>
                `)}
                ` : html `
                <div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>
                `}
            </div>
        </section>
`;

export async function catalogPage(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements))
}