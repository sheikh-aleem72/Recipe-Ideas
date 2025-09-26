import { useEffect, useState } from "react";
import { getMealsByAllIngredients } from "../../api/getRecipe";
import { Link, useNavigate } from "react-router-dom";

/**
 * Home Component
 *
 * Displays the main landing page with:
 * - Headline and subtext
 * - Search input and buttons (Search + SurpriseMe)
 * - Suggested ingredient tags
 * - Footer tagline
 */
function Home() {
  const [ingredient, setIngredient] = useState("");
  const suggestions = ["chicken", "rice", "potato", "egg"];

  const navigate = useNavigate();

  const handleSearch = (param) => {
    if (!ingredient.trim()) return;
    if (param) {
      setIngredient(param);
    }
    // navigate to results page with query as a URL param
    navigate(`/results/${encodeURIComponent(ingredient)}`);
    setIngredient("");
  };

  return (
    <main className="w-full min-h-[calc(100vh-70px)] bg-[#F1F8EC] flex flex-col items-center justify-center px-4 py-2">
      {/* Headline */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#4A2E2E] leading-snug">
        See what delicious meals <br /> you can cook today 🍴
      </h2>

      {/* Subtext */}
      <p className="mt-5 text-lg md:text-xl text-center text-gray-700 max-w-2xl">
        Enter ingredients you already have and discover recipes instantly.
      </p>

      {/* Search Section */}
      <div className="mt-8 flex flex-col  items-center gap-3">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter ingredient(s). Ex:- 'chicken' or 'chicken rice milk'"
          className="w-72 md:w-140 px-4 py-3 border rounded-md text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <div className="flex gap-2">
          <button
            className="px-6 py-3 bg-brand-green text-white font-semibold rounded-md text-base md:text-lg hover:bg-green-700 transition-colors cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-6 py-3 border border-brand-green text-brand-green font-semibold rounded-md text-base md:text-lg hover:bg-brand-green hover:text-white cursor-pointer transition-colors"
            onClick={() => navigate("/random")}
          >
            Surprise Me!
          </button>
        </div>
      </div>

      {/* Suggested Ingredients */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {suggestions.map((item) => (
          <button
            onClick={() => {
              setIngredient(item);
            }}
            key={item}
          >
            <span className="px-5 py-2 bg-yellow-300 rounded-full text-gray-800 font-medium cursor-pointer text-base md:text-lg hover:bg-yellow-400 transition-colors">
              {item}
            </span>
          </button>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-10 text-lg md:text-xl text-gray-800 font-medium text-center">
        Cooking made simple. Fast, tasty, and stress-free.
      </p>
    </main>
  );
}

export default Home;
