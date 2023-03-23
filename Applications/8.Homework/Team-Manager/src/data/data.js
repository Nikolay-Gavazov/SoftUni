import { delete_, get, post, put } from "./api";

const endpoints = {
    allTeams: 'data/teams'
};


export async function getAll(){
    return get(endpoints.allTeams)
}

//TODO make the endpoints
export async function getById(id){
    return get(endpoints + id)
}

//TODO make the endpoints
export async function create(data){
    return post(endpoints , data)
}

//TODO make the endpoints
export async function update(id, data){
    return put(endpoints + id, data)
}

//TODO make the endpoints
export async function del(id){
    delete_(endpoints + id)
}