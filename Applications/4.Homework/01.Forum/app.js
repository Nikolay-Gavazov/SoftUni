import { createPost, loadPost } from "./functions.js";

window.addEventListener('load', loadPost);
export const main = document.querySelector('main');

export const form = main.querySelector('form');
document.querySelector('.cancel').addEventListener('click', (e)=>{
    e.preventDefault();
    form.reset();
})
document.querySelector('.public').addEventListener('click', createPost);

export const postContainer = document.querySelector('.topic-container');






