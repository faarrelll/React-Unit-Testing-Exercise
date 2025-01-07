import { vi } from "vitest";
import {product} from "../../utils/ProductUtils";

const getAllProducts = vi.fn().mockResolvedValue({
    products: [
      product,
    ],
    totalPages: 1,
  });
  
  vi.mock("../../axios/productService", () => ({
    default: {
      getAllProducts,
    },
  }));
  
  export { getAllProducts };
  