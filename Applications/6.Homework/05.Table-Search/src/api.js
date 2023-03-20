const url = 'http://localhost:3030/jsonstore/advanced/table';

export async function getData(){
    return fetch(url).then(res => res.json());
}