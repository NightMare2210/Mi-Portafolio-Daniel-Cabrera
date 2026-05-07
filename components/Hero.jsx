"use client";

import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.03)_0%,_transparent_70%)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up leading-tight">
          {t.hero.name}
        </h1>

        {/* Title */}
        <p className="text-lg sm:text-xl gradient-text font-semibold mb-6 animate-fade-in-up max-w-3xl mx-auto">
          {t.hero.title}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed">
          {t.hero.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up">
          <button
            onClick={() => handleScroll("#projects")}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.hero.cta.projects}
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-xl border border-cyan-400/40 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-400/10 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.hero.cta.cv}
          </a>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.hero.cta.contact}
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs uppercase tracking-widest">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
