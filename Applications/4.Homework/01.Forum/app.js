import { createPost, loadPost } from "./functions.js";

window.addEventListener('load', loadPost);
document.querySelector('a').addEventListener('click', loadPost)
export const parentDiv = document.querySelector('.container');
export const main = parentDiv.querySelector('main');
export const form = parentDiv.querySelector('form');
document.querySelector('.cancel').addEventListener('click', (e)=>{
    e.preventDefault();
    form.reset();
})
document.querySelector('.public').addEventListener('click', createPost);

export const postContainer = document.querySelector('.topic-container');






