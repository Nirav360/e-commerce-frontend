import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formDetails, setFormDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

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
    console.log(formDetails);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <TextField
              required
              type="text"
              label="Username"
              name="username"
              fullWidth
              autoComplete="username"
              onChange={handleChange}
              value={formDetails.username}
            />
          </div>
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
            <Button type="submit" variant="contained" className="w-full">
              Submit
            </Button>
          </div>
          <p className="text-center">
            Have an account?{" "}
            <Link to={"/"} className="font-extrabold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
