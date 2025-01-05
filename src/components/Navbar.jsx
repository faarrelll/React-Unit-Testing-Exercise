import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLanguage } from "../context/LanguageContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    if (value !== null) {
      setLanguage(value);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/login');
  };

  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#f0efee",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: "2rem",
        paddingLeft: "2rem",
      }}
    >
      <div className="logo" style={{ fontWeight: "600", fontSize: "1rem" }}>
        {translations[language].title}
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          {translations[language].home}
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          {translations[language].products}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          {translations[language].contact}
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link-active-cart" : "nav-link"
          }
        >
          <Badge color="error" badgeContent={totalQuantity}>
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
        <ToggleButtonGroup
          color="primary"
          value={language}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="id">ID</ToggleButton>
          <ToggleButton value="en">EN</ToggleButton>
        </ToggleButtonGroup>
        <div className="nav-link">
          <AccountCircleIcon
            style={{ cursor: "pointer" }}
            onClick={handleMenuOpen}
          />
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              {user?.firstName ? user.firstName : "Guest"}
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;