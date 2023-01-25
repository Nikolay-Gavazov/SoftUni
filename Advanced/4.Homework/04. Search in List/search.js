function search() {
   const el = Array.from(document.querySelectorAll('#towns li'));
   const input = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let count = 0;
   el.forEach(el => {
      if (el.textContent.includes(input)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         count++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }

   });

   result.innerText = `${count} matches found`;

}
