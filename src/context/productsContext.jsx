import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
import { useGetProductsQuery } from "../services/commonApi";

const ProductContext = createContext();

const initialState = {
  products: [],
  all_products: [],
  isLoading: false,
  trendingProducts: [],
  isCategoryChanged: false,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isFetching]);

  const filterProductReset = () => {
    dispatch({ type: "FILTER_CATEGORY_RESET" });
  };

  const sorting = (type) => {
    dispatch({ type: "SET_SORTING_DATA", payload: type });
  };

  return (
    <ProductContext.Provider
      value={{ ...state, dispatch, filterProductReset, sorting }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
