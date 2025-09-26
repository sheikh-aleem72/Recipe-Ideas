import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/${recipe.idMeal}`}>
      <div className="bg-brand-background rounded-xl shadow-md p-3">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className={`w-full h-40 object-cover rounded-lg transition-opacity duration-500 `}
        />
        <h3 className="mt-3 text-lg font-semibold text-center text-[#5A3E1B]">
          {recipe.strMeal}
        </h3>
      </div>
    </Link>
  );
}

export default RecipeCard;
