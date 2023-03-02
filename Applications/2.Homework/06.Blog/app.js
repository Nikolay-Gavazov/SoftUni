
function attachEvents() {
    const loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', load);
    const viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', view);
    const options = document.getElementById('posts');
    const p = document.getElementById('post-body');
    const ul = document.getElementById('post-comments');

    async function load(){
        try {
            const responce = await fetch(' http://localhost:3030/jsonstore/blog/posts');
            if(responce.ok == false) throw Error;

            const data = await responce.json();
            for(const el in data){
                console.log(data[el].title);
                const option = document.createElement('option');
                option.value = el;
                option.textContent = data[el].title;
                options.appendChild(option);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function view(){
        try {
            const responce = await fetch(`http://localhost:3030/jsonstore/blog/comments`)
        } catch (error) {
            
        }
    }


}

attachEvents();