import * as request from "../lib/request";
import { photosUrl } from "../urls/urls";

export const getAll = async () => {
  const result = await request.get(photosUrl);

  return result;
};

export const getById = async (id) => {
  const result = await request.get(`${photosUrl}/${id}`);

  return result;
};

export const getLatest = async () => {
  const result = await request.get(`${photosUrl}/sorted`);

  return result;
};

export const create = async (data) => {
  const result = await request.post(photosUrl, data);

  return result;
};

export const update = async (data, id) => {
  const result = await request.put(`${photosUrl}/edit/${id}`, data);

  return result;
};

export const del = async (id) => {
  const result = await request.del(`${photosUrl}/delete/${id}`);

  return result;
};
