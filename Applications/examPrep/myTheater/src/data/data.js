import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/theaters?sortBy=_createdOn%20desc&distinct=title',
    getAll: 'data/theaters',
    getById: 'data/theaters/',
    like: 'data/likes'
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

export async function like(theaterId){
    return post(endpoints.like, {theaterId})
}

export async function getLikes(theaterId){
    return get(`data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
}

export async function getUserLike(theaterId, userId){
    return get(`data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
export async function userEvents(userId){
    return get(`data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
} 