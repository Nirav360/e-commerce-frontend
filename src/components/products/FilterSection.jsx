import {
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import Spinner from "../spinner/Spinner";
import { memo, useState } from "react";
import { Menu } from "@mui/icons-material";

// eslint-disable-next-line react-refresh/only-export-components
const FilterSection = (props) => {
  const { isFetching, data, checked, handleChange } = props;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {data &&
          data.map((text, i) => (
            <ListItem key={text} disablePadding>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={i === checked}
                    onChange={() => handleChange(i)}
                    name="categoryDrawer"
                  />
                }
                label={text}
              />
            </ListItem>
          ))}
      </List>
    </Box>
  );
  return (
    <>
      {isFetching && <Spinner />}
      <div className="m-2 flex flex-col category-view">
        {data && <h4 className="font-bold">Category</h4>}
        {data &&
          data.map((categories, i) => (
            <div className="flex items-center" key={i}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={i === checked}
                    onChange={() => handleChange(i)}
                    name="category"
                  />
                }
                label={categories}
              />
            </div>
          ))}
      </div>
      <div className="menu-icon m-4">
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(FilterSection);
