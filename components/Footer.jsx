"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-slate-400 text-sm">{t.footer.built}</p>
          <p className="text-slate-500 text-xs mt-1">{t.footer.description}</p>
        </div>
        <div className="text-slate-600 text-xs shrink-0">
          © {year} Brando Cabrera — {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
