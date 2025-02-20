import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll, getMembers, getMembersByTeam } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

//TODO Replace with actual view

const myTeamsTemplate = (myTeam) => html`
<section id="my-teams">

<article class="pad-med">
    <h1>My Teams</h1>
</article>

<article class="layout narrow">
    ${myTeam.length == 0 ? html`<div class="pad-med">
        <p>You are not a member of any team yet.</p>
        <p><a href="/teamsPage">Browse all teams</a> to join one, or use the button bellow to cerate your own
            team.</p>
    </div>` : null}
    <div class=""><a href="/create" class="action cta">Create Team</a></div>
</article>

${myTeam.length > 0 ? html`
${myTeam.map(team => html`
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
` : null}

</section>
`;

export async function myTeamsPage(ctx){
    const teams = await getAll();
    const user = getUserData();
    const myTeam = teams.filter(el => el._ownerId == user._id);

    for(const el of myTeam){
        let member = await getMembersByTeam(el._id);
        member = member.filter(el => el.status == 'member');
        el.members = member.length;
    };

    ctx.render(myTeamsTemplate(myTeam))
}