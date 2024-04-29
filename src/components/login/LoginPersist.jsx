import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentRefreshError,
  currentToken,
  resetState,
} from "../../slice/authSlice";
import { useRefreshMutation } from "../../services/commonApiSlice";
import Spinner from "../spinner/Spinner";
import Toast from "../snackbar/Toast";
import { Outlet, useNavigate } from "react-router-dom";
import { commonApi } from "../../services/commonApi";

const LoginPersist = () => {
  const token = useSelector(currentToken);
  const dispatch = useDispatch();
  const isRefreshError = useSelector(currentRefreshError);

  const [trueSuccess, setTrueSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const [refresh, { isLoading, isUninitialized, isSuccess, isError, error }] =
    useRefreshMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
        setTrueSuccess(true);
      } catch (err) {
        console.error(err);
      }
    };

    if (!token) verifyRefreshToken();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isRefreshError) {
      navigate("/");
      dispatch(resetState());
      setTimeout(() => {
        dispatch(commonApi.util.resetApiState());
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshError]);

  useEffect(() => {
    if (isError) return setOpen(true);
  }, [isError]);

  return (
    <>
      {isLoading && <Spinner />}
      <Toast
        open={open}
        handleClose={() => setOpen(false)}
        message={error?.data?.message ?? "No server response"}
        severity={"error"}
      />
      {(isSuccess && trueSuccess) || (isUninitialized && token) ? (
        <Outlet />
      ) : null}
    </>
  );
};
export default LoginPersist;
