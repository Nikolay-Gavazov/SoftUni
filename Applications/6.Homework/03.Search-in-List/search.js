import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const root = document.getElementById('towns')
const btn = document.querySelector('button');
btn.addEventListener('click', search);

const text = document.getElementById('searchText')

const cardTemplate = (towns) => html`
<ul>
   ${towns.map(e => html`<li id=${e}>${e}</li>`)}
</ul>
`

const renderTowns = (towns) => {
   cardTemplate(towns)

   render(cardTemplate(towns), root)
}

renderTowns(towns);

const searchTown = (towns, text) => {
   return towns.filter((town) => {
      if (town.includes(text.value)) {
         const match = document.getElementById(`${town}`);
         match.setAttribute('class', 'active');

         return town
      }
   })
}

function search() {
   if (text.value != '') {
      const result = searchTown(towns, text)
      text.value = '';
      const resultHTML = document.getElementById('result');
      resultHTML.textContent = `${result.length} matches found`;
   }
}
