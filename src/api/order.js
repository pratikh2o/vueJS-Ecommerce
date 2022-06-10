import { API } from "@/backendAPI";
import axios from "axios";

export const addOrder = (order) => {
  return axios.post(`${API}/order/create`, order);
};
