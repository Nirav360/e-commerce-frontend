import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import { useGetProductsQuery } from "../services/commonApi";

const ProductContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  trendingProducts: [],
  filterCategory: [],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isFetching } = useGetProductsQuery();

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: isFetching });
    if (data?.products?.length > 0) {
      dispatch({
        type: "SET_PRODUCTS",
        payload: data.products,
      });
    }
  }, [data, isFetching]);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
