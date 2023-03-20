import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const section = document.getElementById('allCats');

const cardTemplate = (data)=> html`
    <li>
        <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${onclick}>Show status code</button>
            <div class="status" style="display: none" id="${data.id}">
                <h4>Status Code: 100</h4>
                <p>${data.statusMessage}</p>
            </div>
        </div>
    </li>`


const ultemplate = (data) => html`
<ul>
    ${data.map(cat => cardTemplate(cat))}
</ul>
`
const renderCats = (data) => {
    render(ultemplate(data), section)
}

renderCats(cats);

function onclick(e) {
    e.preventDefault();
    const catElement = e.target.parentNode;
    const result = catElement.querySelector('.status').style.display;

    if (result == 'block') {
        catElement.querySelector('.showBtn').textContent = 'Show status code';
        catElement.querySelector('.status').style.display = 'none';
    } else {
        catElement.querySelector('.showBtn').textContent = 'Hide status code';
        catElement.querySelector('.status').style.display = 'block';
    }
}