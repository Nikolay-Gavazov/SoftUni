import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/posts?sortBy=_createdOn%20desc',
    getAll: 'data/posts',
    getById: 'data/posts/'
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