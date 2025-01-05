import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./layout/layout";
import { Routes, Route } from "react-router";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";


// Login Menggunakan Email = jojo@mail.com dan Password = 123123

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/products"
              element={
                <Layout>
                  <Products />
                </Layout>
              }
            />
            <Route
              path="/product/:id"
              element={
                <Layout>
                  <ProductDetail />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Cart />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Routes>
        </Provider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
