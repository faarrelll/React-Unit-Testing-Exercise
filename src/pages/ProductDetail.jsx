import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import productsService from "../axios/productService";
import { useLanguage } from "../context/LanguageContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, translations } = useLanguage();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productsService.getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Product not found");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="error-container">
        <p>{error || "Product not found"}</p>
        <button onClick={() => navigate(-1)} className="back-button">
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f0efee",
          marginBottom: "2rem",
          borderRadius: "0 0 100px 100px",
        }}
      >
        <h2 className="form-title" style={{ color: "rgb(49, 48, 48)" }}>
          {translations[language].productsDetail}
        </h2>
      </div>

      <div className="product-detail-container">
        <div className="product-detail-card">
          <div className="product-detail-content">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  console.error("Error loading image:", e);
                  console.log("Attempted image URL:", product.image);
                }}
              />
            </div>
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-price">
                Rp {product.price.toLocaleString()}
              </p>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-description">{product.description}</p>
              <button
                onClick={() => navigate("/products")}
                className="back-button"
              >
                Back to Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
