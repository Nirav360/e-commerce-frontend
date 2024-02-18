import { Breadcrumbs, Typography } from "@mui/material";

const CategoryNavigation = ({ category }) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Products</Typography>
        {category && <Typography color="text.primary">{category}</Typography>}
      </Breadcrumbs>
    </>
  );
};

export default CategoryNavigation;
