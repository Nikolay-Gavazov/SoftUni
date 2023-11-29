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

export const create = async (data) => {
  const result = await request.post(photosUrl, data);

  return result;
};

export const update = async (data, id) => {
  const result = await request.put(`${photosUrl}/${id}`, data);

  return result;
};

export const deleteBookings = async (id) => {
  const result = await request.del(`${photosUrl}/${id}`);

  return result;
};
