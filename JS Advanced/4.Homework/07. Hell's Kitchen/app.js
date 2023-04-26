function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestRestP = document.querySelector('#bestRestaurant>p');
   const workersP = document.querySelector('#workers>p');
   let restaurants = {};

   function onClick() {
      let inputArr = JSON.parse(input.value)
      inputArr.forEach(el => {
         let [restaurant, workersArr] = el.split(' - ');
         let workers = [];
         workersArr = workersArr.split(', ')
         workersArr.forEach(el => {
            let [name, salary] = el.split(' ');
            workers.push({ name, salary: Number(salary) });
         });

         if (restaurants[restaurant]) {
            workers = workers.concat(restaurants[restaurant].workers);
         }

         workers.sort((wor1, wor2) => wor2.salary - wor1.salary);
         let bestSalary = workers[0].salary;
         let avgSalary =
            workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[restaurant] = {
            workers,
            avgSalary,
            bestSalary
         }

      });

      let bestRestAvgSalary = 0;
      let bestRest;

      for (let restaurant in restaurants) {
         if (restaurants[restaurant].avgSalary > bestRestAvgSalary) {
            bestRestAvgSalary = restaurants[restaurant].avgSalary;
            bestRest = { restaurant, ...restaurants[restaurant] };
         }
      }

      bestRestP.textContent = `Name: ${bestRest.restaurant} Average Salary: ${bestRest.avgSalary.toFixed(2)} Best Salary: ${bestRest.bestSalary.toFixed(2)}`

      let workersResult = [];
      bestRest.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      })
      workersP.innerText = workersResult.join(' ');

   }
}
//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]