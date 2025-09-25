import { Route, Routes } from "react-router-dom";
import Layout from "./components/organism/Layout/Layout";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/results/:ingredient" element={<Result />} />
          <Route path="/:mealId" element={<div>meal</div>} />
        </Route>
      </Routes>
    </>
  );
};
