import { useDispatch, useSelector } from "react-redux";
import {
  addProductsInCart,
  calculatePrice,
  cartProducts,
} from "../../slice/cartSlice";
import CartTile from "./CartTile";
import { Link } from "react-router-dom";
import "./cart.css";
import { useEffect } from "react";

const CartPage = () => {
  const { cartState, subtotal, shippingCharges, tax, total } =
    useSelector(cartProducts);
  const dispatch = useDispatch();

  const handleDecrement = (cartItem) => {
    if (cartItem.quantity <= 1) return;
    dispatch(
      addProductsInCart({ ...cartItem, quantity: cartItem.quantity - 1 })
    );
  };

  const handleIncrement = (cartItem) => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(
      addProductsInCart({ ...cartItem, quantity: cartItem.quantity + 1 })
    );
  };

  useEffect(() => {
    if (cartState.length > 0) {
      dispatch(calculatePrice());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartState]);

  return (
    <>
      <div className="cart">
        <main>
          {cartState.length > 0 ? (
            cartState.map((item, idx) => (
              <CartTile
                incrementHandler={handleIncrement}
                decrementHandler={handleDecrement}
                key={idx}
                cartItem={item}
              />
            ))
          ) : (
            <h1>No Items Added</h1>
          )}
        </main>
        <aside>
          <div className="bill">
            <h1>Billing Details</h1>
            <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
            <p>Shipping Charges: ₹{shippingCharges}</p>
            <p>Tax: ₹{tax.toLocaleString()}</p>
            {/* <p>
            Discount: <em className="red"> - {discount}</em>
          </p> */}
            <p>
              <b>Total: ₹{total.toLocaleString()}</b>
            </p>

            {cartState.length > 0 && <Link to="/shipping">Checkout</Link>}
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartPage;
