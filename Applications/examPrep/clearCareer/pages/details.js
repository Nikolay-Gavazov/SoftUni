import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById } from "../src/data/data.js";
import { getUserData } from "../src/util.js";


const detailsTemplate = (offer, userData, deleteOffer, apply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${offer.imageUrl}" alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        <div id="action-buttons">
           ${offer.isOwner ? html `
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click = ${deleteOffer}>Delete</a>` : null}

            ${!offer.isOwner && userData != null ? html`
            <a href="javascript:void(0)" id="apply-btn" @click = ${apply}>Apply</a>` : null}
            
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const offer = await getById(id);
    const userData = getUserData()
    offer.isOwner = offer._ownerId == userData._id;

    ctx.render(detailsTemplate(offer, userData, deleteOffer, apply))



    async function deleteOffer(e){
        e.preventDefault()
    }

    async function apply(e){
        e.preventDefault()
    }
}