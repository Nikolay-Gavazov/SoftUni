import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, getDonations, getUserDonation, makeDonate,} from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, donations, deleteItem, donate, userDonation) => html`
<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src="${element.imageUrl}" alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${element.title}</h2>
                        <p class="post-description">${element.description}</p>
                        <p class="post-address">Address: ${element.address}</p>
                        <p class="post-number">Phone number: ${element.phone}</p>
                        <p class="donate-Item">Donate Materials: ${donations}</p>

                        <div class="btns">
                            ${element.isOwner ? html `
                            <a href="/edit/${element._id}" class="edit-btn btn">Edit</a>
                            <a href="javascript:void(0)" class="delete-btn btn" @click = ${deleteItem}>Delete</a>
                            ` : html `
                            ${userDonation == 0 ? html `
                            <a href="javascript:void(0)" class="donate-btn btn" @click = ${donate}>Donate</a>
                            ` : null}
                            
                            `}

                        </div>

                    </div>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const donations = await getDonations(id);
    const element = await getById(id);
    const userData = getUserData();

    if(userData){
        element.isOwner = element._ownerId == userData._id;
        const userDonation = await getUserDonation(id, userData._id);
        ctx.render(detailsTemplate(element, donations, deleteItem, donate, userDonation))
    }else{
        ctx.render(detailsTemplate(element, donations, deleteItem, donate))
    }

    async function deleteItem(e){
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/catalog')
        }   
    }
  
    async function donate(e){
        e.preventDefault();
        makeDonate(element._id);
        ctx.page.redirect(`/details/${id}`)
    }
}