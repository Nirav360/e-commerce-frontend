import { useEffect, useState } from "react";
import { useGetProductsByCategoryQuery } from "../services/commonApi";
import useProductContext from "./useProductContext";

const useFetchProductByCategory = () => {
  const [isSkip, setIsSkip] = useState(true);
  const [category, setCategory] = useState("");
  const { data, isFetching } = useGetProductsByCategoryQuery(category, {
    skip: isSkip,
  });
  const { dispatch } = useProductContext();

  const getProductsByCategory = (selectedCategory) => {
    if (!selectedCategory) {
      dispatch({ type: "FILTER_CATEGORY_RESET" });
      return;
    }
    setCategory(selectedCategory);
    setIsSkip(false);
  };

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_FILTER_CATEGORY", payload: data.products });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { getProductsByCategory, isFetching };
};

export default useFetchProductByCategory;
