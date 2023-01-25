function solve() {
   const input = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      Array.from(document.querySelectorAll('tbody tr')).forEach(el => {
         if(el.textContent.includes(input.value)){
            console.log(el.textContent);
         }
      })
   }
}