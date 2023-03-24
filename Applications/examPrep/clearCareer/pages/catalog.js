import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

//TODO Replace with actual view

const catalogTemplate = (offers) => html`
<section id="dashboard">
          <h2>Job Offers</h2>
            ${offers ? html`
            ${offers.map(offer => html `
            <div class="offer">
            <img src="${offer.imageUrl}" alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/details/${offer._id}">Details</a>
          </div>
            `)}
            ` : html`
            <h2>No offers yet.</h2>
            `} 
        </section>
`;

export async function catalogPage(ctx){
    const offers = await getAll();

    ctx.render(catalogTemplate(offers))
}