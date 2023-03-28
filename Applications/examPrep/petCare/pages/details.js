import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, makeDonation } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, likes, deleteItem, donate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="./images/Shiba-Inu.png">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: Max</h1>
                <h3>Breed: Shiba Inu</h3>
                <h4>Age: 2 years</h4>
                <h4>Weight: 5kg</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            ${element.user ? html `
            <div class="actionBtn">
                ${element.isOwner ? html `
                <a href="/edit/${element._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click = ${deleteItem}>Delete</a>
                ` : html `
                <a href="javascript:void(0)" class="donate"@click = ${donate}>Donate</a>
                `}
            </div>
            ` : null}
           
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const donates = await getLikes(id);
    const element = await getById(id);
    element.user = false;
    const userData = getUserData();

    if (userData) {
        element.user = true;
        album.isOwner = album._ownerId == userData._id;
        const userLike = await getUserLike(id, userData._id);
        ctx.render(detailsTemplate(element, donates, deleteItem, donate, userLike))
    } else {
        ctx.render(detailsTemplate(element, donates, deleteItem, donate))
    }

    async function deleteItem(e) {
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if (confirmation) {
            del(id);
            ctx.page.redirect('/catalog')
        }
    }

    async function donate(e){
        e.preventDefault();
        makeDonation(element._id);
        ctx.page.redirect(`/details/${id}`)
    }
}