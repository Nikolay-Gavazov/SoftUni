import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, deleteItem) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${element.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${element.brand}</li>
            <li><span>Model:</span>${element.model}</li>
            <li><span>Year:</span>${element.year}</li>
            <li><span>Price:</span>${element.price}$</li>
        </ul>

        <p class="description-para">${element.description}</p>

        ${element.isOwner ? html `
        <div class="listings-buttons">
            <a href="/edit/${element._id}" class="button-list">Edit</a>
            <a href="javascript:void(0)" class="button-list" @click=${deleteItem}>Delete</a>
        </div>
        ` : null}
        
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
    ctx.render(detailsTemplate(element, deleteItem))


    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            del(id);
            ctx.page.redirect('/catalog')
        }
    }

}