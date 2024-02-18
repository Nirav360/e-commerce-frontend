import { useContext } from "react";
import { ProductContext } from "../context/productsContext";

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;
