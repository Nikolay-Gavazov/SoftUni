import {html, render} from '../../../../../node_modules/lit-html/lit-html.js';
import { getMovie } from '../api/data.js';
import { ctx } from '../api/router.js';

const section = document.getElementById('movie-example');

const template = (movie) => html `
    ${movie.map(el => html`
    
        <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${el.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${el.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${el.description}
              </p>
              <a class="btn btn-danger" @click = click href="/delMovie">Delete</a>
              <a class="btn btn-warning" @click = click href="/editMovie">Edit</a>
              <a class="btn btn-primary" @click = click href="/likeMovie">Like</a>
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div>
        </div>
    `)}
`;


export async function movieInfoPage(id){
  ctx.showSection(section);
  ctx.updateNav();
 
  const movie = await getMovie(id);
  render(template(movie), section);
}

