import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formDetails;
    if (email === "admin" && password === "admin") {
      return navigate("/home");
    }
    alert("Invalid Credentials!");
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
            <Button type="submit" variant="contained" className="w-full">
              Submit
            </Button>
          </div>
          <p className="text-center">
            Don&apos;t have an account?
            <Link className="font-extrabold hover:underline">Register</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
