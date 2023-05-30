import axios, { AxiosHeaders } from "axios";
import { createContext, useState } from "react";

export const productApi = axios.create({
  baseURL: "http://localhost:8080",
});

export const getProducts = (ref, page, size) => {
  return productApi.get(
    "/products/?ref=" + ref + "&page=" + page + "&size=" + size
  );
};
export const deleteProduct = (product) => {
  return productApi.delete(`/products/${product.id}`);
};
export const getProduct = (id) => {
  return productApi.get(`/products/${id}`);
};
export const saveProduct = (product) => {
  return productApi.post("/products", product);
};

export const updateProduct = (id, product) => {
  return productApi.put("/products/" + id, product);
};

export const AppContext = createContext();

export const UseAppContext = () => {
  const initialState = {
    products: [],
    keyword: "",
    currentPage: 0,
    pageSize: 6,
    totalPages: 0,
    numberOfElements: 6,
  };
  const appState = useState(initialState);
  return appState;
};
