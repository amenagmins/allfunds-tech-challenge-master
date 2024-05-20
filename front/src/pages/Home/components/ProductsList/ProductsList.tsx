import React from "react";
import { Product } from "../Product/Product";
import "./productsList.css";
import { getProductsList } from "../../../../api";
import { useQuery } from "@tanstack/react-query";
import { ProductType } from "../../../../types/commonTypes";

export const ProductsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsList,
  });

  return (
    <article className="products-list">
      {isLoading ? (
        <p className="products-list__loading">Cargando productos...</p>
      ) : (
        data.map((product: ProductType) => (
          <div key={product.id} className="product-container">
            <Product product={product} />
          </div>
        ))
      )}
    </article>
  );
};
