import { Route, Routes } from "react-router-dom";
import Layout from "./components/organism/Layout/Layout";
import Home from "./Pages/Home/Home";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
