import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { searchItem } from "../src/data/data.js";




const searchTemplate = (searching) => html`
<h2>Fruits</h2>
<section id="search">

        <div class="form" >
          <h2>Search</h2>
          <form class="search-form">
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list" @click = ${searching}>Search</button>
          </form>
        </div>
        <h4>Results:</h4>
        
        </section>
`;

const resultTemplate = (result, searching) => html`
<h2>Fruits</h2>
<section id="search">

        <div class="form">
          <h2>Search</h2>
          <form class="search-form">
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list" @click = ${searching}>Search</button>
          </form>
        </div>
        <h4>Results:</h4>
          <div class="search-result">
        ${result.length == 0 ? html `
        <p class="no-result">No result.</p>
        ` : html `
        ${result.map(el => html `
        <div class="fruit">
          <img src="${el.imageUrl}" alt="example1" />
          <h3 class="title">${el.name}</h3>
          <p class="description">${el.description}</p>
          <a class="details-btn" href="/details/${el._id}">More Info</a>
        </div>
        `)}
        `}
          </div>
                </section>
`;


export async function searchPage(ctx) {
    ctx.render(searchTemplate(searching));
    
    async function searching(e) {
        e.preventDefault()
        const data = document.getElementById('search-input')
        if (data.value == '') {
            return alert('Search field is required')
        }
        const result = await searchItem(data.value);
        ctx.render(resultTemplate(result, searching));
    }
}