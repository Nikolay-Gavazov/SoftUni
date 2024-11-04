function solve() {
  let sum = 0;
  let productList = [];
  const addBtns = Array.from(document.getElementsByClassName("add-product"));
  addBtns.forEach((el) => {
    el.addEventListener("click", addFunk);
  });
  const output = document.querySelector("textarea");
  const checkOut = document.getElementsByClassName("checkout")[0];
  checkOut.addEventListener("click", outFunk);

  function outFunk() {
    output.value += `You bought ${productList.join(", ")} for ${sum.toFixed(
      2
    )}.`;
    addBtns.forEach((button) => {
      button.disabled = true;
    });
    checkOut.disabled = true;
  }

  function addFunk(event) {
    const currentClick = event.target.parentElement.parentElement;
    const price = Number(currentClick.children[3].textContent);
    sum += price;
    const product = currentClick.children[1].children[0].textContent;
    if (!productList.includes(product)) {
      productList.push(product);
    }
    output.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
  }
}
