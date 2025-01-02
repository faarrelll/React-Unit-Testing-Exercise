import axiosInstance from "./axiosInstance.js";

const productsService = {
  getAllProducts: async (page, query, category) => {
    try {
      const response = await axiosInstance.get("/products");
      const data = response.data;
      console.log(`category: ${category},page: ${page},query: ${query}`);
      if (category !== "All") {
        const categoryProducts = data.filter(
          (product) => product.category == category
        );
        if (query) {
          const filteredProducts = categoryProducts.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
        //   const currentPage = Math.ceil(filteredProducts.length / 10);
          return paginateProducts(filteredProducts, page);
        }
        // const currentPage = Math.ceil(categoryProducts.length / 10);
        return paginateProducts(categoryProducts, page);
      }

      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    //   const currentPage = Math.ceil(filteredProducts.length / 10);
      console.log("apakah sampai sini");
      return paginateProducts(filteredProducts, page);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
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
