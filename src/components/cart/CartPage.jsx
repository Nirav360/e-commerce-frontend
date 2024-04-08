import { useDispatch, useSelector } from "react-redux";
import { cartProducts, resetCart } from "../../slice/cartSlice";
import CartTile from "./CartTile";
import { Link } from "react-router-dom";
import "./cart.css";
import { useCallback, useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useGetCartMutation } from "../../services/commonApiSlice";
import Spinner from "../spinner/Spinner";
import Toast from "../snackbar/Toast";

// const shippingCharges = 200;
const CartPage = () => {
  const { cartState, subtotal, shippingCharges, tax, total } =
    useSelector(cartProducts);

  // const [cartDetails, setCartDetails] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: "",
  });
  const [getCart, { isLoading }] = useGetCartMutation();
  const dispatch = useDispatch();

  const createData = useCallback((name, price) => {
    return { name, price };
  }, []);

  // const tax = useMemo(() => {
  //   return Math.round(cartDetails?.bill ?? 0 * 0.18);
  // }, [cartDetails]);

  // const total = useMemo(() => {
  //   return cartDetails?.bill ?? 0 + shippingCharges + tax;
  // }, [cartDetails, tax]);

  const rows = [
    createData("Subtotal", `₹${subtotal.toLocaleString() ?? 0}`),
    createData("Shipping Charges", `₹${shippingCharges}`),
    createData("Tax", `₹${tax.toLocaleString()}`),
    createData("Total", `₹${total.toLocaleString()}`),
  ];

  const fetchCart = async () => {
    try {
      const response = await getCart();
      if (response.error) {
        setOpenSnackbar({
          open: true,
          message: response.error.data?.message,
        });
        return;
      }
      // const { cart } = response.data;
      // setCartDetails(cart);
    } catch (error) {
      setOpenSnackbar({
        open: true,
        message: error?.data?.message ?? "No Server Response",
      });
    }
  };

  // useEffect(() => {
  //   if (cartState.length > 0) {
  //     dispatch(calculatePrice());
  //   } else {
  //     dispatch(resetCart());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cartState]);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      {isLoading && <Spinner />}

      <Toast
        open={openSnackbar.open}
        handleClose={handleCloseSnackbar}
        message={openSnackbar.message}
        severity={"error"}
      />
      <div className="cart">
        <main>
          {cartState.length > 0 ? (
            cartState.map((item, idx) => <CartTile key={idx} cartItem={item} />)
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
            {cartState.length > 0 && (
              <Link
                to="/shipping"
                className="btn-style"
                onClick={() => dispatch(resetCart())}
              >
                Checkout
              </Link>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default CartPage;
