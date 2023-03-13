import * as api from './api.js';

const endPoint = {
    'getAllIdeas': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'createIdea': 'data/ideas',
    'ideaById': 'data/ideas/'
}

export function getAllIdeas(){
    return api.get(endPoint.getAllIdeas);
}

export function createIdea(idea){
    return api.post(endPoint.createIdea, idea);
}

export function ideaById(id){
    return api.get(`${endPoint.ideaById}${id}`);
}

export function deleteById(id){
    return api.delete_(`${endPoint.ideaById}${id}`);
}