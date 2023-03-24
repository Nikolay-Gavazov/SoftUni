import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll, getMembersByTeam } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const browseTemplate = (teams, user) => html`
    <section id="browse">

<article class="pad-med">
    <h1>Team Browser</h1>
</article>

${user ? html `<article class="layout narrow">
    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
</article>` : null}

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
    const user = getUserData()
    for(const el of teams){
        let member = await getMembersByTeam(el._id);
        member = member.filter(el => el.status == 'member');
        el.members = member.length;
    };

    ctx.render(browseTemplate(teams, user))
}