const main = document.querySelector('main');

const form = main.querySelector('form');
document.querySelector('.cancel').addEventListener('click', (e)=>{
    e.preventDefault();
    form.reset();
})
document.querySelector('.public').addEventListener('click', createPost);


export async function createPost(){
    const data = new FormData(form);
    const title = data.get('topicName');
    const userName = data.get('username');
    const post = data.get('postText');
    try {
        if(!title || !userName || !post)throw Error('All fields are required!')
    
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    } catch (error) {
        alert(error.message)
    }
}

