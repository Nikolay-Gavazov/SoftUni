const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function getItems(){
    return fetch(url).then(res => res.json());
}

export async function addItems(text){
    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json()'},
        body: JSON.stringify({text})
    }).then(res => res.json());
}