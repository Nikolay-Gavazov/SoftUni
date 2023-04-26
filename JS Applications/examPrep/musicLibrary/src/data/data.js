import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/albums?sortBy=_createdOn%20desc',
    allAlbums: 'data/albums',
    albumById: 'data/albums/',
    likes: 'data/likes',
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

export async function getLikes(albumId){
    return get(`data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`)
}

export async function like(albumId){
    return post(endpoints.likes, {albumId})
}

export async function getUserLike(albumId, userId){
    return get(`data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}