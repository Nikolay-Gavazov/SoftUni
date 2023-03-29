import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, deleteItem) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${element.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${element.name}</h1>
                <h3>Artist: ${element.artist}</h3>
                <h4>Genre: ${element.genre}</h4>
                <h4>Price: $${element.price}</h4>
                <h4>Date: ${element.releaseDate}</h4>
                <p>Description: ${element.description}</p>
            </div>

            ${element.isOwner ? html`
            <div class="actionBtn">
                <a href="/edit/${element._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click=${deleteItem}>Delete</a>
            </div>
            ` : null}
        </div>
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