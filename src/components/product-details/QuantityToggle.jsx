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
      {/* <div className="flex my-2 justify-center items-center border rounded-2xl">
        <IconButton size="small" color="inherit" onClick={increment}>
          <AddRounded />
        </IconButton>
        <p className="mx-2">{quantity}</p>
        <IconButton size="small" color="inherit" onClick={decrement}>
          <RemoveRounded />
        </IconButton>
      </div> */}

      <AddToCart type="button" product={product} quantity={quantity} />
    </>
  );
};

export default QuantityToggle;
