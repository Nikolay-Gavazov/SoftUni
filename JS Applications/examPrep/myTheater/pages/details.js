import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, getLikes, like, getUserLike } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, likes, deleteItem, likeItem, userLike) => html`
<section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${element.title}</h1>
                    <div>
                        <img src="${element.imageUrl}" />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${element.description}</p>
                    <h4>Date: ${element.date}</h4>
                    <h4>Author: ${element.author}</h4>
                    <div class="buttons">
                    ${userLike == 0 && !element.isOwner ? html `
                    <a class="btn-like" href="javascript:void(0)" @click = ${likeItem}>Like</a>
                        ` : null}
                        ${element.isOwner ? html `
                        <a class="btn-delete" href="javascript:void(0)" @click = ${deleteItem}>Delete</a>
                        <a class="btn-edit" href="/edit/${element._id}">Edit</a>` : null}
                    </div>
                    <p class="likes">Likes: ${likes}</p>
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const likes = await getLikes(id);
    const element = await getById(id);
    const userData = getUserData();

    if(userData){
        element.isOwner = element._ownerId == userData._id;
        const userLike = await getUserLike(id, userData._id);
        ctx.render(detailsTemplate(element, likes, deleteItem, likeItem, userLike))
    }else{
        ctx.render(detailsTemplate(element, likes, deleteItem, likeItem))
    }
    

    async function deleteItem(e){
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/profile')
        }   
    }

    async function likeItem(e){
        e.preventDefault();
        like(element._id);
        ctx.page.redirect(`/details/${id}`)
    }
}