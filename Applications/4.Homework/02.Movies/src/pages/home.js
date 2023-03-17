import {html, render} from '../../../../../node_modules/lit-html/lit-html.js';
import { getAllMovies } from '../api/data.js';
import { movieInfoPage } from './movieInfo.js';

const section = document.getElementById('home-page');

const template = (movies, context) => html `

    ${movies.map(movie => html`
    <div class="card mb-4">
        <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/movieInfo">
                <button type="button" id = ${movie._id} @click = ${movieInfoPage} class="btn btn-info">Details</button>
            </a>
        </div>
    </div>
    `)}
`;

export async function homePage(context){
    context.showSection(section);
    context.updateNav();
    section.querySelector('#add-movie-button').addEventListener('click', ()=>{
        context.goTo('/add')
    })
    
    const movieSection = document.querySelector('#movies-list');
   

    const movies = await getAllMovies();

    if(movies.length == 0){
        return
    }
    render(template(movies), movieSection)
}



function createMovie(movie){
    
}

{/* 
        <div class=" mt-3 ">
            <div class="row d-flex d-wrap">

                <div class="card-deck d-flex justify-content-center">

                    <div class="card mb-4">
                        <img class="card-img-top" src="https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg" alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Wonder Woman 1984</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/6lOxMFSMkML09wux6sAF">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>

                    <div class="card mb-4">
                        <img class="card-img-top" src="https://i.pinimg.com/originals/f2/a4/58/f2a458048757bc6914d559c9e4dc962a.jpg" alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Top Gun 2</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/CUtL9j4qI0XVhn9kTUsx">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>

                    <div class="card mb-4">
                        <img class="card-img-top" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg" alt="Card image cap" width="400">
                        <div class="card-body">
                            <h4 class="card-title">Black Widow</h4>
                        </div>
                        <div class="card-footer">
                            <a href="#/details/krPgQD6SWf39bM4x00co">
                                <button type="button" class="btn btn-info">Details</button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    

                 */}