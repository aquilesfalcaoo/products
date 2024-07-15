import { Product } from "../interfaces/Product";
import apiClient from "./apiClient";

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

export const createProduct = async (body: Product) => {
  try {
    const response = await apiClient.post("/products", body);
    return response.data;
  } catch (error) {
    console.error("Error creating product: ", error);
    throw error;
  }
};

export const updateProduct = async (id: number, body: Product) => {
  try {
    const response = await apiClient.put(`/products/${id}`, body);
    return response.data;
  } catch (error) {
    console.error("Error update product: ", error);
    throw error;
  }
};

export const deleteProductById = async (id: number) => {
  try {
    const response = await apiClient.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error delete product: ", error);
    throw error;
  }
};
