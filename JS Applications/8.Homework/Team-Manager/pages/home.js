import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../src/util.js";

//TODO Replace with actual view

const homeTemplate = (user) => html`
<section id="home">
                <article class="hero layout">
                    <img src="./assets/team.png" class="left-col pad-med">
                    <div class="pad-med tm-hero-col">
                        <h2>Welcome to Team Manager!</h2>
                        <p>Want to organize your peers? Create and manage a team for free.</p>
                        <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                        ${!user ? html`<a href="/login" class="action cta">Sign Up Now</a>` : 
                        html`<a href="/browsePage" class="action cta">Browse Teams</a>`}
                        
                    </div>
                </article>
            </section>
`;

export function homePage(ctx){
    const user = getUserData()
    ctx.render(homeTemplate(user))
}