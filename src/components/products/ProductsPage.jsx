import FilterSection from "./FilterSection";
import SortingSection from "./SortingSection";
import ProductsList from "./ProductsList";

const ProductsPage = () => {
  return (
    <>
      <div className="w-11/12 container mx-auto border grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <FilterSection />
        </div>
        <section className="col-span-4">
          <div>
            <SortingSection />
          </div>
          <div>
            <ProductsList />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
