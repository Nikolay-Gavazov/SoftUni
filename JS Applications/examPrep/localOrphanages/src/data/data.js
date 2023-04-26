import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/posts?sortBy=_createdOn%20desc',
    getAll: 'data/posts',
    getById: 'data/posts/',
    donations: 'data/donations'
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

export async function makeDonate(postId){
    return post(endpoints.donations, {postId})
}

export async function getDonations(postId){
    return get(`data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}

export async function getUserDonation(postId, userId){
    return get(`data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
export async function getUserPosts(userId){
    return get(`data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}