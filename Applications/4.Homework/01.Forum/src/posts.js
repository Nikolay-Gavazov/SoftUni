import { openPost} from "./comments.js";

document.querySelector('#comment-section').style.display = 'none';
const parentDiv = document.querySelector('.container');
const main = document.querySelector('main');
const form = document.querySelector('form');
form.addEventListener('submit', createPost);
form.reset();
form.querySelector('.cancel').addEventListener('click', (e)=>{
    e.preventDefault();
    form.reset();
})
const postUrl = 'http://localhost:3030/jsonstore/collections/myboard/posts'

async function createPost(e){
    e.preventDefault();

    const formInput = new FormData(e.target);
    const formData = Object.fromEntries(formInput.entries());

    const title = formData.topicName;
    const username = formData.username;
    const content = formData.postText;
    try {
        if(!title || !username || !content) return alert('All fields must be filled');
    
        const res = await fetch(postUrl ,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                username,
                content,
                date: new Date()})
        })
        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        form.reset();
        loadPost()
    } catch (error) {
        alert(error.message)
        throw error
    }
}

export async function loadPost(){
    parentDiv.replaceChildren(main);
    const topics = document.querySelector('.topic-title');
    topics.replaceChildren();
    try {
        const res = await fetch(postUrl);

        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        const data = await res.json();

        Object.values(data).forEach(el => {
            const div = document.createElement('div');
            div.className = 'topic-container';
            div.innerHTML = `
        <div class="topic-name-wrapper">
        <div class="topic-name">
        <a href="#" class="normal">
        <h2 id = '${el._id}'>${el.title}</h2>
        </a>
        <div class="columns">
        <div>
        <p>Date: <time>${el.date}</time></p>
        <div class="nick-name">
        <p>Username: <span>${el.username}</span></p>
        </div>
        </div>
        </div>
        </div>
        </div>`;
        div.addEventListener('click', openPost)
        
        topics.appendChild(div);
        });
    } catch (error) {
        alert(error.message)
        throw error
    }
}