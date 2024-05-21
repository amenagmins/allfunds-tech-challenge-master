import React from "react";
import { getProductsList } from "../../../../api";
import { useQuery } from "@tanstack/react-query";
import { ProductsList as List } from "../../../../components/ProductsList/ProductsList";

export const ProductsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsList,
  });

  return <List data={data} isLoading={isLoading} />;
};
