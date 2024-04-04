import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../slice/authSlice";
import { useLoginMutation } from "../../services/commonApiSlice";

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formDetails).unwrap();
      dispatch(setToken({ accessToken: response.data.accessToken }));
      setFormDetails({ email: "", password: "" });
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
    // if (email === "admin" && password === "admin") {
    //   return navigate("/home");
    // }
    // alert("Invalid Credentials!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <TextField
              required
              type="text"
              label="Email"
              name="email"
              fullWidth
              autoComplete="email"
              onChange={handleChange}
              value={formDetails.email}
            />
          </div>
          <div>
            <TextField
              required
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              fullWidth
              autoComplete="current-password"
              value={formDetails.password}
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              size="small"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress size="1.5rem" /> : "Submit"}
            </Button>
          </div>
          <p className="text-center">
            Don&apos;t have an account?
            <Link to={"register"} className="font-extrabold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
