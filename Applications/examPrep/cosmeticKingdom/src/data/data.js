import { delete_, get, post, put } from "./api.js";

const endpoints = {
    sorted: 'data/products?sortBy=_createdOn%20desc',
    allProducts: 'data/products',
    getById: 'data/products/',
    buy: 'data/bought'
};


export async function getAll(){
    return get(endpoints.sorted)
}


export async function getById(id){
    return get(endpoints.getById + id)
}

export async function create(data){
    return post(endpoints.allProducts , data)
}

export async function update(id, data){
    return put(endpoints.getById + id, data)
}


export async function del(id){
    delete_(endpoints.getById + id)
}

export async function buy(productId){
    return post(endpoints.buy, {productId})
}

export async function checkBuy(productId){
    return get(`data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`)
}

export async function checkUserBuy(productId, userId){
    return get(`data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}