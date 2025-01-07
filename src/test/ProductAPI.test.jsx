import { getAllProducts } from "../test/mock/productService";
import { describe, it, expect } from "vitest";
import { product } from "../utils/ProductUtils";

describe("Product API", () => {
  it("should fetch all products", async () => {
    const products = await getAllProducts();
    expect(products).toEqual({
      products: [product],
      totalPages: 1,
    });
  });
});
