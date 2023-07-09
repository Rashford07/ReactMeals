import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

import mealData from "../../data/mealData";
function AvailableMeals() {
  const mealsList = mealData.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
