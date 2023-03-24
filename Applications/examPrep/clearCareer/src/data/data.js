import { delete_, get, post, put } from "./api.js";

const endpoints = {
    allOffers: 'data/offers?sortBy=_createdOn%20desc',
    allOffersCreate: 'data/offers',
    offerById: 'data/offers/'
};


export async function getAll(){
    return get(endpoints.allOffers)
}

//TODO make the endpoints
export async function getById(id){
    return get(endpoints.offerById + id)
}


export async function create(data){
    return post(endpoints.allOffersCreate, data)
}

//TODO make the endpoints
export async function update(id, data){
    return put(endpoints + id, data)
}

//TODO make the endpoints
export async function del(id){
    delete_(endpoints + id)
}