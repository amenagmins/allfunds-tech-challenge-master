import React from "react";
import favIcon from "../../../../icons/heart-solid.svg";
import cartIcon from "../../../../icons/cart-shopping-solid.svg";
import "./navBar.css";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <span>Productos</span>
      <button
        style={{
          background: `url(${favIcon}) no-repeat center center`,
        }}
        className="navBar__favs"
      ></button>
      <button
        style={{
          background: `url(${cartIcon}) no-repeat center center`,
        }}
        className="navBar__cart"
      ></button>
    </nav>
  );
};
