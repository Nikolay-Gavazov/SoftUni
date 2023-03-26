import { delete_, get, post, put } from "./api.js";

const endpoints = {
    getAllSorted: 'data/books?sortBy=_createdOn%20desc',
    allBooks: 'data/books',
    getById: 'data/books/',
    like: 'data/likes'
};


export async function getAllSorted(){
    return get(endpoints.getAllSorted)
}

export async function getById(id){
    return get(endpoints.getById + id)
}


export async function create(data){
    return post(endpoints.allBooks , data)
}


export async function update(id, data){
    return put(endpoints.getById + id, data)
}

//TODO make the endpoints
export async function del(id){
    delete_(endpoints.getById + id)
}

export async function likeBook(bookId){
    return post(endpoints.like, {bookId})
}

export async function getLike(bookId){
    return get(`data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function checkLike(bookId, userId){
    return get(`data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}