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
    try {
        
    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageURL');
    if(!title || !description || !img){
        throw Error('All fields are required!');
    }
    if(title.length < 6){
        throw Error('Title is too short');
    }
    if(description.length < 10){
        throw Error('Description is too short');
    }
    if(img.length < 5){
        throw Error('Img is too short');
    }
    form.reset();
    await createIdea({
        title,
        description,
        img
    })
    
    ctx.goTo('/catalog');
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

