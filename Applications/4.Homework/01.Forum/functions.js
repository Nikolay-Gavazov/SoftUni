import { form, parentDiv,main, postContainer } from "./app.js";

export async function openPost(e){
    e.preventDefault();
    if(!e.target.id) return
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${e.target.id}`);

        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        
        const data = await res.json()
        const div = document.createElement('div');
        div.className = 'theme-content';
        div.innerHTML = `
        <div class="theme-title">
        <div class="theme-name-wrapper">
        <div class="theme-name">
        <h2>${data.title}</h2>
        </div>
        </div>
        </div>
        <div class="comment">
        <div class='header'>
        <img src='./static/profile.png' alt='avatar'>
        <p><span>${data.userName}</span> posted on <time>${data.date}</time></p>
        <p class = 'post-content'>${data.post}</p>
        </div>
        </div>
        <div class="answer-comment">
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
        <form id = '${data._id}'>
        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
        <div>
        <label for="username">Username <span class="red">*</span></label>
        <input type="text" name="username" id="username">
        </div>
        <button>Post</button>
        </form>
        </div>
        </div>
        `;
        div.querySelector('form').addEventListener('submit', createNewComment);
        parentDiv.replaceChildren(div);
        loadComents(e.target.id)
    } catch (error) {
        alert(error.message)
    }
}

export async function loadComents(id){
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`)

        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        const data = await res.json();
        Object.values(data).forEach(el => {
            if(id == el.id){
                const commentDiv = document.createElement('div')
                commentDiv.className = 'user-comment';
                commentDiv.innerHTML = `
                <div class='topic-name'>
                <p><strong>${el.userName}</strong> commented on <time>${el.date}</time></p>
                <div class = 'post-content'>
                <p>${el.post}</p>
                </div>
                </div>
                `;
                const form = document.querySelector('comment');
                document.querySelector('.theme-content').insertBefore(commentDiv, form);
            }
        });
    } catch (error) {
        alert(error.message)
    }
}

export async function createNewComment(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const post = formData.get('postText');
    const userName = formData.get('username');
    
    try {
        if(!post || !userName) throw Error('All fields are required!');
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                post,
                userName,
                id: e.target.id,
                date: new Date()
            })
        })
        
        if(!res.ok){
            const error = await res.json();
            throw Error(error.message)  
        }
        openPost(e)
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
    parentDiv.replaceChildren(main);
    postContainer.replaceChildren();
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        if(!res.ok){
            const error = await res.json();
            throw Error(error.message);
        }
        const data = await res.json();

        Object.values(data).forEach(el => {
            const div = document.createElement('div');
            div.className = 'topic-name-wrapper';
            div.innerHTML = `
        <div class="topic-name">
        <a href="#" class="normal">
        <h2 id = '${el._id}'>${el.title}</h2>
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