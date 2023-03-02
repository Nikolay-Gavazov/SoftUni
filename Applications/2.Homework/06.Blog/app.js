
function attachEvents() {
    const loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', load);
    const viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', view);
    const options = document.getElementById('posts');
    const h1 = document.getElementById('post-title');
    const p = document.getElementById('post-body');
    const ul = document.getElementById('post-comments');
    
    const details = {};
    const title = {};

    async function load(){
        options.replaceChildren();
        try {
            const responce = await fetch(' http://localhost:3030/jsonstore/blog/posts');
            if(responce.ok == false) throw Error;

            const data = await responce.json();
            for(const el in data){
                
                details[el] = data[el].body
                title[el] = data[el].title;
                const option = document.createElement('option');
                option.value = data[el].id;
                option.textContent = data[el].title;
                options.appendChild(option);
            }
        } catch (error) {
            alert(error.massege)
        }
    }

    async function view(){
        h1.textContent = 'Post Details';
        p.textContent = '';
        ul.replaceChildren();
        try {
            const responce = await fetch(`http://localhost:3030/jsonstore/blog/comments/`)
            if(responce.ok == false) throw Error;
        
            const data = await responce.json();
            h1.textContent = title[options.value];
            p.textContent = details[options.value];
            for(const el in data){
                if(data[el].postId == options.value){
                    const li = document.createElement('li');
                    li.id = data[el].id;
                    li.textContent = data[el].text;
                    ul.appendChild(li);
                }
            }
        } catch (error) {
            alert(error.massege)
        }
    }


}

attachEvents();