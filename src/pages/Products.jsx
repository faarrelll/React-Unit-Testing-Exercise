import { useState } from "react";
import { products } from "../data/products";

const Products = () => {

    const [productList] = useState(products);
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");


    const filteredProducts = productList.filter((product) => {
        const matchCategory =
            category === "All" || product.category === category;
        const matchSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    const filterStyles = {
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        marginBottom: "2rem",
    };

    return (
        <div className="products-page">
            {/* Filter Section */}
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
                    <div key={product.id} className="product-card">
                        <div className="image-container">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h3>{product.name}</h3>
                        <p>Rp {product.price.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
