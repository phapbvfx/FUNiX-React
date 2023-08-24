import React from "react";
import Header from "./components/Layout/Header.jsx";
import AvailableMeals from "./components/Meals/AvailableMeals.jsx";
import MealsSummary from "./components/Meals/MealsSummary.jsx";

const Lab9 = () => {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};

export default Lab9;
