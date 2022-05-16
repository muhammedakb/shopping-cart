import { useQuery } from "react-query";
import { CartItemType } from "../App";

const useGetItems = (filters: string): any => {
  const getProducts = async (filter?: string): Promise<CartItemType[]> =>
    await (
      await fetch(
        filter !== ""
          ? `https://fakestoreapi.com/products/category/${filter}`
          : `https://fakestoreapi.com/products`
      )
    ).json();
  return useQuery(["products", filters], () => getProducts(filters));
};

export default useGetItems;
