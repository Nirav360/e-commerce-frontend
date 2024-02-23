import { useCallback, useEffect } from "react";
import { useGetProductsQuery } from "../services/commonApi";
import useProductContext from "./useProductContext";

const useFetchProducts = () => {
  const { data, isFetching } = useGetProductsQuery();
  const { dispatch } = useProductContext();

  const getProducts = useCallback(() => {
    dispatch({ type: "SET_LOADING", payload: isFetching });
    if (data?.products?.length > 0) {
      dispatch({
        type: "SET_PRODUCTS",
        payload: data.products,
      });
    }
  }, [data.products, dispatch, isFetching]);

  return { getProducts };
};

export default useFetchProducts;
