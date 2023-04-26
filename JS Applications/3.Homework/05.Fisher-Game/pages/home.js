import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../src/util.js";


const homeTemplate = (userData, load) => html`
<section id="home-view">
            <fieldset id="main">
                <p>Click to load cathes</p>
            </fieldset>
            <aside>
                <button class="load" @click = ${load}>Load</button>
                <form id="addForm">
                    <fieldset>
                        <legend>Add Catch</legend>
                        <label>Angler</label>
                        <input type="text" name="angler" class="angler" />
                        <label>Weight</label>
                        <input type="number" name="weight" class="weight" />
                        <label>Species</label>
                        <input type="text" name="species" class="species" />
                        <label>Location</label>
                        <input type="text" name="location" class="location" />
                        <label>Bait</label>
                        <input type="text" name="bait" class="bait" />
                        <label>Capture Time</label>
                        <input type="number" name="captureTime" class="captureTime" />
                        ${userData ? html `
                        <button class="add">Add</button>
                        ` : html `
                        <button disabled class="add">Add</button>
                        `}
                    </fieldset>
                </form>
            </aside>
        </section>
`;


export async function homePage(ctx){
    const userData = getUserData()
    ctx.render(homeTemplate(userData, load))
    if(userData){
        load()
    } 
    async function load(){
        ctx.page.redirect('/catalog')
    }
    
}