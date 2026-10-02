"use client";

import { createContext, useContext, useEffect, useState } from "react";
import spanish from "@/lib/es.json";
import { useRouter } from "next/navigation";

export type Language = "en" | "es";
const translations: Record<string, string> = spanish;
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
} | null>(null);

export default function LanguageProvider({ initialLanguage, children }: {
  initialLanguage: Language;
  children: React.ReactNode;
}) {
  const [language, updateLanguage] = useState(initialLanguage);
  const router = useRouter();
  const t = (text: string) => language === "es" ? translations[text] ?? text : text;

  useEffect(() => {
    document.documentElement.lang = language;
    const translate = (text: string) => language === "es" ? translations[text] ?? text : text;
    document.title = translate("Pobe Poxo - Central American Game Studio");
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute("content", translate("Central American art and interactive studio"));
    }
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute("content", document.title);
    }
  }, [language]);

  function setLanguage(next: Language) {
    // The server reads this preference too, so reloads render the chosen language.
    document.cookie = `pobe-language=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    updateLanguage(next);
    router.refresh();
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
