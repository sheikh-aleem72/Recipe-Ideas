import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ResultsSkeleton from "../../components/molecules/ResultSkeleton/ResultSkeleton";
import { getMealsByAllIngredients } from "../../api/getRecipe";
import RecipeCard from "../../components/molecules/RecipeCard/RecipeCard";

function Result() {
  const { ingredient } = useParams();

  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    async function searchMeal() {
      const ingredients = ingredient.split(/[ ,]+/); // split by space or comma

      try {
        const result = await getMealsByAllIngredients(ingredients);
        console.log("results: ", result);
        setRecipes(result);
      } catch (error) {
        console.log("error while fetching meal: ", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    }

    searchMeal();
  }, [ingredient]);

  if (loading) {
    return <ResultsSkeleton />;
  }

  return (
    <div className="min-h-[calc(100vh-70px)] bg-brand-background  text-gray-800">
      {/* Header */}

      {recipes && recipes.length > 0 ? (
        <>
          {/* Results Title */}
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-[#4A2E2E]">
              Results for “{ingredient}”
            </h2>
            <p className="text-gray-600 mt-2">
              Showing {recipes?.length} recipes
            </p>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
            {recipes?.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe?.idMeal} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-lg text-gray-600 pt-10">
          No recipes found with that ingredient. <br /> Try something else!
        </p>
      )}
    </div>
  );
}

export default Result;
