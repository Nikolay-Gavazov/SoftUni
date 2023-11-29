import * as request from "../lib/request";
import { userUrl } from "../urls/urls";

export const login = async (email, password) => {
  const result = await request.post(`${userUrl}/login`, {
    email,
    password,
  });

  return result;
};

export const register = async (email, password) => {
  const result = await request.post(`${userUrl}/register`, {
    email,
    password,
  });

  return result;
};

export const logout = async () => {
  const result = await request.get(`${userUrl}/logout`);

  return result;
};
