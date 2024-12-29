import { useState } from "react";
import { products } from "../data/products";
import ProductModal from "../components/ProductModal";

const Products = () => {
  const [productList] = useState(products);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [quantity, setQuantity] = useState(1);
  const filteredProducts = productList.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    setQuantity(1);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const filterStyles = {
    padding: "1rem",
    backgroundColor: "#f0efee",
    marginBottom: "2rem",
    borderRadius: "0 0 100px 100px",
  };


  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1)); 
  };

  return (
    <div className="products-page">
      <div style={filterStyles}>
        <div className="filter-container">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-select"
          >
            <option value="All">Semua Kategori</option>
            <option value="Makanan">Makanan</option>
            <option value="Minuman">Minuman</option>
          </select>

          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
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
          </div>
        ))}
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
