import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getUserPosts } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const myPostsTemplate = (elements) => html`
<section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            ${elements.length > 0 ? html `
            <div class="my-posts">
                ${elements.map(el => html`
                <div class="post">
                    <h2 class="post-title">${el.title}</h2>
                    <img class="post-image" src="${el.imageUrl}" alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${el._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
                `)}
            </div>
            ` : html `
            <h1 class="title no-posts-title">You have no posts yet!</h1>
            `}
        </section>
`;

export async function myPostsPage(ctx) {
    const userData = getUserData();
    const elements = await getUserPosts(userData._id);
    ctx.render(myPostsTemplate(elements))
}