import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ meal }) {
  const price = `$${meal.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    const updatedCart = {
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    };
    cartCtx.addItem(updatedCart);
    console.log(updatedCart.amount);
  };
  return (
    <li>
      <div className={classes["meal-info"]}>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <h4>{price}</h4>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
