import { html } from "../node_modules/lit-html/lit-html.js";
import { getMyFurniture } from "../src/data.js";

const myFurnitureTemplate = (furniture) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
        ${furniture.map(el => html`
        <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${el.img}" />
                            <p>${el.description}</p>
                            <footer>
                                <p>Price: <span>${el.price} $</span></p>
                            </footer>
                            <div>
                                <a href='/details/${el._id}' class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
        `)}
        </div>
`
export async function myFurniturePage(ctx){
    ctx.updateNav();
    const user = JSON.parse(localStorage.getItem('userData'));
    const id = user._id;
    const furniture = await getMyFurniture(id);
    ctx.render(myFurnitureTemplate(furniture));
}