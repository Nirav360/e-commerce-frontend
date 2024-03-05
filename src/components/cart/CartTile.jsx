import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeProductsFromCart } from "../../slice/cartSlice";

const CartTile = ({ cartItem, incrementHandler, decrementHandler }) => {
  const { thumbnail, id, title, quantity, price } = cartItem;
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-item">
        <img src={`${thumbnail}`} alt={title} />
        <article>
          <Link to={`/product/${id}`}>{title}</Link>
          <span>{`₹${(price * 80).toLocaleString()}`}</span>
        </article>

        <div>
          <button onClick={() => decrementHandler(cartItem)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => incrementHandler(cartItem)}>+</button>
        </div>

        <button onClick={() => dispatch(removeProductsFromCart(id))}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default CartTile;
