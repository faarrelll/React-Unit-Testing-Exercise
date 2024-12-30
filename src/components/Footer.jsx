import "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language, translations } = useLanguage();
  return (
    <div>
      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#f0efee",
          color: "black",
          marginTop: "2rem",
          borderRadius: "100px 100px 0 0",
          position: "relative",
        }}
      >
        <p>{translations[language].footer}</p>
      </footer>
    </div>
  );
};

export default Footer;
