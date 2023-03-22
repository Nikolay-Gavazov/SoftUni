import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { deleteFurniture, getFurnitureDetails } from "../src/data.js";

const detailsTemplate = (furniture, onDelete) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${furniture.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furniture.make}</span></p>
                <p>Model: <span>${furniture.model}</span></p>
                <p>Year: <span>${furniture.year}</span></p>
                <p>Description: <span>${furniture.description}</span></p>
                <p>Price: <span>${furniture.price}</span></p>
                <p>Material: <span>${furniture.material}</span></p>
                <div>
                    ${furniture.isOwner && html`<a href='/edit/:id' class="btn btn-info">Edit</a>
                    <a @click = ${onDelete} href='javascript:void(0)' class="btn btn-red">Delete</a>`}
                </div>
            </div>
        </div>
`;
export async function detailsPage(ctx){
    const id = ctx.params.id;
    const furniture = await getFurnitureDetails(id);
    const userData = JSON.parse(localStorage.getItem('userData'));
    furniture.isOwner = furniture._ownerId == userData._id;
    ctx.render(detailsTemplate(furniture, onDelete))

    async function onDelete(){
        const confirmation = confirm('Are you sure?')
        if(confirmation){
            deleteFurniture(id);
            ctx.page.redirect('/');
        }
        
    }
}