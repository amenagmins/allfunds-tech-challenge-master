import React from "react";
import "./product.css";
import favIconRegular from "../../../../icons/heart-regular.svg";
import favIconSolid from "../../../../icons/heart-solid.svg";

type ProductProps = {
  title: string;
  description: string;
  price: number;
  imageURL: string;
  isFav: boolean;
  stock: number;
};

export const Product = ({
  title,
  description,
  price,
  imageURL,
  isFav,
  stock,
}: ProductProps) => {
  return (
    <article className="product">
      <header>
        <button
          style={{
            background: `url(${
              isFav ? favIconSolid : favIconRegular
            }) no-repeat center center`,
          }}
          className="product__add-fav"
        ></button>
        <img alt={title} src={imageURL} />
        <p className="product__stock">Quedan {stock} unidades</p>
        <p className="product__title">{title}</p>
        <p className="product__description">{description}</p>
        <p className="product__price">{price}€</p>
      </header>
      <footer>
        <button className="product__add-cart">Añadir al carrito</button>
      </footer>
    </article>
  );
};
