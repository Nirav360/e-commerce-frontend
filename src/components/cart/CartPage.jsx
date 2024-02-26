import { useSelector } from "react-redux";
import { cartProducts } from "../../slice/cartSlice";

const CartPage = () => {
  const cart = useSelector(cartProducts);
  console.log(cart);
  return <div>CartPage</div>;
};

export default CartPage;
