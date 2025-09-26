import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../api/getRecipeDetails";
import { getRandomRecipe } from "../../api/getRandomRecipe";
import IngredientList from "../../components/molecules/IngredientList/IngredientList";
import YouTubePlayer from "../../components/molecules/YoutubePlayer/YoutubePlayer";
import { LuStar } from "react-icons/lu";

function RecipeDetails() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  // Fetch recipe details or random recipe
  useEffect(() => {
    async function fetchData() {
      try {
        if (idMeal) {
          const detail = await getRecipeDetails(idMeal);
          setRecipe(detail[0]);
        } else {
          const detail = await getRandomRecipe();
          setRecipe(detail);
        }
      } catch (error) {
        console.log("Error while fetching details: ", error);
      }
    }

    fetchData();
  }, [idMeal]);

  // Check if the recipe is already saved
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const isExists = savedRecipes.some((r) => r.idMeal === idMeal);
    setIsSaved(isExists);
  }, [recipe]);

  // Handler to toggle save/unsave
  const handleSave = () => {
    if (isSaved) {
      // Fetch all saved recipes from the local storage
      const savedRecipes =
        JSON.parse(localStorage.getItem("savedRecipes")) || [];

      // Remove the current recipe.
      const updated = savedRecipes.filter((r) => r.idMeal !== idMeal);

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

  // Show loading state while fetching
  if (!recipe) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-background max-w-6xl mx-auto text-gray-800 p-4 md:p-8">
      {/* ======================== 
         Hero Section (Image + Title + Save Button) 
      ========================== */}
      <div className="relative w-full">
        <img
          src={recipe?.strMealThumb}
          alt={recipe?.strMeal}
          className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-md"
        />

        {/* Overlay info + save button */}
        <div className="absolute bottom-2 left-2 bg-black/50 p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between w-[95%] md:w-[98%]">
          {/* Title + category/area */}
          <div>
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-1">
              {recipe?.strMeal}
            </h2>
            <p className="text-gray-200 font-medium">
              {recipe?.strCategory} <span className="mx-2">◾</span>{" "}
              {recipe?.strArea}
            </p>
          </div>

          {/* Save Recipe Button */}
          <button
            onClick={handleSave}
            className={`mt-3 md:mt-0 flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition cursor-pointer hover:bg-gray-200 ${
              isSaved
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            <LuStar
              className={`${
                isSaved ? "text-white" : "text-yellow-500"
              } text-lg`}
            />
            {isSaved ? "Saved" : "Save Recipe"}
          </button>
        </div>
      </div>

      {/* ======================== 
         Content Grid (Ingredients + Instructions) 
      ========================== */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Ingredients */}
        <IngredientList recipe={recipe} />

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
          <h3 className="text-xl font-semibold text-[#5A3E1B] mb-4">
            Instructions
          </h3>
          <article className="prose max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
            {recipe?.strInstructions}
          </article>
        </div>
      </div>

      {/* ======================== 
         Video Tutorial Section 
      ========================== */}
      {recipe?.strYoutube && (
        <div className="mt-10">
          <YouTubePlayer url={recipe?.strYoutube} />
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
