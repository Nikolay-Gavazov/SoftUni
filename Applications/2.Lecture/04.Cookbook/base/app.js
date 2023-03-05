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
                console.log(data[el]);
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
        console.log(e.target.id);
    }
    }

    
    lasagna.addEventListener('click', () =>{
        const article = document.createElement('article');
    article.innerHTML += `

        <h2>Recipe 1</h2>
        <div class="band">
            <div class="thumb">
                <img src="assets/lasagna.jpg">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>Ingredient 1</li>
                    <li>Ingredient 2</li>
                    <li>Ingredient 3</li>
                    <li>Ingredient 4</li>
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
                reprehenderit pariatur aut dolor exercitationem impedit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
                corrupti? Quam.</p>
        </div>`;
        main.appendChild(article)
    })
    main.appendChild(lasagna)


}