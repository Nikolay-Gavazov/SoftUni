window.addEventListener('load', loadItems)
import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { getData } from "./src/api.js";

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.getElementById('searchField');
   const tbody = document.querySelector('tbody');

   const template = (data) => html `
   ${data.map(el => html`
   <tr>
      <td>${el.firstName} ${el.lastName}</td>
      <td>${el.email}</td>
      <td>${el.course}</td>
   </tr>
   `)}
   `


  async function loadItems(){
      const items = await getData()
      const result = template(Object.values(items));
      render(result, tbody)
   }


   function onClick() {
      console.log('c');
      Array.from(document.querySelectorAll('tbody tr')).forEach(el => {
         if (el.textContent.toLocaleLowerCase().includes(input.value.toLocaleLowerCase().trim())) {
            el.classList.add('select')
         } else {
            el.classList.remove('select');
         }
      });
      input.value = '';

   }
