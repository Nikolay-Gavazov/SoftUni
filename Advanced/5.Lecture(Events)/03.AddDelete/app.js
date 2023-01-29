function addItem() {
    const input = document.getElementById('newItemText');
    const ul = document.getElementById('items');

    const element = document.createElement('li');

    element.textContent = input.value;
    input.value = '';

    const removeBtn = document.createElement('a');
    const linkText = document.createTextNode('[Delete]');
    removeBtn.appendChild(linkText);
    removeBtn.href = '#';
    removeBtn.addEventListener('click', deleteItem);
    element.appendChild(removeBtn);
    ul.appendChild(element);


    function deleteItem() {
        element.remove()
    }
}