import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { searchCar } from "../src/data/data.js";

const searchTemplate = (searching) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
    
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button class="button-list" @click = ${searching}>Search</button>
        </div>
    
        <h2>Results:</h2>   
    </section>
`;

const resultTemplate = (data, searching) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
    
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button class="button-list" @click = ${searching}>Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="listings">
    
            ${data.length > 0 ? html `
            ${data.map(car => html `
        <div class="listing">
            <div class="preview">
                <img src="${car.imageUrl}">
            </div>
            <h2>${car.brand} ${car.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${car.year}</h3>
                    <h3>Price: ${car.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href="/details/${car._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>
        `)}
            ` : html `
            <p class="no-cars">No matching listings</p>
            `}
        </div>
    </section>
`;

export async function searchPage(ctx) {
ctx.render(searchTemplate(searching))

    async function searching(e){
        e.preventDefault
        const input = document.getElementById('search-input');
        const data = await searchCar(input.value)
        ctx.render(resultTemplate(data, searching))
    }
}