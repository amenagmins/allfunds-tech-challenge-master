import React from "react";
import { getFavProducts } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import goBackIcon from "../../icons/arrow-left-solid.svg";
import { useNavigate } from "react-router-dom";
import "./favs.css";

export const Favs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["favs"],
    queryFn: getFavProducts,
  });

  const navigate = useNavigate();

  return (
    <>
      <button
        style={{
          background: `url(${goBackIcon}) no-repeat center center`,
        }}
        className="favs__go-back"
        onClick={() => navigate("/")}
      ></button>
      <ProductsList isLoading={isLoading} data={data} />
    </>
  );
};
