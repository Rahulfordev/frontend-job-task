import { API_BASE_URL } from "@/api/config/apiConfig";

export const apiCall = async (endpoint, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, options);

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Something went wrong",
      };
    }

    return { success: true, ...data };
  } catch (error) {
    console.error("API call error:", error.message);
    return { success: false, message: "Network error. Please try again." };
  }
};
