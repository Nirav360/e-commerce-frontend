import useProductContext from "../../hooks/useProductContext";
import ProductCard from "../products/ProductCard";
import Spinner from "../spinner/Spinner";

const FeaturedProducts = () => {
  const { trendingProducts, isLoading } = useProductContext();
  return (
    <>
      {isLoading && <Spinner />}
      {trendingProducts.length > 0 && (
        <>
          <h1 className="md:text-4xl text-2xl font-extrabold mx-6 my-4">
            Trending Products
          </h1>
          <div className="grid-container my-4">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedProducts;
