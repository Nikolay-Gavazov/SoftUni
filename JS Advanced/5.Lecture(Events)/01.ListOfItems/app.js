function addItem() {
  const input = document.getElementById("newItemText");
  const ul = document.getElementById("items");
  const element = document.createElement("li");
  element.textContent = input.value;
  input.value = "";
  ul.appendChild(element);
}
