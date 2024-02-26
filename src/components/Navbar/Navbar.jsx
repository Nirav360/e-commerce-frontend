import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { cartProducts } from "../../slice/cartSlice";

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
  const cart = useSelector(cartProducts);
  const cartLength = cart.length;
  
  const pages = [
    { name: "Home", link: "/home" },
    { name: "Products", link: "/products" },
    {
      name: (
        <Badge badgeContent={cartLength} color="primary">
          <ShoppingCartRoundedIcon />
        </Badge>
      ),
      link: "/cart",
    },
  ];
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
