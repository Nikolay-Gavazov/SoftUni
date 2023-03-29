import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030/';

export async function requester(method, url, data){
    const options = {
        method,
        headers: {}
    };

    const userData = getUserData();

    if(userData){
        options.headers['X-Authorization'] = userData.accessToken;
    }
    if(data !== undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const responce = await fetch(host + url, options);

        let result;
        if(responce.status != 204){
            result = await responce.json();
        }
        if(!responce.ok){
            if(responce.status == 403){
                clearUserData()
            }
            const error = result;
            throw error;
        }
        return result;

    } catch (error) {
        alert(error.message);
        throw error
    }
}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const delete_ = requester.bind(null, 'DELETE')