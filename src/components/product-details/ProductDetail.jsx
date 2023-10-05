import { useParams } from "react-router-dom";
import MyImage from "./MyImage";
import ProductInfo from "./ProductInfo";
import { useProducts } from "../../hooks/useProducts";
import PageNavigation from "./PageNavigation";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isPending } = useProducts(
    `https://dummyjson.com/products/${id}`
  );
  return (
    <>
      <>
        <div className="m-6">
          <PageNavigation title={data?.title} />
        </div>
        <div className="container mx-auto my-4 grid md:grid-cols-2 md:pt-0 md:px-40 w-full gap-2">
          <div className="w-full">
            <MyImage imgs={data} isPending={isPending} />
          </div>
          <div className="w-full ml-1">
            <ProductInfo prodInfo={data} isPending={isPending} />
          </div>
        </div>
      </>
    </>
  );
};

export default ProductDetail;
