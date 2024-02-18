import useProductContext from "../../hooks/useProductContext";
import ProductCard from "../products/ProductCard";

const FeaturedProducts = () => {
  const { trendingProducts, isLoading } = useProductContext();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <h1 className="text-4xl font-extrabold mx-6 my-4">Trending Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {trendingProducts.length > 0 &&
          trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
