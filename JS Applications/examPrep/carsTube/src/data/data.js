import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/cars?sortBy=_createdOn%20desc',
    getAllCars: 'data/cars',
    carById: 'data/cars/'
};


export async function getAll(){
    return get(endpoints.sorted)
}

export async function getById(id){
    return get(endpoints.carById + id)
}

export async function create(data){
    return post(endpoints.getAllCars , data)
}

export async function update(id, data){
    return put(endpoints.carById + id, data)
}

export async function del(id){
    delete_(endpoints.carById + id)
}

export async function getMyCars(userId){
    return get(`data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function searchCar(query){
    return get(`data/cars?where=year%3D${query}`)
}