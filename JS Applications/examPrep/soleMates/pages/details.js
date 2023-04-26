import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById } from "../src/data/data.js";
import { getUserData } from "../src/util.js";



const detailsTemplate = (shoe, deleteShoe) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${shoe.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${shoe.isOwner ? html `
        <div id="action-buttons">
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click = ${deleteShoe}>Delete</a>
        </div>
        ` : null}
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const shoe = await getById(id);
    const userData = getUserData();

    if(userData){
        shoe.isOwner = shoe._ownerId == userData._id; 
    }

    ctx.render(detailsTemplate(shoe, deleteShoe))

    async function deleteShoe(e){
        e.preventDefault();

        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/catalog');
        }
    }
}