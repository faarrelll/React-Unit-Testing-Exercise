import { describe, it, expect } from "vitest";
import { customRender } from "../utils/RenderUtils";
import { product } from "../utils/ProductUtils";
import ProductModal from "../components/ProductModal";

describe("ProductModal Component", () => {
  it("should match the snapshot", async () => {
    const container = customRender(
      <ProductModal
        open={true}
        onClose={() => {}}
        product={product}
        quantity={1}
        onQuantityIncrease={() => {}}
        onQuantityDecrease={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
