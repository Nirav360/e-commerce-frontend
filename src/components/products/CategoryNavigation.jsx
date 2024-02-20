import { Breadcrumbs, Typography } from "@mui/material";

const CategoryNavigation = ({ category }) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary" sx={{fontSize: 18, fontWeight: "bold"}}>Products</Typography>
        {category && <Typography color="text.primary" sx={{fontSize: 18, fontWeight: "bold"}}>{category}</Typography>}
      </Breadcrumbs>
    </>
  );
};

export default CategoryNavigation;
