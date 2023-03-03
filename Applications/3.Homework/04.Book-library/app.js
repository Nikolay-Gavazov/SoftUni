document.getElementById('loadBooks').addEventListener('click', load);
const inputForm = document.querySelector('form');
const formBtn = inputForm.querySelector('button')
formBtn.addEventListener('click', submit);
const formData = inputForm.querySelectorAll('input')
let formTitle = formData[0];
let formAuthor = formData[1];
const tbody = document.querySelector('tbody');



async function submit(event){
    event.preventDefault();
    if(formBtn.innerText != 'Submit'){
        return;
    }
    try {
    if(!formTitle.value || ! formAuthor.value){
        throw Error('All fields are requared!')
    }

    const res = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({author: formAuthor.value, title: formTitle.value})
    })
    if(!res.ok){
        const error = await res.json();
        throw error;
    }
    } catch (error) {
        alert(error);
    }


    inputForm.reset();
}


async function load(){
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/books');
        if(!res.ok){
            const error = await res.json();
            throw error;
        }
        const data = await res.json();
        tbody.replaceChildren();
        Object.entries(data).forEach(el => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td')
            td1.textContent = `${el[1].title}`;
            const td2 = document.createElement('td')
            td2.textContent = `${el[1].author}`
            const td3 = document.createElement('td')
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = `${el[0]}`;
            editBtn.addEventListener('click', edit);
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = `${el[0]}`;
            deleteBtn.addEventListener('click', del);
            td3.appendChild(editBtn);
            td3.appendChild(deleteBtn);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);
        });
        
    } catch (error) {
        alert(error);
    }
    inputForm.reset();
}

async function edit(event){
    inputForm.querySelector('h3').innerText = 'Edit FORM';
    formBtn.innerText = 'Save';
    formBtn.addEventListener('click', save);
    formBtn.className = event.target.className;
    const bookData = event.target.parentElement.parentElement.children;
    const title = bookData[0].textContent;
    const author = bookData[1].textContent;
    formTitle.innerHTML = '';
    formTitle.value = title;
    formAuthor.value = author;
}

async function del(event){
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${event.target.className}`,{
        method: 'delete'
    }
    )
    if(!res.ok){
        const error = await res.json();
        throw error
    }
    } catch (error) {
        alert(error.messege)
    }
    inputForm.reset();
}

async function save(event){
    try {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${event.target.className}`,{
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({author: formAuthor.value, title: formTitle.value})
    })
    if(!res.ok){
        const error = await res.json();
        throw error
    }
    } catch (error) {
        alert(error.messege);
    }

    inputForm.reset();
}