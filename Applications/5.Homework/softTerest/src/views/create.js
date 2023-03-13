import { createIdea } from "../data.js";

const section = document.getElementById('createView');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showCreate(context){
    ctx = context;
    context.showSection(section)
    
}

async function onSubmit(e){
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageURL');
    form.reset();
    await createIdea({
        title,
        description,
        img
    })
    
    ctx.goTo('/catalog');
}

