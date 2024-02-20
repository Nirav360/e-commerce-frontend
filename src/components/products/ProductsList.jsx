import useProductContext from "../../hooks/useProductContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { products, isLoading, filterCategory } = useProductContext();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="grid-container my-4">
        {filterCategory.length > 0
          ? filterCategory.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default ProductsList;
