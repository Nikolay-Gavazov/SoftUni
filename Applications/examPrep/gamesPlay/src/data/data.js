import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sortByCategory: 'data/games?sortBy=_createdOn%20desc&distinct=category',
    sortByDate: 'data/games?sortBy=_createdOn%20desc',
    allGames: 'data/games',
    gameById: 'data/games/',
    comments: 'data/comments'
};

export async function getAll(){
    return get(endpoints.sortByDate)
}

export async function getAllHome(){
    return get(endpoints.sortByCategory);
}

export async function getById(id){
    return get(endpoints.gameById + id)
}


export async function create(data){
    return post(endpoints.allGames , data)
}


export async function update(id, data){
    return put(endpoints.gameById + id, data)
}

export async function del(id){
    delete_(endpoints.gameById + id)
}

export async function getComments(gameId){
    return get(`data/comments?where=gameId%3D%22${gameId}%22`)
}

export async function makeComment(gameId, comment){
    return post(endpoints.comments, {gameId, comment})
}