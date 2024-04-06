import AddToCart from "../products/AddToCart";
import "./productDetails.css";

const QuantityToggle = ({ quantity, increment, decrement, product }) => {
  return (
    <>
      <div className="quantity">
        <button onClick={decrement}>-</button>
        <p>{quantity}</p>
        <button onClick={increment}>+</button>
      </div>

      <AddToCart type="button" product={product} quantity={quantity} />
    </>
  );
};

export default QuantityToggle;
