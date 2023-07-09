import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartctx = useContext(CartContext);
  const addCartItemHandler = (item) => {
    cartctx.addItem(item);
  };
  const removeCartItemHandler = (id) => {
    cartctx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {cartctx.items.map((meal) => (
        <CartItem
          key={meal.id}
          name={meal.name}
          amount={meal.amount}
          price={meal.price}
          onAdd={addCartItemHandler.bind(null, meal)}
          onRemove={removeCartItemHandler.bind(null, meal.id)}
        />
      ))}
    </ul>
  );
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItem = cartctx.items.length > 0;

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
