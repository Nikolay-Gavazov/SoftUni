import { delete_, get, post, put } from "./api.js";

const endpoints = {
    allTeams: 'data/teams',
    getById: 'data/teams/',
    getMembers: 'data/members',
    getMemberById: 'data/members/'
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

export async function getMembers(){
    return get(endpoints.getMembers);
}

export async function getMembersByTeam(teamId){
    return get(`data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`)
}

export async function getCurrentMember(userId){
    return get(`data/members?where=_ownerId%3D%22${userId}%22`)
}

export async function sendRequest(data){
    return post(endpoints.getMembers, data)
}

export async function removeRequest(id){
    return delete_(endpoints.getMemberById + id)
}