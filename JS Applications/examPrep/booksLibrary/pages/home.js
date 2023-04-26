import { html } from "../node_modules/lit-html/lit-html.js";
import { getAllSorted } from "../src/data/data.js";


const homeTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length > 0 ? html`
    ${books.map(book => html`
    <ul class="other-books-list">
        <li class="otherBooks">
            <h3>${book.title}</h3>
            <p>Type: ${book.type}</p>
            <p class="img"><img src="${book.imageUrl}"></p>
            <a class="button" href="/details/${book._id}">Details</a>
        </li>
    </ul>
    `)}
    ` : html`
    <p class="no-books">No books in database!</p>
    `}

</section>
`;

export async function homePage(ctx) {
    const books = await getAllSorted();
    ctx.render(homeTemplate(books))
}