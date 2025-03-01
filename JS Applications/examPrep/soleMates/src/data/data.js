import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/shoes?sortBy=_createdOn%20desc',
    getAll: 'data/shoes',
    getById: 'data/shoes/',
};


export async function getAll(){
    return get(endpoints.sorted)
}


export async function getById(id){
    return get(endpoints.getById + id)
}


export async function create(data){
    return post(endpoints.getAll , data)
}


export async function update(id, data){
    return put(endpoints.getById + id, data)
}


export async function del(id){
    delete_(endpoints.getById + id)
}

export async function searchItem(query){
   return get(`data/shoes?where=brand%20LIKE%20%22${query}%22`)
}