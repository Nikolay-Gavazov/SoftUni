import { delete_, get, post, put } from "./api.js";

const endpoints = {
    allMemes: 'data/memes',
    memeById: 'data/memes/',
    sorted: 'data/memes?sortBy=_createdOn%20desc',
};


export async function getAll(){
    return get(endpoints.sorted)
}


export async function getById(id){
    return get(endpoints.memeById + id)
}


export async function create(data){
    return post(endpoints.allMemes , data)
}


export async function update(id, data){
    return put(endpoints.memeById + id, data)
}


export async function del(id){
    delete_(endpoints.memeById + id)
}