import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { approvingMember, getById, getCurrentMember, getMembersByTeam, removeRequest, sendRequest } from "../src/data/data.js";
import { getUserData } from "../src/util.js";


const detailsTemplate = (team, approvedMembers,memberOfCurrentTeam,unApprovedMembers, cancelRequest, joinTeam, approve,user) => html`
<section id="team-home">
                <article class="layout">
                    <img src="${team.logoUrl}" class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${team.name}</h2>
                        <p>${team.description}</p>
                        <span class="details">${approvedMembers.length}</span>
                        <div>
                           ${user ? html`
                           ${team.isOwner ? html`<a href="/edit/${team._id}" class="action">Edit team</a>` : 
                            html`${memberOfCurrentTeam.length == 0 ? html`
                            <a href="javascript:void(0)" class="action" @click = ${joinTeam}>Join team</a>` :
                            html`${memberOfCurrentTeam[0].status == 'member' ? html `
                            <a href="javascript:void(0)" class="action invert" id = ${memberOfCurrentTeam[0]._id} @click = ${cancelRequest}>Leave team</a>` :
                            html`Membership pending. <a href="javascript:void(0)" id = ${memberOfCurrentTeam[0]._id} @click = ${cancelRequest}>Cancel request</a>`}`}`}
                           ` : null}
                            
                        </div>
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            ${approvedMembers.length > 0 ? html`
                            ${approvedMembers.map(member => html`
                            <li>${member.user.username}${team._ownerId != member._ownerId ? html `
                            ${user && team._ownerId == user._id ? html `<a href="javascript:void(0)" class="tm-control action">Remove from team</a>` : null}`
                             : null}</li>`)}`: null}
                        </ul>
                    </div>
                    ${team.isOwner ? html`
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            ${unApprovedMembers.map(member => html `
                            <li>${member.user.username}<a href="javascript:void(0)" class="tm-control action" id=${member._id} @click = ${approve}>Approve</a>
                            <a href="javascript:void(0)" class="tm-control action" id=${member._id} @click = ${cancelRequest}>Decline</a></li>`)}
                        </ul>
                    </div>
                    ` : null}
                </article>
            </section>
`;

export async function detailsPage(ctx){

    const id = ctx.params.id;
    const team = await getById(id);
    const members = await getMembersByTeam(id);
    const approvedMembers = members.filter(el => el.status == 'member');
    const unApprovedMembers = members.filter(el => el.status != 'member');
    
    const user = getUserData();
    
    if(user){
        const userMembership = await getCurrentMember(user._id);
        team.isOwner = team._ownerId == user._id;
        const memberOfCurrentTeam = userMembership.filter(el=>el.teamId == team._id);
        ctx.render(detailsTemplate(team, approvedMembers, memberOfCurrentTeam, unApprovedMembers, cancelRequest, joinTeam, approve, user))
    }else{
        ctx.render(detailsTemplate(team, approvedMembers))
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

    async function approve(e){
        e.preventDefault()
        const id = e.target.id;
        approvingMember(id, {'status': 'member'})
        ctx.page.redirect(`/details/${team._id}`)
    }
}



