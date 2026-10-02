"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <div role="group" aria-label={language === "es" ? "Idioma" : "Language"} className="inline-flex shrink-0 items-center rounded-full border border-neutral-300 p-1">
      {(["en", "es"] as const).map((value) => (
        <button key={value} type="button" lang={value} aria-label={value === "en" ? "English" : "Español"} aria-pressed={language === value} onClick={() => setLanguage(value)} className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 ${language === value ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-200"}`}>
          {value.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
