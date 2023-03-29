import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getMyMemes } from "../src/data/data.js";
import { getUserData } from "../src/util.js";



const myPageTemplate = (elements, userData) => html`
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
                <div class="user-content">
                    <p>Username: ${userData.username}</p>
                    <p>Email: ${userData.email}</p>
                    <p>My memes count: ${elements.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${elements.length > 0 ? html `
                ${elements.map(el => html `
                <div class="user-meme">
                    <p class="user-meme-title">${el.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${el.imageUrl}">
                    <a class="button" href="/details/${el._id}">Details</a>
                </div>
                `)}
                
                ` : html `
                <p class="no-memes">No memes in database.</p>
                `}
            </div>
        </section>
`;

export async function myPage(ctx) {
    const userData = getUserData()
    const elements = await getMyMemes(userData._id);
    ctx.render(myPageTemplate(elements, userData))
}


    
    
    