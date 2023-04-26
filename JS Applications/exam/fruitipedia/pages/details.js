import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (element, deleteItem) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${element.imageUrl}" alt="example1" />
            <p id="details-title">${element.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${element.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${element.nutrition}</p>
              </div>
            ${element.isOwner ? html `
            <div id="action-buttons">
            <a href="/edit/${element._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click = ${deleteItem}>Delete</a>
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