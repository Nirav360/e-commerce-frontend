import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import React from "react";

const QuantityToggle = ({ quantity, increment, decrement }) => {
  return (
    <>
      <div className="flex my-2 justify-center items-center border rounded-2xl">
        <IconButton size="small" color="inherit" onClick={increment}>
          <AddRounded />
        </IconButton>
        <p className="mx-2">{quantity}</p>
        <IconButton size="small" color="inherit" onClick={decrement}>
          <RemoveRounded />
        </IconButton>
      </div>
      <Button variant="contained">Add to Cart</Button>
    </>
  );
};

export default QuantityToggle;
