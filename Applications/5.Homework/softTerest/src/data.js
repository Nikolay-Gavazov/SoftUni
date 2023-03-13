import * as api from './api.js';

const endPoint = {
    'getAllIdeas': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'createIdea': 'data/ideas',
    'ideaById': 'data/ideas/'
}

export async function getAllIdeas(){
    return api.get(endPoint.getAllIdeas);
}

export async function createIdea(idea){
    return api.post(endPoint.createIdea, idea);
}

export async function ideaById(id){
    return api.get(endPoint.ideaById + id);
}

export async function deleteById(id){
    return api.delete_(endPoint.ideaById + id);
}