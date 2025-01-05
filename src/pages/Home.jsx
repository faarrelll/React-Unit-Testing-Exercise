import "react";
import mainLogo from "../assets/images/bg.png";
import products from "../data/products";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { language, translations } = useLanguage();

  return (
    <div>
      <section className="hero">
        <div className="logo-container">
          <img src={mainLogo} alt="Logo" className="logo-image" />
        </div>
        <h2
          style={{
            marginBottom: "2rem",
            textAlign: "center",
            fontSize: "3.3rem",
            color: "rgb(49, 48, 48)",
            padding: "2rem",
          }}
        >
          {translations[language].hero1} <br /> {translations[language].hero2}
          <br />
          {translations[language].hero3}
        </h2>
      </section>
      <section className="featured-products">
        <h2 style={{ color: "rgb(49, 48, 48)" }}>{translations[language].homeContent}</h2>
        <div className="product-grid">
          {products.map((i) => (
            <div key={i.id} className="product-card">
              <div className="image-container">
                <img src={i.image} alt={`Product ${i.id}`} />
              </div>
              <h3 style={{ color: "rgb(49, 48, 48)" }}>{i.name}</h3>
              <p>{`Rp. ${i.price}`}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
