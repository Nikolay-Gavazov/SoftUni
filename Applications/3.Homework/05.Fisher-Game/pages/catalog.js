import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { create, del, getAll, update } from "../src/data/data.js";
import { getUserData } from "../src/util.js";



const catalogTemplate = (userData, onSubmit, load, catches, updateCatch, deleteCatch) => html`
<section id="home-view">
            <fieldset id="main">
                <legend>Catches</legend>
                ${catches.map(el => html `
                <div id="catches">
                    <div class="catch">
                        <label>Angler</label>
                        <input type="text" class="angler" value="${el.angler}">
                        <label>Weight</label>
                        <input type="text" class="weight" value="${el.weight}">
                        <label>Species</label>
                        <input type="text" class="species" value="${el.species}">
                        <label>Location</label>
                        <input type="text" class="location" value="${el.location}">
                        <label>Bait</label>
                        <input type="text" class="bait" value="${el.bait}">
                        <label>Capture Time</label>
                        <input type="number" class="captureTime" value="${el.captureTime}">
                        ${userData && el._ownerId == userData._id ? html `
                        <button class="update" data-id="${el._id}" @click = ${updateCatch}>Update</button>
                        <button class="delete" data-id="${el._id}" @click = ${deleteCatch}>Delete</button>
                        ` : html `
                        <button disabled class="update" data-id="${el._id}" @click = ${updateCatch}>Update</button>
                        <button disabled class="delete" data-id="${el._id}" @click = ${deleteCatch}>Delete</button>
                        `}
                        
                    </div>
                </div>
                `)}
                
            </fieldset>
            <aside>
                <button class="load" @click = ${load}>Load</button>
                <form id="addForm" @submit = ${onSubmit}>
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

export async function catalogPage(ctx){
    const userData = getUserData()
    load()
    
    async function onSubmit(e){
        e.preventDefault()
        const form = e.target;
        const angler = form.querySelector('.angler').value;
        const weight = form.querySelector('.weight').value;
        const species = form.querySelector('.species').value;
        const location = form.querySelector('.location').value;
        const bait = form.querySelector('.bait').value;
        const captureTime = form.querySelector('.captureTime').value;
        
        if(angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == ''){
            return alert('All fields are required')
        }
        await create({angler, weight, species, location, bait, captureTime});
        form.reset();
        load()
    }

    async function updateCatch(e){
        const id = e.target.getAttribute('data-id');
        const form = e.target.parentElement;
        const angler = form.querySelector('.angler').value;
        const weight = form.querySelector('.weight').value;
        const species = form.querySelector('.species').value;
        const location = form.querySelector('.location').value;
        const bait = form.querySelector('.bait').value;
        const captureTime = form.querySelector('.captureTime').value;

        if(angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == ''){
                return alert('All fields are required')
            }
        await update(id, {angler, weight, species, location, bait, captureTime});

    }

    async function deleteCatch(e){

        const id = e.target.getAttribute('data-id');
        await del(id);
        load()
    }
    async function load(){
        const catches = await getAll();
        ctx.render(catalogTemplate(userData, onSubmit, load, catches, updateCatch, deleteCatch))
    }
}