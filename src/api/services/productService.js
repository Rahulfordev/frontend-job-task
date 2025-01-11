import { apiCall } from "@/components/utils/api";

export const getProducts = async () => {
  return await apiCall("/products", "GET");
};
