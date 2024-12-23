import React from "react";

const Navbar = ({ setCurrentPage }) => {
    const navStyle = {
        padding: "2rem",
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    return (
        <nav style={navStyle}>
            <div className="logo">Warung Makan Kuncoro</div>
            <div>
                <span style={linkStyle} onClick={() => setCurrentPage("home")}>
                    Home
                </span>
                <span
                    style={linkStyle}
                    onClick={() => setCurrentPage("products")}
                >
                    Products
                </span>
                <span
                    style={linkStyle}
                    onClick={() => setCurrentPage("contact")}
                >
                    Contact Us
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
