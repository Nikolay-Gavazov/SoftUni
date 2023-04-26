import { delete_, get, post, put } from "./api.js";

const endpoints = {
    getAll: 'data/catches',
    catchesById: 'data/catches/'
};


export async function getAll(){
    return get(endpoints.getAll)
}


export async function getById(id){
    return get(endpoints.catchesById + id)
}


export async function create(data){
    return post(endpoints.getAll , data)
}


export async function update(id, data){
    return put(endpoints.catchesById + id, data)
}


export async function del(id){
   return delete_(endpoints.catchesById + id)
}