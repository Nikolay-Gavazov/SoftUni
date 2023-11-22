import * as requester from '../lib/requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (gameId, username, text) => {
    const newComment = await requester.post(baseUrl, {
        gameId,
        username,
        text
    });
    return newComment;
}

export const getAll = async(id) =>{
    const query = new URLSearchParams({
        where: `gameId="${id}"`,
    });
    const result = await requester.get(`${baseUrl}?${query}`);

    return result;
}