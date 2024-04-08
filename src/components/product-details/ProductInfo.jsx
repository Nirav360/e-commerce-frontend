import { useCallback, useState } from "react";
import { Rating } from "@mui/material";
import QuantityToggle from "./QuantityToggle";

const ProductInfo = ({ prodInfo }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = useCallback(() => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }, [quantity]);

  const handleIncrement = useCallback(() => {
    quantity < prodInfo?.stock
      ? setQuantity(quantity + 1)
      : setQuantity(prodInfo?.stock);
  }, [prodInfo?.stock, quantity]);
  return (
    <>
      {prodInfo ? (
        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <h2 className="font-extrabold text-xl">{prodInfo?.title}</h2>
          <p>
            <Rating defaultValue={prodInfo?.rating} precision={0.5} readOnly />
          </p>
          <p className="font-bold">MRP: ₹{prodInfo?.price.toLocaleString()}</p>
          <p>{prodInfo?.description}</p>
          <div className="text-sm flex flex-col items-start justify-center gap-1 mt-1">
            <p>
              Available:{" "}
              <span className="font-bold">
                {prodInfo?.stock > 0 ? "In Stock" : "Not Available"}
              </span>
            </p>
            <p>
              Brand: <span className="font-bold">{prodInfo?.brand}</span>
            </p>
          </div>
          <div>
            <QuantityToggle
              quantity={quantity}
              increment={handleIncrement}
              decrement={handleDecrement}
              product={prodInfo}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductInfo;
