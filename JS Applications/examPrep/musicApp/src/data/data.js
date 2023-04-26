import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/albums?sortBy=_createdOn%20desc&distinct=name',
    allAlbums: 'data/albums',
    albumById: 'data/albums/',
};


export async function getAll(){
    return get(endpoints.sorted)
}


export async function getById(id){
    return get(endpoints.albumById + id)
}


export async function create(data){
    return post(endpoints.allAlbums , data)
}


export async function update(id, data){
    return put(endpoints.albumById + id, data)
}


export async function del(id){
    delete_(endpoints.albumById + id)
}

export async function search(query){
    return get(`data/albums?where=name%20LIKE%20%22${query}%22`)
}