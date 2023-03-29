import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { del, getById} from "../src/data/data.js";
import { createSubmitHandler, getUserData } from "../src/util.js";

const detailsTemplate = (element,deleteItem, onSubmit) => html`
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

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
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

    const element = await getById(id);
    const userData = getUserData();
 
    if(userData){
        element.isOwner = element._ownerId == userData._id;
    }
        ctx.render(detailsTemplate(element, deleteItem, createSubmitHandler(onSubmit)))


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
        await create({title, category, maxLevel, imageUrl, summary});
        form.reset();

        ctx.page.redirect(`/details/${id}`)
    }

}