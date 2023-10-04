import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formDetails, setFormDetails] = useState({
    userName: "",
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
    const { userName, password } = formDetails;
    if (userName === "admin" && password === "admin") {
      return navigate('/home')
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
              label="Username"
              name="userName"
              fullWidth
              autoComplete="username"
              onChange={handleChange}
              value={formDetails.userName}
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
        </div>
      </form>
    </>
  );
};

export default LoginForm;
