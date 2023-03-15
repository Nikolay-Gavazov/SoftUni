import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "./src/api.js";
import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { mainTemplate } from "./src/templates/mainTemplate.js";
import { tableRowsTemplate } from "./src/templates/tableTemplate.js";
import { editFunction } from "./src/actions.js";

const body = document.querySelector('body');
render(mainTemplate(), body);

body.querySelector('#loadBooks').addEventListener('click', async () =>{
    const booksData = await getAllBooks();
    const section = body.querySelector('table tbody');
    const books = [];
    for(const id in booksData){
        books.push({
            author: booksData[id].author,
            title: booksData[id].title,
            _id: id
        })
    }
    const context = {
        books,
        deleteFunction,
        editFunction
    }
    render(tableRowsTemplate(context), section);
})

const addForm = document.querySelector('#add-form');
addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addForm);
    const author = formData.get('author')
    const title = formData.get('title')

    if(!author || !title){
        return alert('All fields are required!');
    }
    const book = {
        author,
        title
    }

    await createBook(book).then(data => {
        addForm.reset();
        body.querySelector('#loadBooks').click();
    })
})

const editForm = body.querySelector('#edit-form')
editForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(editForm);

    const id = formData.get('id')
    const author = formData.get('author')
    const title = formData.get('title')

    if(!title || ! author){
        return alert('All fields are required!');
    }
    const book = {
        author,
        title
    }

    updateBook(id, book).then(data =>{
        body.querySelector('#loadBooks').click();
        editForm.style.display = 'none';
        editForm.reset();
        addForm.style.display = 'block';
    })

})



function deleteFunction(id){
    deleteBook(id)
    document.querySelector('#loadBooks').click();
}
