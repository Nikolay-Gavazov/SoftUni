import * as api from './api.js';

const endpoints = {
    'getAllIdeas': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'createIdea': 'data/ideas',
    'ideaById': 'data/ideas/'
}

export async function getAllIdeas(){
    return api.get(endpoints.getAllIdeas);
}

export async function createIdea(idea){
    return api.post(endpoints.createIdea, idea);
}

export async function ideaById(id){
    return api.get(endpoints.ideaById + id);
}

export async function deleteById(id){
    return api.delete_(endpoints.ideaById + id);
}