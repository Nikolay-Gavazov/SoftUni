import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { checkLike, del, getById, getLike, likeBook } from "../src/data/data.js";
import { getUserData } from "../src/util.js";


const detailsTemplate = (book, likes, deleteBook, like, userData, userLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${book.isOwner ? html `
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" href="javascript:void(0)" @click = ${deleteBook}>Delete</a>
            ` : null}

            ${!book.isOwner && userData && userLike == 0 ? html `
            <a class="button" href="javascript:void(0)" @click = ${like}>Like</a>
            ` : null}

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userData = getUserData();
    const book = await getById(id);
    const likes = await getLike(book._id);
   if(userData){
    const userLike = await checkLike(book._id, userData._id)
    book.isOwner = book._ownerId == userData._id;
    ctx.render(detailsTemplate(book, likes, deleteBook, like, userData, userLike))
    }else{  
       ctx.render(detailsTemplate(book, likes, deleteBook, like,))

   }


    async function deleteBook(e){
        e.preventDefault()
        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/')
        }
    }

    async function like(e){
        e.preventDefault()
        likeBook(book._id);
        ctx.page.redirect(`/details/${book._id}`)
    }
}