import React from "react";
import "./product.css";
import favIconRegular from "../../../../icons/heart-regular.svg";
import favIconSolid from "../../../../icons/heart-solid.svg";
import { useCartState } from "../../../../providers/cartProvider";
import { ProductType } from "../../../../types/commonTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFav } from "../../../../api";

export const Product = ({ product }: { product: ProductType }) => {
  const { addProductToCart } = useCartState();
  const queryClient = useQueryClient();
  const updateFavMutation = useMutation({
    mutationFn: () => updateFav(!product.favorite, product.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["favs"] });
    },
  });

  const stockClassName = `product__stock ${
    product.stock === 0 ? "product__stock--out-of-stock" : ""
  }`;

  const addCartButtonClassName = `product__add-cart ${
    product.stock === 0 ? "product__add-cart--disabled" : ""
  }`;

  return (
    <article className="product">
      <header>
        <button
          style={{
            background: `url(${
              !!Number(product.favorite) ? favIconSolid : favIconRegular
            }) no-repeat center center`,
          }}
          className="product__add-fav"
          onClick={() => updateFavMutation.mutate()}
        ></button>
        <img alt={product.productName} src={product.image_url} />
        <p className={stockClassName}>Quedan {product.stock} unidades</p>
        <p className="product__title">{product.productName}</p>
        <p className="product__description">{product.productDescription}</p>
        <p className="product__price">{product.price}€</p>
      </header>
      <footer>
        <button
          disabled={product.stock === 0}
          onClick={() => addProductToCart(product)}
          className={addCartButtonClassName}
        >
          Añadir al carrito
        </button>
      </footer>
    </article>
  );
};
