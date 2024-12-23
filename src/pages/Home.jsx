import React from "react";
import mainLogo from "../assets/images/bg.png";
import products from "../data/products";

const Home = () => {
    const heroStyle = {
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
    };

    return (
        <div>
            <section style={heroStyle}>
                <h1 style={{ marginBottom: "2rem" }}>
                    Welcome to Warung Makan Kuncoro
                </h1>
                <img
                    src={mainLogo}
                    alt="Logo"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
            </section>
            <section className="featured-products">
                <h2>Best Seller Products</h2>
                <div className="product-grid">
                    {products.map((i) => (
                        <div key={i} className="product-card">
                            <div className="image-container">
                                <img src={i.image} alt={`Product ${i.id}`} />
                            </div>
                            <h3>{i.name}</h3>
                            <p>{`Rp. ${i.price}`}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
