import React from "react";
import { useLanguage } from "../context/LanguageContext";
import productsService from "../axios/productService";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductModal from "../components/ProductModal";
import { useNavigate } from 'react-router';

export const Products = () => {
  const { language, translations } = useLanguage();
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [debouncedSearch] = useDebounce(search, 500);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const { products, totalPages } = await productsService.getAllProducts(
        page,
        debouncedSearch,
        category
      );
      setProducts(products);
      setTotalPage(totalPages);
      console.log(products);
      console.log(totalPage);
    }
    fetchProducts();
  }, [page, debouncedSearch, category]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    setQuantity(1);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleDetailClick = (productId, e) => {
    e.stopPropagation();
    navigate(`/product/${productId}`);
  };


  const filterStyles = {
    padding: "1rem",
    backgroundColor: "#f0efee",
    marginBottom: "2rem",
    borderRadius: "0 0 100px 100px",
  };

  return (
    <div>
      <div style={filterStyles}>
        <div className="filter-container">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="filter-select"
          >
            <option value="All">{translations[language].filterAll}</option>
            <option value="Makanan">{translations[language].filterFood}</option>
            <option value="Minuman">
              {translations[language].filterDrink}
            </option>
          </select>

          <input
            type="text"
            placeholder={translations[language].filterSearch}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="search-input"
          />
        </div>
      </div>
      <div className="products-grid">
        {products?.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product)}
          >
            <div className="image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h3 style={{ color: "rgb(49, 48, 48)" }}>{product.name}</h3>
            <p>Rp {product.price.toLocaleString()}</p>
            <button
              className="detail-button"
              onClick={(e) => handleDetailClick(product.id, e)}
            >
              Detail
            </button>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Stack spacing={2}>
          <Pagination
            count={totalPage ? totalPage : 1} // Jumlah halaman yang akan ditampilkan
            page={page} // Tetapkan halaman aktif
            onChange={(event, value) => {
              setPage(value); // Update state saat halaman berubah
              console.log("Halaman yang dipilih:", value);
            }}
          />
        </Stack>
      </div>
      {/* Modal */}
      <ProductModal
        open={isModalOpen}
        onClose={handleModalClose}
        product={selectedProduct}
        quantity={quantity}
        onQuantityIncrease={incrementQuantity}
        onQuantityDecrease={decrementQuantity}
      />
    </div>
  );
};

export default Products;
