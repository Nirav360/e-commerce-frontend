import { useEffect, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { cartProducts } from "../../slice/cartSlice";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useLogoutMutation } from "../../services/commonApiSlice";
import Spinner from "../spinner/Spinner";

const styles = {
  logo: {
    marginRight: "auto",
    cursor: "pointer",
  },
  menuButton: {
    marginLeft: "auto",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    cursor: "pointer",
  },
};
function Navbar() {
  const navigate = useNavigate();
  const { cartState } = useSelector(cartProducts);
  const cartLength = cartState.length;
  const [logout, { isLoading, isSuccess, isError, error }] =
    useLogoutMutation();

  const pages = useMemo(
    () => [
      { name: "Products", link: "/products" },
      {
        name: (
          <Badge badgeContent={cartLength} color="primary">
            <ShoppingCartRoundedIcon />
          </Badge>
        ),
        link: "/cart",
      },
      {
        name: (
          <IconButton onClick={logout} color="primary">
            <LogoutRoundedIcon />
          </IconButton>
        ),
        link: "/",
      },
    ],
    [cartLength, logout]
  );

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  if (isError) return <p>Error: {error.data?.message}</p>;
  return (
    <>
      {isLoading && <Spinner />}
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          {/* Logo aligned to the left */}
          <Typography
            variant="h6"
            component="div"
            sx={styles.logo}
            onClick={() => navigate("home")}
          >
            Logo
          </Typography>

          {/* Menu items aligned to the right */}
          {pages.map((menu, i) => (
            <div key={i}>
              <Typography
                color="inherit"
                onClick={() => navigate(menu.link)}
                sx={styles.menuButton}
              >
                {menu.name}
              </Typography>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
