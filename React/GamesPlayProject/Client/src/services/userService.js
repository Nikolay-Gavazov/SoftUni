import * as requester from '../lib/requester';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) =>{
    const result = await requester.post(`${baseUrl}/login`,
     { email, password});

     return result;
}

export const register = async (email, username, password) =>{
    const result = await requester.post(`${baseUrl}/register`, { email, username, password});
    return result;
}

export const logout = async () =>{
    const result = await requester.get(`${baseUrl}/logout`);
    return result;
}