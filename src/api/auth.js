import { API } from "../backendAPI";
import axios from "axios";

export const registerUser = (user) => {
  console.log(API);
  return axios.post(`${API}/user/register`, user);
};

export const loginUser = (user) => {
  return axios.post(`${API}/user/login`, user);
};

export const authUser = (user, next) => {
  localStorage.setItem("user", JSON.stringify(user));
  next();
};

export const isUser = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return false;
};

export const signout = (next) => {
  localStorage.removeItem("user");
  next();
};
