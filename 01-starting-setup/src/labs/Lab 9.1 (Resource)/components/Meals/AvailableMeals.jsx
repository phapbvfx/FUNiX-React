import React from "react";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem.jsx";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <div className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((item) => (
          <li key={item.id}>
            <MealItem MealData={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableMeals;
