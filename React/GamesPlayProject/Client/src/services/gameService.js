import * as requester from "../lib/requester";

const baseUrl = 'http://localhost:3030/data/games';


export const getAll = async () => {
    
    const result = await requester.get(baseUrl);

    return result;
};

export const getById = async (id) => {
    const result = await requester.get(`${baseUrl}/${id}`);

    return result;
};

export const create = async (gameData) => {
    const result = await requester.post(baseUrl, gameData);
   
    return result;
};

export const update = async (gameData, id) => {
    const result = await requester.put(`${baseUrl}/${id}`, gameData);

    return result;
};

export const del = async (id) => {
    const result = await requester.del(baseUrl + '/' + id);

    return result;
};
