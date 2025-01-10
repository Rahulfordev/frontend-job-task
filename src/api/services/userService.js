import { apiCall } from "@/components/utils/api";

export const registerUser = async (userData) => {
  return await apiCall("/users/register", "POST", userData);
};

export const loginUser = async (userData) => {
  return await apiCall("/auth/login", "POST", userData);
};
