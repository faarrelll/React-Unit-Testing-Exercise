import { describe, it, expect } from "vitest";
import { renderProductsModal } from "../utils/RenderUtils";
import { product } from "../utils/ProductUtils";

describe("ProductModal Component", () => {
  it("should match the snapshot", async () => {
    const container = renderProductsModal({
      open: true,
      onClose: () => {},
      product: product,
      quantity: 1,
      onQuantityIncrease: () => {},
      onQuantityDecrease: () => {},
    });
    expect(container).toMatchSnapshot();
  });
});
