import React from "react";
import classes from "./Card.module.css";
function Card(props) {
  return (
    <div className={`${classes.wrapper} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
