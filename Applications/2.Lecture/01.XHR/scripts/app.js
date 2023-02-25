function loadRepos() {

   let url = `http://localhost:3030/jsonstore/cookbook/details/name`;
   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', request);

   function request(){
      if(httpRequest.readyState == 4 && httpRequest.status == 200){
         document.getElementById('res').textContent = httpRequest.responseText;
      }
   }
   httpRequest.open('GET', url);
   httpRequest.send();

}