import axiosInstance from "./axiosInstance.js";

const productsService = {
  getAllProducts: async (page, query, category) => {
    try {
      const response = await axiosInstance.get("/products");
      const data = response.data;
      console.log(`category: ${category}, page: ${page}, query: ${query}`);
      
      let filteredProducts = data;
      
      
      if (category !== "All") {
        filteredProducts = data.filter(
          (product) => product.category === category
        );
      }
      
      if (query) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      }

      return paginateProducts(filteredProducts, page);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }
};

const paginateProducts = (data, page) => {
  const totalProducts = data.length;
  const totalPages = Math.ceil(totalProducts / 10);
  const startIndex = (page - 1) * 10;
  const endIndex = Math.min(startIndex + 10, totalProducts);
  const paginatedProducts = data.slice(startIndex, endIndex);
  return {
    products: paginatedProducts,
    totalPages,
  };
};

export default productsService;