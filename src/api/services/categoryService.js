import { apiCall } from "@/components/utils/api";

export const getCategories = async () => {
  return await apiCall("/category", "GET");
};
