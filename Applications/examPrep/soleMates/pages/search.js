import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { searchItem } from "../src/data/data.js";
import { createSubmitHandler, getUserData } from "../src/util.js";


const searchTemplate = (onSubmit,) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit = ${onSubmit}>
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
</section>
`;
const resultTemplate = (results, onSubmit, userData) => html `
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit = ${onSubmit}>
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    <div id="search-container">
        ${results.length > 0 ? html `
        <ul class="card-wrapper">
            ${results.map(el => html `
            <li class="card">
                <img src="${el.imageUrl}" alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${el.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${el.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${el.value}</span>$</p>
                ${userData ? html `
                <a class="details-btn" href="/details/${el._id}">Details</a>
                ` : null}
                
            </li>
            `)}
        </ul>
        ` : html `
        <h2>There are no results found.</h2>
        `}
    </div>
</section>
    
`;

export function searchPage(ctx) {
    const userData = getUserData();
    ctx.render(searchTemplate((createSubmitHandler(onSubmit))));
    

    async function onSubmit({search}, form){
        
        if(search == ''){
            return alert('Search field is required!')
        }
        const results = await searchItem(search);

        ctx.render(resultTemplate(results, (createSubmitHandler(onSubmit)), userData));
        
    }
}