import { useCallback, useState } from "react";
import { useCreateCartMutation } from "../services/commonApiSlice";

const useCreateCart = () => {
  const [createCart, { isLoading }] = useCreateCartMutation();
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar((prev) => ({ ...prev, open: false }));
  }, []);

  const onCreateCart = async (reqBody) => {
    try {
      const response = await createCart(reqBody).unwrap();
      setOpenSnackbar({
        open: true,
        message: response.message ?? "No Server response",
        severity: "success",
      });
    } catch (err) {
      setOpenSnackbar({
        open: true,
        message: err.data?.message ?? "No Server response",
        severity: "error",
      });
    }
  };
  return { onCreateCart, isLoading, openSnackbar, handleCloseSnackbar };
};

export default useCreateCart;
