import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";

const browseTemplate = (teams) => html`
    <section id="browse">

<article class="pad-med">
    <h1>Team Browser</h1>
</article>

<article class="layout narrow">
    <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
</article>

${teams.map(el => html`
<article class="layout">
    <img src="./assets/atat.png" class="team-logo left-col">
    <div class="tm-preview">
        <h2>Storm Troopers</h2>
        <p>These ARE the droids we're looking for</p>
        <span class="details">5000 Members</span>
        <div><a href="#" class="action">See details</a></div>
    </div>
</article>
`)}

</section>
`

export async function browsePage(ctx){
    const teams = await getAll();
    ctx.render(browseTemplate(teams))
}