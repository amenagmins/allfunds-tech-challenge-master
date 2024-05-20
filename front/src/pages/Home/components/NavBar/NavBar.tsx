import React from "react";
import favIcon from "../../../../icons/heart-solid.svg";
import cartIcon from "../../../../icons/cart-shopping-solid.svg";
import "./navBar.css";
import { useCartState } from "../../../../providers/cartProvider";

export const NavBar = () => {
  const { setIsShowingCart, isShowingCart, productsNumber } = useCartState();

  return (
    <nav className="navBar">
      <span>Productos</span>
      <button
        style={{
          background: `url(${favIcon}) no-repeat center center`,
        }}
        className="navBar__button navBar__favs"
      >
        <span>0</span>
      </button>
      <button
        style={{
          background: `url(${cartIcon}) no-repeat center center`,
        }}
        className="navBar__button navBar__cart"
        onClick={() => setIsShowingCart(!isShowingCart)}
      >
        {!!productsNumber && <span>{productsNumber}</span>}
      </button>
    </nav>
  );
};
