import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AddToCart from "../products/AddToCart";

const QuantityToggle = ({ quantity, increment, decrement, product }) => {
  return (
    <>
      <div className="flex my-2 justify-center items-center border rounded-2xl">
        <IconButton size="small" color="inherit" onClick={increment}>
          <AddRounded />
        </IconButton>
        <p className="mx-2">{quantity}</p>
        <IconButton size="small" color="inherit" onClick={decrement}>
          <RemoveRounded />
        </IconButton>
      </div>

      <AddToCart type="button" product={product} />
    </>
  );
};

export default QuantityToggle;
