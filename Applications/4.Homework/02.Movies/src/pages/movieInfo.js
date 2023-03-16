import {html, render} from '../../../../../node_modules/lit-html/lit-html.js';
const section = document.getElementById('movie-example');



export function movieInfoPage(context){
    context.showSection(section);
    context.updateNav();
}

const template = (movie) => html `
<ul>
    ${movie.map(el => html`
    <section id="movie-example" class="view-section">
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
      </section>
    `)}
</ul>
`;