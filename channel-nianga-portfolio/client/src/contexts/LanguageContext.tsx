import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language, portfolioData } from "@/data/portfolio";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof portfolioData.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: portfolioData[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
