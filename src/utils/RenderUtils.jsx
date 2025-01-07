import { render } from "@testing-library/react";
import Products from "../pages/Products";
import ProductModal from "../components/ProductModal";
import { LanguageProvider } from "../context/LanguageContext";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { AuthProvider } from "../context/AuthContext";

const renderProducts = () => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <LanguageProvider>
            <Products />
          </LanguageProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

const renderProductsModal = ({
  open,
  onClose,
  product,
  quantity,
  onQuantityIncrease,
  onQuantityDecrease,
}) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <LanguageProvider>
            <ProductModal
              open={open}
              onClose={onClose}
              product={product}
              quantity={quantity}
              onQuantityIncrease={onQuantityIncrease}
              onQuantityDecrease={onQuantityDecrease}
            />
          </LanguageProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { renderProducts, renderProductsModal };
