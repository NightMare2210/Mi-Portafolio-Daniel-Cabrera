"use client";

import { createContext, useContext, useState } from "react";
import content from "@/data/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const t = content[lang];

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));
  const setLanguage = (l) => setLang(l);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
