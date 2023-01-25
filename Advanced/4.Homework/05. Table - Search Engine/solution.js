function solve() {
   const input = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      Array.from(document.querySelectorAll('tbody tr')).forEach(el => {
         if (el.textContent.toLocaleLowerCase().includes(input.value.toLocaleLowerCase().trim())) {
            el.classList.add('select')
         } else {
            el.classList.remove('select');
         }
      });
      input.value = '';
   }
}