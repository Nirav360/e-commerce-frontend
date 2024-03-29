import { Alert, CardActions, Slide, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { memo, useState } from "react";
import { addProductsInCart } from "../../slice/cartSlice";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
const AddToCart = memo(({ type, product, quantity }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddCart = () => {
    setOpen(true);
    const prod = {
      ...product,
      quantity: quantity,
    };
    dispatch(addProductsInCart(prod));
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
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={SlideTransition}
        key={SlideTransition.name}
        autoHideDuration={1200}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Product added in cart
        </Alert>
      </Snackbar>
    </>
  );
});
AddToCart.displayName = "AddToCart";
export default AddToCart;
