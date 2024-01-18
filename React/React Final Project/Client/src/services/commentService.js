import * as request from "../lib/request";
import { commentsUrl, photosUrl } from "../urls/urls";

export const getAll = async (id) => {
  const result = await request.get(`${commentsUrl}/${id}`);

  return result;
};

export const create = async (photoId, email, text, userId) => {
  const newComment = await request.post(`${photosUrl}/comments/${photoId}`, {
    photoId,
    email,
    text,
    userId,
  });
  return newComment;
};
