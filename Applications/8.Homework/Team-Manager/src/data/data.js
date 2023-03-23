import { delete_, get, post, put } from "./api.js";

const endpoints = {
    allTeams: 'data/teams',
    getById: 'data/teams/'
};


export async function getAll(){
    return get(endpoints.allTeams)
}

//TODO make the endpoints
export async function getById(id){
    return get(endpoints.getById + id)
}

//TODO make the endpoints
export async function create(data){
    return post(endpoints.allTeams, data)
}

//TODO make the endpoints
export async function update(id, data){
    return put(endpoints + id, data)
}

//TODO make the endpoints
export async function del(id){
    delete_(endpoints + id)
}