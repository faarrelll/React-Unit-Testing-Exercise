import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div className="app">
            <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <div className="content">
                {currentPage === "home" && <Home />}
                {currentPage === "products" && <Products />}
                {currentPage === "contact" && <Contact />}
            </div>
            <Footer />
        </div>
    );
}

export default App;
