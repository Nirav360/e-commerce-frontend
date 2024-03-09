import { useDispatch, useSelector } from "react-redux";
import {
  addProductsInCart,
  calculatePrice,
  cartProducts,
  resetCart,
} from "../../slice/cartSlice";
import CartTile from "./CartTile";
import { Link } from "react-router-dom";
import "./cart.css";
import { useCallback, useEffect } from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const CartPage = () => {
  const { cartState, subtotal, shippingCharges, tax, total } =
    useSelector(cartProducts);
  const dispatch = useDispatch();

  const createData = useCallback((name, price) => {
    return { name, price };
  }, []);

  const rows = [
    createData("Subtotal", `₹${subtotal.toLocaleString()}`),
    createData("Shipping Charges", `₹${shippingCharges}`),
    createData("Tax", `₹${tax.toLocaleString()}`),
    createData("Total", `₹${total.toLocaleString()}`),
  ];

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
    } else {
      dispatch(resetCart());
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
            <Table
              sx={{ width: "100%", tableLayout: "fixed" }}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                        fontWeight: 700,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {cartState.length > 0 && <Link to="/shipping">Checkout</Link>}
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartPage;
