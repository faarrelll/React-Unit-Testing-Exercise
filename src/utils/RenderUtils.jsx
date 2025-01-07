import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";

const AllProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <LanguageProvider>{children}</LanguageProvider>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender };
