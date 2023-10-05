import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink color="inherit" to={"/home"} className="hover:underline">
          Home
        </NavLink>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </>
  );
};

export default PageNavigation;
