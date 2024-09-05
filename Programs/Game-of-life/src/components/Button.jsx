import React from "react";
import styles from "../App.module.css";

const Button = ({ type, onClick }) => (
  <button className={styles[type + "Button"]} onClick={onClick}>
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </button>
);

export default Button;
