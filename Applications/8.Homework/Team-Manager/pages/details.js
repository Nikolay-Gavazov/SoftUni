import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getById, getCurrentMember, getMembersByTeam, removeRequest, sendRequest } from "../src/data/data.js";
import { getUserData } from "../src/util.js";


const detailsTemplate = (team, members, user, memberOfCurrentTeam, leaveTeam, cancelRequest, joinTeam) => html`
<section id="team-home">
                <article class="layout">
                    <img src="${team.logoUrl}" class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${team.name}</h2>
                        <p>${team.description}</p>
                        <span class="details">${members.length}</span>
                        <div>
                           ${user ? html`
                           ${team.isOwner ? html`<a href="/edit/${team._id}" class="action">Edit team</a>` : 
                            html`${memberOfCurrentTeam.length == 0 ? html`
                            <a href="javascript:void(0)" class="action" @click = ${joinTeam}>Join team</a>` :
                            html`${memberOfCurrentTeam[0].status == 'member' ? html `
                            <a href="javascript:void(0)" class="action invert" id = ${memberOfCurrentTeam[0]._id} @click = ${leaveTeam}>Leave team</a>` :
                            html`Membership pending. <a href="javascript:void(0)" id = ${memberOfCurrentTeam[0]._id} @click = ${cancelRequest}>Cancel request</a>`}`}`}
                           ` : null}
                            
                        </div>
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            ${members.length > 0 ? html`
                            ${members.map(member => html`
                            <li>${member.user.username}${team._ownerId != member._ownerId ? html `
                            ${user && team._ownerId == user._id ? html `
                            <a href="javascript:void(0)" class="tm-control action">Remove from team</a>` : null}`
                             : null}</li>`)}`: null}
                        </ul>
                    </div>
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                            <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                                    class="tm-control action">Decline</a></li>
                        </ul>
                    </div>
                </article>
            </section>
`;

export async function detailsPage(ctx){

    const id = ctx.params.id;
    const team = await getById(id);
    const members = await getMembersByTeam(id);
    const user = getUserData();
    const userMembership = await getCurrentMember(user._id)
    const memberOfCurrentTeam = userMembership.filter(el=>el.teamId == team._id);
    team.isOwner = team._ownerId == user._id;
    console.log(Object.values(memberOfCurrentTeam));
    ctx.render(detailsTemplate(team, members, user, memberOfCurrentTeam, leaveTeam, cancelRequest, joinTeam))

    async function leaveTeam(e){
        e.preventDefault();
        const id = e.target.id;
        console.log(id);
    }

    async function cancelRequest(e){
        e.preventDefault()
        const id = e.target.id;
        removeRequest(id);
        ctx.page.redirect(`/details/${team._id}`)
    }

    async function joinTeam(e){
        e.preventDefault();
        sendRequest({'teamId': team._id});
        ctx.page.redirect(`/details/${team._id}`)
    }
}



