import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const pages = [
  { name: "Home", link: "/home" },
  { name: "Products", link: "/products" },
  {
    name: <ShoppingCartRoundedIcon />,
    link: "/",
  },
];
const styles = {
  logo: {
    marginRight: "auto",
  },
  menuButton: {
    marginLeft: "auto",
  },
};
function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense">
        {/* Logo aligned to the left */}
        <Typography variant="h6" component="div" sx={styles.logo}>
          Logo
        </Typography>

        {/* Menu items aligned to the right */}
        {pages.map((menu, i) => (
          <div key={i}>
            <Button
              color="inherit"
              onClick={() => navigate(menu.link)}
              sx={styles.menuButton}
            >
              {menu.name}
            </Button>
          </div>
        ))}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
