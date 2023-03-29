import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";

//TODO

const profileTemplate = (elements) => html`
<!--Profile Page-->
<section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>steven@abv.bg</h2>
            </div>
            <div class="board">
                <!--If there are event-->
                <div class="eventBoard">
                    <div class="event-info">
                        <img src="./images/Moulin-Rouge!-The-Musical.jpg">
                        <h2>Moulin Rouge! - The Musical</h2>
                        <h6>July 10, 2018</h6>
                        <a href="#" class="details-button">Details</a>
                    </div>
                </div>

                <!--If there are no event-->
                <div class="no-events">
                    <p>This user has no events yet!</p>
                </div>
            </div>
        </section>
`;

export async function profilePage(ctx) {
    const elements = await getAll();
    ctx.render(profileTemplate(elements))
}