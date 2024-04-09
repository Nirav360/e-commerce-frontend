import { memo } from "react";
import { CardActions, CircularProgress } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Toast from "../snackbar/Toast";
import "../cart/cart.css";
import useCreateCart from "../../hooks/useCreateCart";

const AddToCart = memo(({ type, product, quantity }) => {
  // const [openSnackbar, setOpenSnackbar] = useState(false);
  const { onCreateCart, isLoading, openSnackbar, handleCloseSnackbar } =
    useCreateCart();

  const handleAddCart = () => {
    const payload = {
      itemId: product._id,
      quantity: quantity,
    };

    onCreateCart(payload);
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
