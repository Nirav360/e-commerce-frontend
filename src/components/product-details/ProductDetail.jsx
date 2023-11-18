import { useParams } from "react-router-dom";
import MyImage from "./MyImage";
import ProductInfo from "./ProductInfo";
import { useProducts } from "../../hooks/useProducts";
import PageNavigation from "./PageNavigation";
import { useProductContext } from "../../context/productsContext";
import { useEffect } from "react";

const URL = 'https://dummyjson.com/products';
const ProductDetail = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  useEffect(() => {
    getSingleProduct(`${URL}/${id}`);
  }, []);
  return (
    <>
      <>
        <div className="m-6">
          <PageNavigation title={singleProduct?.title} />
        </div>
        <div className="container mx-auto my-4 grid md:grid-cols-2 md:pt-0 md:px-40 w-full gap-2">
          <div className="w-full">
            <MyImage imgs={singleProduct} isPending={isSingleLoading} />
          </div>
          <div className="w-full ml-1">
            <ProductInfo prodInfo={singleProduct} isPending={isSingleLoading} />
          </div>
        </div>
      </>
    </>
  );
};

export default ProductDetail;
