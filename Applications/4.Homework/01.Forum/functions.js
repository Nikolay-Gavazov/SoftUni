import { form, main, postContainer } from "./app.js";

export async function openPost(e){
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');

        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        const postElement = 
        const data = 
    } catch (error) {
        alert(error.message)
    }
}

export async function createPost(e){
    e.preventDefault()
    const data = new FormData(form);
    const title = data.get('topicName');
    const userName = data.get('username');
    const post = data.get('postText');
    try {
        if(!title || !userName || !post)throw Error('All fields are required!')
    
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                userName,
                post,
                date: new Date()})
        })
        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        e.target.reset();
    } catch (error) {
        alert(error.message)
    }
}

export async function loadPost(){
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        const data = await res.json();

        Object.values(data).forEach(el => {
            console.log(el);
            const div = document.createElement('div');
            div.className = 'topic-name-wrapper';
            div.innerHTML = `
        <div class="topic-name">
        <a href="#" class="normal">
        <h2>${el.title}</h2>
        </a>
        <div class="columns">
        <div>
        <p>Date: <time>${el.date}</time></p>
        <div class="nick-name">
        <p>Username: <span>${el.userName}</span></p>
        </div>
        </div>
        </div>
        </div>`;
        div.addEventListener('click', openPost)
        postContainer.appendChild(div);
        });
    } catch (error) {
        alert(error.message)
    }
}