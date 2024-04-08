import { CardActions, CircularProgress } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { memo, useState } from "react";
import Toast from "../snackbar/Toast";
import "../cart/cart.css";
import { useCreateCartMutation } from "../../services/commonApiSlice";

const AddToCart = memo(({ type, product, quantity }) => {
  // const [openSnackbar, setOpenSnackbar] = useState(false);
  const [createCart, { isLoading }] = useCreateCartMutation();
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleAddCart = async () => {
    const prod = {
      itemId: product._id,
      quantity: quantity,
    };
    try {
      const response = await createCart(prod).unwrap();
      setOpenSnackbar({
        open: true,
        message: response.message ?? "No Server response",
        severity: "success",
      });
    } catch (err) {
      setOpenSnackbar({
        open: true,
        message: err.data?.message ?? "No Server response",
        severity: "error",
      });
    }
    // dispatch(addProductsInCart(prod));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar((prev) => ({ ...prev, open: false }));
  };
  return (
    <>
      {type === "card" ? (
        <CardActions
          className="card-btn"
          onClick={handleAddCart}
          disabled={isLoading}
        >
          <ShoppingCartRoundedIcon />
          <p className="font-bold">
            {isLoading ? <CircularProgress size="1.5rem" /> : "Add to Cart"}
          </p>
        </CardActions>
      ) : (
        <button
          className="btn-style"
          onClick={handleAddCart}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size="1.5rem" /> : "Add to Cart"}
        </button>
      )}
      <Toast
        open={openSnackbar.open}
        handleClose={handleCloseSnackbar}
        message={openSnackbar.message}
        severity={openSnackbar.severity}
      />
    </>
  );
});
AddToCart.displayName = "AddToCart";
export default AddToCart;
