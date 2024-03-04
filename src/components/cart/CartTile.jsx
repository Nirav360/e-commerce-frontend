import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const CartTile = ({ cartItem }) => {
  const { thumbnail, id, title } = cartItem;
  return (
    <>
      <div className="cart-item">
        <img src={`${thumbnail}`} alt={title} />
        <article>
          <Link to={`/product/${id}`}>{title}</Link>
          <span>₹{300}</span>
        </article>

        <div>
          <button onClick={null}>-</button>
          <p>{1}</p>
          <button onClick={null}>+</button>
        </div>

        <button onClick={null}>
          <DeleteIcon />
        </button>
      </div>
    </>
  );
};

export default CartTile;
