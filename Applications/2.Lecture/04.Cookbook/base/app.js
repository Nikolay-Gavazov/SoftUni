window.addEventListener('load', start);

function start(e){
    e.preventDefault();
    loadRepos();
    const main = document.querySelector('main');
    main.innerHTML = '';


    async function loadRepos() {
        const url = `http://localhost:3030/jsonstore/cookbook/recipes/`;
       
        try{
            const response = await fetch(url);
            if(response.ok == false){
            throw `${response.status}: ${response.statusText}`;
            
            }
            const data = await response.json();
            repos.replaceChildren();
            for(let el of data){
                const li = document.createElement('li');
                li.innerHTML = `<a href='${el.name}'>${el.ingredients}</a>`;
                main.appendChild(li);
            }
        }catch(error){
            main.innerHTML = `<p>${error}</p>`;
    }
    }



    const lasagna = document.createElement('article');
    lasagna.className = 'preview';
    lasagna.innerHTML = `
            <div class="title">
                <h2>Recipe 1</h2>
            </div>
            <div class="small">
                <img src="assets/lasagna.jpg">
            </div>
    `;
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