import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, getDonates, getUserDonate, makeDonation } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, donates, deleteItem, donate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${element.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${element.name}</h1>
                <h3>Breed: ${element.breed}</h3>
                <h4>Age: ${element.age}</h4>
                <h4>Weight: ${element.weight}</h4>
                <h4 class="donation">Donation: ${donates}$</h4>
            </div>
            ${element.user ? html `
            <div class="actionBtn">
                ${element.isOwner ? html `
                <a href="/edit/${element._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click = ${deleteItem}>Delete</a>
                ` : html `
                ${element.userDonation == 0 ? html `
                <a href="javascript:void(0)" class="donate" @click = ${donate}>Donate</a>
                ` : null}
                `}
            </div>
            ` : null}
           
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const donates = await getDonates(id) * 100;
    const element = await getById(id);
    element.user = false;
    const userData = getUserData();

    if (userData) {
        element.user = true;
        element.isOwner = element._ownerId == userData._id;
        element.userDonation = await getUserDonate(id, userData._id);
    }
        ctx.render(detailsTemplate(element, donates, deleteItem, donate))
    

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