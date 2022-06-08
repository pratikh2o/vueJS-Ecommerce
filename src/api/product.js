import { API } from "@/backendAPI";
import axios from "axios";

export const getAllProduct = () => {
  return axios.get(`${API}/products`);
};

export const addPoductToCart = (product, next) => {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  cart.push({ ...product });
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};

export const loadCart = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  }
  return [];
};

export const removeFromCart = (id) => {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.map((val, index) => {
      if (val.id === id) {
        return cart.splice(index, 1);
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const emptyCart = () => {
  if (localStorage.getItem("cart")) {
    localStorage.removeItem("cart");
  }
};
