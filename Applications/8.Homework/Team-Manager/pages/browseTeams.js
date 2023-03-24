import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll, getMembersByTeam } from "../src/data/data.js";

const browseTemplate = (teams) => html`
    <section id="browse">

<article class="pad-med">
    <h1>Team Browser</h1>
</article>

<article class="layout narrow">
    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>

${teams.map(team => html`
<article class="layout">
    <img src="${team.logoUrl}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.members}</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>
`)}

</section>
`

export async function browsePage(ctx){
    const teams = await getAll();

    for(const el of teams){
        const members = await getMembersByTeam(el._id);
        el.members = members.length;
    };

    ctx.render(browseTemplate(teams))
}