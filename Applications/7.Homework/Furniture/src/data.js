import {delete_, get, post, put} from './api.js';

const nav = {
    'register': 'users/register',
    'login': 'users/login',
    'logout': 'users/logout',
    'allFurniture': 'data/catalog',
    'getFurnitureById': 'data/catalog/'
}

export async function register(email, password){
    const user = await post(nav.register, {email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function login(email, password){
    const user = await post(nav.login, {email, password});
    localStorage.setItem('user', JSON.stringify(user));
}

export async function logout(){
    get(nav.logout);
    localStorage.removeItem('user');
}

export async function createFurniture(data){
   return await post(nav.allFurniture, data)
}
export async function getFurniture(){
    return await get(nav.allFurniture)
}

export async function getFurnitureDetails(id){
    return await get(nav.getFurnitureById + id)
}
export async function updateFurniture(id, data){
    return await put(nav.getFurnitureById + id, data)
}
export async function deleteFurniture(id){
    return await delete_(nav.getFurnitureById + id)
}

export async function getMyFurniture(userId){
    return await get(`data/catalog?where=_ownerId%3D%22${userId}%22`)
}