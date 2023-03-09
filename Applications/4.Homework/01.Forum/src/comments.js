import { postUrl } from "./posts.js";

export const parentDiv = document.querySelector('.container');
const commentsUrl = 'http://localhost:3030/jsonstore/collections/myboard/comments';


export async function openPost(e) {
    e.preventDefault();
    if (!e.target.id) return
    try {
        const res = await fetch(`${postUrl}/${e.target.id}`);

        if (!res.ok) {
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
        <p><span>${data.username}</span> posted on <time>${data.date}</time></p>
        <p class = 'post-content'>${data.content}</p>
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
        throw error
    }
}

async function loadComents(id) {
    try {
        const res = await fetch(commentsUrl)

        if (!res.ok) {
            const error = await res.json();
            throw Error(error.message);
        }
        const data = await res.json();
        Object.values(data).forEach(el => {
            if (id == el.id) {
                const commentDiv = document.createElement('div')
                commentDiv.className = 'user-comment';
                commentDiv.innerHTML = `
                <div class="topic-name-wrapper">
                <div class='topic-name'>
                <p><strong>${el.username}</strong> commented on <time>${el.date}</time></p>
                <div class = 'post-content'>
                <p>${el.content}</p>
                </div>
                </div>
                </div>
                `;
                document.querySelector('.comment').appendChild(commentDiv);
            }
        });
    } catch (error) {
        alert(error.message)
        throw error
    }
}

async function createNewComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const content = formData.get('postText');
    const username = formData.get('username');

    try {
        if (!content || !username) throw Error('All fields are required!');
        const res = await fetch(commentsUrl, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                content,
                username,
                id: e.target.id,
                date: new Date()
            })
        })

        if (!res.ok) {
            const error = await res.json();
            throw Error(error.message)
        }
        openPost(e)
    } catch (error) {
        alert(error.message)
        throw error
    }

}



