import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/jsonstore/photos';

export const create = async (data) => {
    try {
        const result = await request.post(baseUrl, data);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const get = async () => {
    try {
        const result = await request.get(baseUrl);
        return Object.values(result);
    } catch (error) {
        console.log(error);
    }
}

export const getById = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`);

    return result;
}

export const update = async (data, id) => {
    try {
        const responce = await fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await responce.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBookings = async (id) => {
    try {
        const responce = await fetch(`${baseUrl}/${id}`, {
            method: "DELETE"});
        const result = await responce.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};