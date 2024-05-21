import React from "react";
import favIcon from "../../../../icons/heart-solid.svg";
import cartIcon from "../../../../icons/cart-shopping-solid.svg";
import "./navBar.css";
import { useCartState } from "../../../../providers/cartProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFavProducts } from "../../../../api";
import { ProductType } from "../../../../types/commonTypes";

export const NavBar = () => {
  const { setIsShowingCart, isShowingCart, productsNumber } = useCartState();
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["favs"],
    queryFn: getFavProducts,
  });

  const favsLength =
    !isLoading &&
    data.filter((product: ProductType) => Number(product.favorite) === 1)
      ?.length;

  return (
    <nav className="navBar">
      <span>{location.pathname === "/favs" ? "Favoritos" : "Productos"}</span>
      <button
        style={{
          background: `url(${favIcon}) no-repeat center center`,
        }}
        onClick={() => navigate("/favs")}
        className="navBar__button navBar__favs"
      >
        <span>{favsLength ? favsLength : 0}</span>
      </button>
      <button
        style={{
          background: `url(${cartIcon}) no-repeat center center`,
        }}
        className="navBar__button navBar__cart"
        onClick={() => setIsShowingCart(!isShowingCart)}
      >
        <span>{productsNumber}</span>
      </button>
    </nav>
  );
};
