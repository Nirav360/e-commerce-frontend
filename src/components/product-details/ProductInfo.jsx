import React, { useCallback, useState } from "react";
import { priceFormat } from "../../utils/PriceFormat";
import { Rating, Skeleton } from "@mui/material";
import QuantityToggle from "./QuantityToggle";

const ProductInfo = ({ prodInfo, isPending }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = useCallback(() => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }, [quantity]);

  const handleIncrement = useCallback(() => {
    quantity < prodInfo.stock
      ? setQuantity(quantity + 1)
      : setQuantity(prodInfo.stock);
  }, [prodInfo?.stock, quantity]);
  return (
    <>
      {!isPending && prodInfo ? (
        <div className="flex flex-col items-center md:items-start justify-center gap-2">
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
          <div>
            <QuantityToggle
              quantity={quantity}
              increment={handleIncrement}
              decrement={handleDecrement}
            />
          </div>
        </div>
      ) : (
        <>
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ fontSize: "1.25rem" }}
            width="30%"
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{ fontSize: "1.25rem" }}
            width="30%"
          />
          <Skeleton variant="text" animation="wave" width="20%" />
          <Skeleton
            variant="rounded"
            animation="wave"
            height={30}
            sx={{ marginTop: 2, marginBottom: 2 }}
          />
          <Skeleton variant="text" animation="wave" width="20%" />
          <Skeleton variant="text" animation="wave" width="20%" />
          <Skeleton variant="text" animation="wave" width="20%" />
          <Skeleton variant="text" animation="wave" width="20%" />
        </>
      )}
    </>
  );
};

export default ProductInfo;
