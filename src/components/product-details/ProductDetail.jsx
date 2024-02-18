import { useParams } from "react-router-dom";
import MyImage from "./MyImage";
import ProductInfo from "./ProductInfo";
import PageNavigation from "./PageNavigation";
import { useGetSingleProductQuery } from "../../services/commonApi";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: singleProduct, isFetching } = useGetSingleProductQuery(id);
  return (
    <>
      <>
        <div className="m-6">
          <PageNavigation title={singleProduct?.title} />
        </div>
        <div className="container mx-auto my-4 grid md:grid-cols-2 md:pt-0 md:px-40 w-full gap-2">
          <div className="w-full">
            <MyImage imgs={singleProduct} isPending={isFetching} />
          </div>
          <div className="w-full ml-1">
            <ProductInfo prodInfo={singleProduct} isPending={isFetching} />
          </div>
        </div>
      </>
    </>
  );
};

export default ProductDetail;
