import {html, render} from '../../../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', loadTowns);
const root = document.getElementById('root');
const input = document.getElementById('towns');

const template = (data) => html `
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`;

async function loadTowns(e){
    e.preventDefault();
    if(input.value != ''){
        const towns = input.value.split(', ');
    const ul = document.createElement('ul');
    
    const result = template(towns);

    render(result, root);

    input.value = '';
    }
}