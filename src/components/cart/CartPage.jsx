import { useSelector } from "react-redux";
import { cartProducts } from "../../slice/cartSlice";
import CartTile from "./CartTile";
import { Link } from "react-router-dom";
import "./cart.css";

const subtotal = 5000;
const shippingCharges = 100;
const tax = subtotal * 0.18;
const total = subtotal + shippingCharges + tax;

const CartPage = () => {
  const cartItems = useSelector(cartProducts);
  console.log(cartItems);
  return (
    <>
      <div className="cart">
        <main>
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <CartTile
                // incrementHandler={incrementHandler}
                // decrementHandler={decrementHandler}
                // removeHandler={removeHandler}
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
            <p>Subtotal: ₹{subtotal}</p>
            <p>Shipping Charges: ₹{shippingCharges}</p>
            <p>Tax: ₹{tax}</p>
            {/* <p>
            Discount: <em className="red"> - ₹{discount}</em>
          </p> */}
            <p>
              <b>Total: ₹{total}</b>
            </p>

            {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartPage;
