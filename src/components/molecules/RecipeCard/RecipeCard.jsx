import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const isExists = savedRecipes.some((r) => r.idMeal === recipe?.idMeal);
    setIsSaved(isExists);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaved) {
      // Fetch all saved recipes from the local storage
      const savedRecipes =
        JSON.parse(localStorage.getItem("savedRecipes")) || [];

      // Remove the current recipe.
      const updated = savedRecipes.filter((r) => r.idMeal !== recipe?.idMeal);

      // Update the localStorage
      localStorage.setItem("savedRecipes", JSON.stringify(updated));

      // reset the isSaved state
      setIsSaved(false);
    } else {
      // Fetch all saved recipes from the local storage
      const savedRecipes =
        JSON.parse(localStorage.getItem("savedRecipes")) || [];

      // Prevent duplicate saves
      const exists = savedRecipes.some((r) => r.idMeal === recipe.idMeal);
      if (!exists) {
        savedRecipes.push(recipe);
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        setIsSaved(true);
      }
    }
  };
  return (
    <Link
      key={recipe.idMeal}
      to={`/${recipe.idMeal}`}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {recipe.strMeal}
          </h3>
          {recipe?.strArea && (
            <p className="text-sm text-gray-600">
              {recipe.strCategory} <span className="mx-1">•</span>{" "}
              {recipe.strArea}
            </p>
          )}
        </div>
        <button
          onClick={(e) => handleSave(e)}
          className={`mt-3 md:mt-0 flex justify-center items-center gap-2  rounded-lg text-2xl font-semibold transition cursor-pointer hover:bg-gray-200 p-2 `}
        >
          {isSaved ? <FaStar className="text-yellow-500" /> : <LuStar />}
        </button>
      </div>
    </Link>
  );
}

export default RecipeCard;
