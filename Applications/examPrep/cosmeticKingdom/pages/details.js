import { html } from "../../../../node_modules/lit-html/lit-html.js"
import { buy, checkBuy, checkUserBuy, del, getById } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const detailsTemplate = (product, deleteProduct, buyProduct , buyCounter, userBuy) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${product.imageUrl}" alt="example1"/>
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${buyCounter}</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>
        <div id="action-buttons">
            ${product.isOwner ? html `
            <a href="/edit/${product._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click = ${deleteProduct}>Delete</a>
            `: html`
            ${userBuy == 0 ? html `
            <a href="javascript:void(0)" id="buy-btn" @click = ${buyProduct}>Buy</a>` : null}
            `}           
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const product = await getById(id);
    const userData = getUserData();
    const buyCounter = await checkBuy(id);

    if(userData){
        const userBuy = await checkUserBuy(id, userData._id);
        product.isOwner = product._ownerId == userData._id;
        ctx.render(detailsTemplate(product, deleteProduct, buyProduct , buyCounter,userBuy))
    }else{
    ctx.render(detailsTemplate(product, deleteProduct, buyProduct , buyCounter))
    }


    async function deleteProduct(e){
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/catalog')
        }
    }

    async function buyProduct(e){
        e.preventDefault();
        buy(product._id);
        ctx.page.redirect(`/details/${id}`)
    }
}