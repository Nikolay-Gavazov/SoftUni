import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll, userEvents } from "../src/data/data.js";
import { getUserData } from "../src/util.js";

const profileTemplate = (events) => html`

<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userData.email}</h2>
    </div>
    <div class="board">
        ${events.length > 0 ? html`
        ${events.map(event => html`
        <div class="eventBoard">
            <div class="event-info">
                <img src="./images/Moulin-Rouge!-The-Musical.jpg">
                <h2>${event.title}</h2>
                <h6>${event.date}</h6>
                <a href="/detailt/${event._id}" class="details-button">Details</a>
            </div>
        </div>
        `)}
        ` : html`
        <div class="no-events">
            <p>This user has no events yet!</p>
        </div>
        `}
    </div>
</section>
`;

export async function profilePage(ctx) {
    const userData = getUserData()
    const events = await userEvents(userData._id);
    ctx.render(profileTemplate(events, userData))
}