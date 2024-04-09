import { useEffect } from "react";
import { store } from "../../store/store";
import { commonApiSlice } from "../../services/commonApiSlice";
import { Outlet } from "react-router-dom";

const PrefetchCart = () => {
  useEffect(() => {
    console.log("subscribing");
    const cart = store.dispatch(commonApiSlice.endpoints.getCart.initiate());

    return () => {
      console.log("unsubscribing");
      cart.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
export default PrefetchCart;
