import { Route, Routes } from "react-router-dom";
import Layout from "./components/organism/Layout/Layout";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/results/:ingredient" element={<Result />} />
          <Route path="/:idMeal" element={<RecipeDetails />} />
          <Route path="/random" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </>
  );
};
