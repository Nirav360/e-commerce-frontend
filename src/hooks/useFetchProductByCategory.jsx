import { useState } from "react";
import { useGetProductsByCategoryQuery } from "../services/commonApi";

const useFetchProductByCategory = () => {
  const [isSkip, setIsSkip] = useState(true);
  const [category, setCategory] = useState("");
  const { data, isFetching } = useGetProductsByCategoryQuery(category, {
    skip: isSkip,
  });

  const getProductsByCategory = (selectedCategory) => {
    if (!selectedCategory) {
      return;
    }
    setIsSkip(false);
    setCategory(selectedCategory);
  };
  return { getProductsByCategory, data, isFetching };
};

export default useFetchProductByCategory;
