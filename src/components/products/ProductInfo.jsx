import React from "react";
import { priceFormat } from "../../utils/PriceFormat";
import { Rating } from "@mui/material";

const ProductInfo = ({ prodInfo }) => {
  return (
    <>
      {prodInfo && (
        <div className="flex flex-col items-start justify-center gap-2">
          <h2 className="font-extrabold text-xl">{prodInfo.title}</h2>
          <p>
            <Rating defaultValue={prodInfo.rating} precision={0.5} readOnly />
          </p>
          <p className="font-bold">
            MRP: {priceFormat().format(prodInfo.price * 80)}
          </p>
          <p>{prodInfo.description}</p>
          <div className="text-sm flex flex-col items-start justify-center gap-1 mt-1">
            <p>
              Available:{" "}
              <span className="font-bold">
                {prodInfo.stock > 0 ? "In Stock" : "Not Available"}
              </span>
            </p>
            <p>
              Brand: <span className="font-bold">{prodInfo.brand}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
