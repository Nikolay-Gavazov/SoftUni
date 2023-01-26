function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.getElementById('inputs').children[1];
   let restaurants = [];

   function onClick () {
      
      console.log(input.value.split('",'));
      
   }
}