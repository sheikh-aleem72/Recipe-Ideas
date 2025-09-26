import axiosInstance from "../config/axios";

// Axios request to fetch recipe details
export const getRecipeDetails = async (mealId) => {
  try {
    const response = await axiosInstance.get(`/lookup.php?i=${mealId}`);

    return response?.data?.meals;
  } catch (error) {
    throw error;
  }
};
