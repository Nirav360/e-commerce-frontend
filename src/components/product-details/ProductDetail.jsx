import { useParams } from "react-router-dom";
import MyImage from "./MyImage";
import ProductInfo from "./ProductInfo";
import PageNavigation from "./PageNavigation";
import { useGetSingleProductQuery } from "../../services/commonApiSlice";
import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";
import Toast from "../snackbar/Toast";

const ProductDetail = () => {
  const { id } = useParams();
  const [openError, setOpenError] = useState(false);
  const {
    data: singleProduct,
    isFetching,
    isError,
    error,
  } = useGetSingleProductQuery(id);

  useEffect(() => {
    if (isError) return setOpenError(true);
  }, [isError]);
  return (
    <>
      <Toast
        open={openError}
        handleClose={() => setOpenError(false)}
        message={error?.data?.message ?? "No Server response"}
        severity={"error"}
      />
      {isFetching && <Spinner />}
      {singleProduct && (
        <>
          <div className="m-6">
            <PageNavigation title={singleProduct.product.title} />
          </div>
          <div className="container mx-auto my-4 grid md:grid-cols-2 max-w-full gap-2">
            <div className="w-full pl-2">
              <MyImage imgs={singleProduct.product} />
            </div>
            <div className="w-full pl-8">
              <ProductInfo prodInfo={singleProduct.product} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
