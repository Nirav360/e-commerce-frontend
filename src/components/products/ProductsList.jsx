import useProductContext from "../../hooks/useProductContext";
import Spinner from "../spinner/Spinner";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { products, isLoading } = useProductContext();

  return (
    <>
      {isLoading && <Spinner />}
      <div className="grid-container my-4">
        {products
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </>
  );
};

export default ProductsList;
