import { Button, CardActions } from "@mui/material";
import { useDispatch } from "react-redux";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { memo } from "react";
import { addProductsInCart } from "../../slice/cartSlice";

const AddToCart = memo(({ type, product }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addProductsInCart(product));
  };

  return (
    <>
      {type === "card" ? (
        <CardActions className="card-btn" onClick={handleAddCart}>
          <ShoppingCartRoundedIcon />
          <p className="font-bold">Add to Cart</p>
        </CardActions>
      ) : (
        <Button variant="contained" onClick={handleAddCart}>
          Add to Cart
        </Button>
      )}
    </>
  );
});
AddToCart.displayName = "AddToCart";
export default AddToCart;
