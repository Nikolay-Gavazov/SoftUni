function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const info = document.querySelector(".info");

  let stopId = "depot";
  let stopName;

  async function depart() {
    try {
      const responce = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
      );
      if (responce.ok == false) throw Error;

      const data = await responce.json();
      stopName = data.name;
      info.textContent = `Next stop ${stopName}`;
      stopId = data.next;
    } catch (error) {
      info.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }

    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  function arrive() {
    info.textContent = `Arriving at ${stopName}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
