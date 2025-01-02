import "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleChange = (event, value) => {
    if (value !== null) {
      setLanguage(value);
    }
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
      <div style={{ display: "flex", gap: "1rem" }}>
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
      </div>
    </nav>
  );
};

export default Navbar;
