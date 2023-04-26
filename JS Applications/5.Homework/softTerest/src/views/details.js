import { deleteById, ideaById } from "../data.js";

const section = document.getElementById('detailsView');

export async function showDetails(context, id){
    const idea = await ideaById(id);
    context.showSection(section)

    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == idea._ownerId;

    section.innerHTML = createIdeaSection(idea, isOwner);
    if(isOwner){
        section.querySelector('#deleteBtn').addEventListener('click', async (e) =>{
            e.preventDefault();
            const choice = confirm('Are you sure?');
            if(choice){
               await deleteById(id);
               context.goTo('/catalog');
            }
        })
    }
}

function createIdeaSection(idea, isOwner){
    let html = `
    <img class="det-img" src="${idea.img}" />
        <div class="desc">
            <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${idea.description}</p>
        </div>`;
   

    if(isOwner){
        html += `
        <div class="text-center">
            <a id='deleteBtn' class="btn detb" href="">Delete</a>
        </div>`;
    }
    return html;
}