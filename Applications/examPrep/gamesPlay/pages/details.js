import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById, getComments, makeComment} from "../src/data/data.js";
import { createSubmitHandler, getUserData } from "../src/util.js";

const detailsTemplate = (element,deleteItem,comments, onSubmit) => html`
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${element.imageUrl}" />
                    <h1>${element.title}</h1>
                    <span class="levels">MaxLevel: ${element.maxLevel}</span>
                    <p class="type">${element.category}</p>
                </div>

                <p class="text">
                ${element.summary}
                </p>

                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length > 0 ? html `
                    <ul>
                        ${comments.map(comment => html `
                        <li class="comment">
                            <p>${comment}</p>
                        </li>
                        `)}  
                    </ul>
                    ` : html `
                    <p class="no-comment">No comments.</p>
                    `}
                </div>

                ${element.isOwner ? html `
                <div class="buttons">
                    <a href="/edit/${element._id}" class="button">Edit</a>
                    <a href="javascript:void(0)" class="button" @click = ${deleteItem}>Delete</a>
                </div>
                ` : null}
                
            </div>
            ${userData && !element.isOwner ? html `
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit = ${onSubmit}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
            ` : null}
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const comments = await getComments(id);
    const element = await getById(id);
    const userData = getUserData();
 
    if(userData){
        element.isOwner = element._ownerId == userData._id;
    }
        ctx.render(detailsTemplate(element, deleteItem,comments, createSubmitHandler(onSubmit)))


    async function deleteItem(e){
        e.preventDefault();
        const confirmation = confirm('Are you sure?');
        if(confirmation){
            del(id);
            ctx.page.redirect('/catalog')
        }   
    }

    async function onSubmit({comment}, form){
        if(comment == ''){
            return alert('All fields are required')
        }
        await makeComment(id, comment);
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }

}