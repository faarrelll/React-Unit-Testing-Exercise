import { getAllProducts } from "../test/mock/productService";
import { fireEvent, screen, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { customRender } from "../utils/RenderUtils";
import Products from "../pages/Products";

describe("Products Component", () => {
  it("should update the search input value when a user types in the search field", async () => {
    customRender(<Products />);
    const searchInput = screen.getByPlaceholderText("Cari produk...");

    await act(async () => {
      fireEvent.change(searchInput, { target: { value: "nasi" } });
    });
    // fireEvent.change(searchInput, { target: { value: "nasi" } });

    expect(getAllProducts).toHaveBeenCalledTimes(1);
    expect(searchInput.value).toBe("nasi");
  });

  it("should open modal when product card is clicked", async () => {
    customRender(<Products />);
    const productCard = await screen.findByText(
      "Nasi Goreng Cak Kodir Special Telur Biawak"
    );

    fireEvent.click(productCard);

    const modal = screen.getByRole("dialog");
    expect(getAllProducts).toHaveBeenCalledTimes(1);
    expect(modal).toBeInTheDocument();
  });
});
