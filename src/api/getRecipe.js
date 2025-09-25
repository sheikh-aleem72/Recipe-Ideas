import axios from "axios";
import axiosInstance from "../config/axios";

async function getMealsByIngredient(ingredient) {
  try {
    const res = await axiosInstance.get(`/filter.php?i=${ingredient}`);
    return res.data.meals || [];
  } catch (error) {
    throw error;
  }
}

export async function getMealsByAllIngredients(ingredients) {
  try {
    if (!ingredients || ingredients.length === 0) return [];

    let results = await getMealsByIngredient(ingredients[0]);

    for (let i = 1; i < ingredients.length; i++) {
      const next = await getMealsByIngredient(ingredients[i]);

      // Keep only meals present in both arrays
      results = results.filter((meal) =>
        next.some((n) => n.idMeal === meal.idMeal)
      );

      if (results.length === 0) break; // no common meals
    }

    return results;
  } catch (error) {
    throw error;
  }
}
