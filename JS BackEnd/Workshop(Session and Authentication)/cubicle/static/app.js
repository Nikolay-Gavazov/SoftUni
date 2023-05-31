const btn = document.getElementById('delBtn');

btn.addEventListener('click', deleteItem);

function deleteItem(e){
    const confirmation = confirm('Are you sure?');

    if(!confirmation){
        e.preventDefault();
    }
}