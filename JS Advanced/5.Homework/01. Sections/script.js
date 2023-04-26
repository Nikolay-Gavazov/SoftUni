function create(words) {
   const window = document.getElementById('content');
   words.forEach(el => {
      const p = document.createElement('p');
      p.textContent = el;
      p.style.display = 'none';
      const div = document.createElement('div');
      div.appendChild(p);
      div.addEventListener('click', func = (event) =>{
         event.target.children[0].style.display = 'block';
      })
      window.appendChild(div);
   
   });
}