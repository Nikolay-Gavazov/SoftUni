import * as request from "../lib/request";
import { commentsUrl } from "../urls/urls";

export const getAll = async(id) => {
    const query = new URLSearchParams({
        where: `gameId="${id}"`,
    });
    const result = await request.get(`${commentsUrl}?${query}`);

    return result;
};

export const create = async(gameId, email, text) => {
    const newComment = await request.post(commentsUrl, {
        gameId,
        email,
        text
    });
    return newComment;
};