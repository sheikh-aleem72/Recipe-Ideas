import React from "react";

const IngredientList = ({ recipe }) => {
  if (!recipe) return null;

  // Extract ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        name: ingredient,
        measure: measure || "",
        image: `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`,
      });
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-[#5A3E1B] mb-4">Ingredients</h2>
      <ul className="space-y-3">
        {ingredients.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-none"
          >
            {/* Ingredient thumbnail + name */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-800">{item.name}</span>
            </div>

            {/* Measure aligned to right */}
            <span className="text-gray-600 text-sm">{item.measure}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
