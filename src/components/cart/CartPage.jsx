import { useSelector } from "react-redux";
import { cartProducts } from "../../slice/cartSlice";
import CartTile from "./CartTile";

const CartPage = () => {
  const cart = useSelector(cartProducts);
  console.log(cart);
  return (
    <>
      <div className="container min-h-[80vh]">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6">
            <CartTile />
          </div>
          <div>bill</div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
