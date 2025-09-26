import { useEffect, useState } from "react";
import RecipeCard from "../../components/molecules/RecipeCard/RecipeCard";

function SavedRecipes() {
  const [saved, setSaved] = useState([]);

  // Load saved recipes from localStorage
  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSaved(recipes);
  }, []);

  return (
    <div className="min-h-[calc(100vh-70px)] bg-brand-background p-4 md:p-8 text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5A3E1B] mb-6">
        Saved Recipes
      </h2>

      {/* No saved recipes */}
      {saved.length === 0 ? (
        <p className="text-gray-600 text-xl">
          You haven't saved any recipes yet.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {saved.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe?.idMeal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedRecipes;
