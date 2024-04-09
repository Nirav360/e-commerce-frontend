import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import useCreateCart from "../../hooks/useCreateCart";
import Toast from "../snackbar/Toast";
import Spinner from "../spinner/Spinner";
import { useDeleteCartMutation } from "../../services/commonApiSlice";

const CartTile = ({ cartItem }) => {
  const { thumbnail, _id, title, quantity, price, itemId, stock } = cartItem;
  const { onCreateCart, isLoading, openSnackbar, handleCloseSnackbar } =
    useCreateCart();
  const [deleteCart, { isLoading: loading }] = useDeleteCartMutation();
  // const dispatch = useDispatch();

  const handleDecrement = (itemId) => {
    if (quantity <= 1) return;
    const payload = {
      itemId: itemId,
      quantity: -1,
    };
    onCreateCart(payload);
  };

  const handleIncrement = (itemId) => {
    if (quantity >= stock) return;
    const payload = {
      itemId: itemId,
      quantity: 1,
    };
    onCreateCart(payload);
  };
  return (
    <>
      {isLoading && <Spinner />}
      {loading && <Spinner />}
      <Toast
        open={openSnackbar.open}
        handleClose={handleCloseSnackbar}
        message={openSnackbar.message}
        severity={openSnackbar.severity}
      />
      <div className="cart-item">
        <img src={`${thumbnail}`} alt={title} />
        <article>
          <Link to={`/product/${_id}`}>{title}</Link>
          <span>{`₹${price.toLocaleString()}`}</span>
        </article>

        <div>
          <button onClick={() => handleDecrement(itemId)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => handleIncrement(itemId)}>+</button>
        </div>

        <button onClick={() => deleteCart(itemId)}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default CartTile;
