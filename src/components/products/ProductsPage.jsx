import { useCallback, useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import SortingSection from "./SortingSection";
import ProductsList from "./ProductsList";
import { useGetProductCategoriesQuery } from "../../services/commonApi";
import useFetchProductByCategory from "../../hooks/useFetchProductByCategory";

const ProductsPage = () => {
  const { data, isFetching } = useGetProductCategoriesQuery();
  const [checked, setChecked] = useState(null);
  const [categorySelected, setCategorySelected] = useState("");
  const { getProductsByCategory } = useFetchProductByCategory();

  const onChange = useCallback(
    (index) => {
      setChecked(index === checked ? null : index);
      if (index !== checked) {
        setCategorySelected(data[index]);
      } else {
        setCategorySelected("");
      }
    },
    [checked, data]
  );

  useEffect(() => {
    getProductsByCategory(categorySelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);
  return (
    <>
      <div className="border grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <FilterSection
            isFetching={isFetching}
            checked={checked}
            data={data}
            handleChange={onChange}
          />
        </div>
        <section className="col-span-4">
          <div className="flex flex-col gap-4 mx-2">
            <div>
              <SortingSection category={categorySelected} />
            </div>
            <div>
              <ProductsList category={categorySelected} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
