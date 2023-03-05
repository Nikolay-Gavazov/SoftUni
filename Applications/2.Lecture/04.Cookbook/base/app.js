window.addEventListener('load', start);

function start(e){
    e.preventDefault();
    loadRepos();
    const main = document.querySelector('main');
    main.innerHTML = '';


    async function loadRepos() {
        
        try{
            const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
            if(response.ok == false){
            throw `${response.status}: ${response.statusText}`;
            
            }
            const data = await response.json();
            main.replaceChildren();
            for(let el in data){
                const article = document.createElement('article');
                article.className = 'preview';
                article.id = data[el]._id;
                article.innerHTML = `
            <div class="title">
            <h2>${data[el].name}</h2>
            </div>
            <div class="small">
                <img src="${data[el].img}">
            </div>
                `;
            article.addEventListener('click', recipeInfo);
            main.appendChild(article);
            }
        }catch(error){
            main.innerHTML = `<p>${error}</p>`;
    }


    async function recipeInfo(e){
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${e.target.id}`);
            if(!res.ok) throw Error 

            const data = await res.json();
            const ingredients = data.ingredients;
            const steps = data.steps;
            const article = document.createElement('article');
            article.innerHTML += `
        <h2>${data.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src="${data.img}">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul></ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
        </div>`;
        for(const el in ingredients){
            const li = document.createElement('li');
            li.textContent = ingredients[el];
            article.querySelector('ul').appendChild(li);
        }
        for(const el in steps){
            const p = document.createElement('p');
            p.textContent = steps[el];
            article.querySelector('.description').appendChild(p);
        }
        main.replaceChildren();
        main.appendChild(article)
        } catch (error) {
            alert(error.message);
        }
    }   
    }
}