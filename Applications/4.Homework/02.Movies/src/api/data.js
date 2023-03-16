import * as api from './api.js';

const endpoints = {
    'allMovies': 'data/movies',
    'movieById': 'data/movies/',
    // 'getLikes': `data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`,
    // 'getUserLikes': `data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`,
    'addLike': 'data/likes',
    'removeLike': 'data/likes/'
}

export async function getAllMovies(){
    return api.get(endpoints.allMovies);
}

export async function deleteMovie(){

}

export async function likeMovie(){

}