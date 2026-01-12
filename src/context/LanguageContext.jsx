import { createContext, useContext, useState, useMemo } from "react";
import translations from "./translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // 🔹 Supports keys like "nav.home", "about.company.eyebrow"
  const t = (key) => {
    if (!key) return "";

    return key.split(".").reduce((obj, k) => {
      return obj && obj[k] !== undefined ? obj[k] : key;
    }, translations[lang]);
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
