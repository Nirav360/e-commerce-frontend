import { CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { memo, useState } from "react";
import { addProductsInCart } from "../../slice/cartSlice";
import Toast from "../snackbar/Toast";
import "../cart/cart.css";

const AddToCart = memo(({ type, product, quantity }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();

  const handleAddCart = () => {
    setOpenSnackbar(true);
    const prod = {
      ...product,
      quantity: quantity,
    };
    dispatch(addProductsInCart(prod));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <>
      {type === "card" ? (
        <CardActions className="card-btn" onClick={handleAddCart}>
          <ShoppingCartRoundedIcon />
          <p className="font-bold">Add to Cart</p>
        </CardActions>
      ) : (
        <button className="btn-style" onClick={handleAddCart}>
          Add to Cart
        </button>
      )}
      <Toast
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        message="Product added in cart"
        severity={"success"}
      />
    </>
  );
});
AddToCart.displayName = "AddToCart";
export default AddToCart;
