import { apiCall } from "@/components/utils/api";

export const getProducts = async () => {
  return await apiCall("/products", "GET");
};

export const getProductById = async (productId) => {
  return await apiCall(`/products/${productId}`, "GET");
};
