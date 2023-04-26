function solve() {
  const textAreas = document.querySelectorAll('textarea');
  const input = textAreas[0];

  const output = textAreas[1];
  const buttons = document.querySelectorAll('button');
  const generateBtn = buttons[0].addEventListener('click', generate);
  const buyBtn = buttons[1].addEventListener('click', buy);


  function generate() {
    const furniture = JSON.parse(input.value);
    const tbody = document.querySelector('tbody');
    furniture.forEach(el => {
      const tr = document.createElement('tr');

      const img = document.createElement('img');
      img.src = el.img;
      const td1 = document.createElement('td');
      td1.appendChild(img);
      tr.appendChild(td1);

      const name = document.createElement('p');
      name.textContent = el.name;
      const td2 = document.createElement('td');
      td2.appendChild(name);
      tr.appendChild(td2);

      const price = document.createElement('p');
      price.textContent = el.price;
      const td3 = document.createElement('td');
      td3.appendChild(price);
      tr.appendChild(td3);

      const decor = document.createElement('p');
      decor.textContent = el.decFactor;
      const td4 = document.createElement('td');
      td4.appendChild(decor);
      tr.appendChild(td4);

      const check = document.createElement('input');
      check.type = 'checkbox'
      const td5 = document.createElement('td');
      td5.appendChild(check);
      tr.appendChild(td5);

      tbody.appendChild(tr)

    });
  }

  function buy(event) {
    const checkBoxes = Array.from(document.querySelectorAll('input'));
    let bought = [];
    let totalPrice = 0;
    let decoration = 0;
    checkBoxes.forEach(checkBox => {
      if (checkBox.checked) {
        const currentTr = checkBox.parentElement.parentElement;
        const name = currentTr.children[1].innerText;
        const furniture = JSON.parse(input.value);
        furniture.forEach(el => {
          if (name == el.name) {
            bought.push(el.name);
            totalPrice += Number(el.price);
            decoration += Number(el.decFactor);
          }
        });

      }
    });
    output.value += `Bought furniture: ${bought.join(', ')}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`
    output.value += `Average decoration factor: ${decoration / bought.length}\n`
    event.target.disabled = true;
  }
}