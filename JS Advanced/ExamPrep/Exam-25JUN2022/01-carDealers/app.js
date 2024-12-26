window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const fuelType = document.getElementById("fuel");
  const orgCost = document.getElementById("original-cost");
  const sellPrice = document.getElementById("selling-price");
  const publishBtn = document.getElementById("publish");
  publishBtn.addEventListener("click", publish);

  const tbody = document.getElementById("table-body");
  const soldCars = document.getElementById("cars-list");
  const profit = document.getElementById("profit");

  function publish(e) {
    e.preventDefault();
    const makeInp = make.value;
    const modelInp = model.value;
    const prodYear = year.value;
    const fuelInp = fuelType.value;
    const price = Number(orgCost.value);
    const sellPriceInp = Number(sellPrice.value);

    if (
      !makeInp ||
      !modelInp ||
      !prodYear ||
      !fuelInp ||
      !price ||
      !sellPriceInp ||
      price > sellPriceInp
    ) {
      return;
    }
    const tr = document.createElement("tr");
    tr.className = "row";
    tr.innerHTML = `
  <td>${makeInp}</td>
  <td>${modelInp}</td>
  <td>${prodYear}</td>
  <td>${fuelInp}</td>
  <td>${price}</td>
  <td>${sellPriceInp}</td>
  <td>
  <button id = 'edit' class = 'action-btn edit'>Edit</button>
  <button id = 'sell' class = 'action-btn sell'>Sell</button>
  </td>
  `;
    tr.querySelector("#edit").addEventListener("click", edit);
    tr.querySelector("#sell").addEventListener("click", sell);
    tbody.appendChild(tr);

    make.value = "";
    model.value = "";
    year.value = "";
    fuelType.value = "";
    orgCost.value = "";
    sellPrice.value = "";

    function edit() {
      tr.remove();
      make.value = makeInp;
      model.value = modelInp;
      year.value = prodYear;
      fuelType.value = fuelInp;
      orgCost.value = price;
      sellPrice.value = sellPriceInp;
    }
    function sell() {
      tr.remove();
      const diff = sellPriceInp - price;
      const li = document.createElement("li");
      li.className = "each-list";
      li.innerHTML = `
    <span>${makeInp} ${modelInp}</span>
    <span>${prodYear}</span>
    <span>${diff}</span>
    `;
      soldCars.appendChild(li);
      profit.textContent = (Number(profit.textContent) + diff).toFixed(2);
    }
  }
}
