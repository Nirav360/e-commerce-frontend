import useProductContext from "../../hooks/useProductContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { products, isLoading } = useProductContext();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className="grid-container my-4">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductsList;
