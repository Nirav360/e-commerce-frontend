import { useCallback, useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import SortingSection from "./SortingSection";
import ProductsList from "./ProductsList";
import { useGetProductCategoriesQuery } from "../../services/commonApi";
import useFetchProductByCategory from "../../hooks/useFetchProductByCategory";
import useProductContext from "../../hooks/useProductContext";
import Spinner from "../spinner/Spinner";

const ProductsPage = () => {
  const { data, isFetching } = useGetProductCategoriesQuery();
  const [checked, setChecked] = useState(null);
  const [categorySelected, setCategorySelected] = useState("");
  const { getProductsByCategory, isFetching: fetchProdByCategory } =
    useFetchProductByCategory();
  const { dispatch } = useProductContext();

  const onChange = useCallback(
    (index) => {
      setChecked(index === checked ? null : index);
      dispatch({ type: "CATEGORY_CHANGED" });
      if (index !== checked) {
        setCategorySelected(data[index]);
      } else {
        setCategorySelected("");
      }
    },
    [checked, data, dispatch]
  );

  useEffect(() => {
    getProductsByCategory(categorySelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);
  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        <div className="md:col-span-1">
          <FilterSection
            isFetching={isFetching}
            checked={checked}
            data={data}
            handleChange={onChange}
          />
        </div>
        <section className="md:col-span-4 col-span-5">
          <div className="flex flex-col gap-2 mx-2">
            <div>
              <SortingSection category={categorySelected} />
            </div>
            <div>
              {fetchProdByCategory ? (
                <Spinner />
              ) : (
                <ProductsList category={categorySelected} />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
