import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { addItems, getItems } from "./src/api.js";
window.addEventListener('load', loadItems);

const form = document.querySelector('form');
form.addEventListener('submit', addItem);
const optionSection = document.getElementById('menu');

const template = (data) => html `
    ${data.map(el => html`
    <option value = ${el._id}>${el.text}</option>
    `)}
`

async function addItem(e) {
    e.preventDefault()
    const text = form[0].value;
    console.log(text);
    if(!text){
        return alert('You must put some text!')
    }
    addItems(text);
    loadItems();
    form.reset();
}

async function loadItems(){
    const data = Object.values(await getItems());
    const result = template(data);
    render(result, optionSection)
}