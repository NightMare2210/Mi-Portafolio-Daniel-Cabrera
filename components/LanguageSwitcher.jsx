"use client";

import { useLang } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLanguage } = useLang();

  return (
    <div className="flex items-center gap-1 text-sm font-semibold select-none">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 rounded transition-colors duration-200 ${
          lang === "en"
            ? "text-cyan-400 border border-cyan-400/50 bg-cyan-400/10"
            : "text-slate-400 hover:text-slate-200"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-slate-600">|</span>
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 py-0.5 rounded transition-colors duration-200 ${
          lang === "es"
            ? "text-cyan-400 border border-cyan-400/50 bg-cyan-400/10"
            : "text-slate-400 hover:text-slate-200"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
