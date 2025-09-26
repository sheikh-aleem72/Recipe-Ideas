import axiosInstance from "../config/axios";

// Axios request to fetch random recipe
export const getRandomRecipe = async () => {
  try {
    const response = await axiosInstance.get(`/random.php`);

    return response?.data?.meals[0];
  } catch (error) {
    throw error;
  }
};
