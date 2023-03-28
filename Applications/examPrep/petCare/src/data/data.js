import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/pets?sortBy=_createdOn%20desc&distinct=name',
    allPets: 'data/pets',
    petById: 'data/pets/',
    donate: 'data/donation'
};


export async function getAll(){
    return get(endpoints.sorted)
}

export async function getById(id){
    return get(endpoints.petById + id)
}

export async function create(data){
    return post(endpoints.allPets , data)
}

export async function update(id, data){
    return put(endpoints.petById + id, data)
}

export async function del(id){
    delete_(endpoints.petById + id)
}

export async function makeDonation(petId){
    return post(endpoints.donate, {petId})
}

export async function getDonates(petId){
    return get(`data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
}

export async function getUserDonate(petId, userId){
    return get(`data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}