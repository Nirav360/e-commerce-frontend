import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  addProductsInCart,
  removeProductsFromCart,
} from "../../slice/cartSlice";

const CartTile = ({ cartItem }) => {
  const { thumbnail, id, title, quantity, price } = cartItem;
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if (cartItem.quantity <= 1) return;
    dispatch(
      addProductsInCart({ ...cartItem, quantity: cartItem.quantity - 1 })
    );
  };

  const handleIncrement = () => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(
      addProductsInCart({ ...cartItem, quantity: cartItem.quantity + 1 })
    );
  };

  return (
    <>
      <div className="cart-item">
        <img src={`${thumbnail}`} alt={title} />
        <article>
          <Link to={`/product/${id}`}>{title}</Link>
          <span>{`₹${price.toLocaleString()}`}</span>
        </article>

        <div>
          <button onClick={handleDecrement}>-</button>
          <p>{quantity}</p>
          <button onClick={handleIncrement}>+</button>
        </div>

        <button onClick={() => dispatch(removeProductsFromCart(id))}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default CartTile;
