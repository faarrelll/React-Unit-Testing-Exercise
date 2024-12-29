import "react";

import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router";

const Navbar = () => {
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
        Warung Makan Kuncoro
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          <Badge color="error" badgeContent={4}>
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Navbar;
