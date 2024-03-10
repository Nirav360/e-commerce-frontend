import { Card, CardContent, Grow } from "@mui/material";
import TickMark from "../../assets/tick-mark.jpg";
import { Link } from "react-router-dom";
import "./cart.css";

const ShippingPage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <Grow in={true} unmountOnExit>
          <Card sx={{ width: 625, margin: "auto" }} elevation={8}>
            <CardContent className="flex flex-col gap-4 justify-center items-center">
              <img src={TickMark} alt="Tick Mark" width={100} />
              <h1 className="font-extrabold text-2xl">
                Your Order is Confirmed!
              </h1>
              <p className="text-center">
                We&apos;ll send you a shipping confirmation email as soon as
                your order ships.
              </p>

              <Link to="/products" className="btn-style my-2">
                Continue Shopping
              </Link>
            </CardContent>
          </Card>
        </Grow>
      </div>
    </>
  );
};

export default ShippingPage;
