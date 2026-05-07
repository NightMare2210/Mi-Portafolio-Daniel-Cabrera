"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MAX_THUMBNAILS = 8;

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function PlaceholderIcon() {
  return (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ModalCarousel({ images, gradient, accent, id }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={`relative h-56 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center overflow-hidden gap-4`}>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        </div>
        <div className={`relative z-10 bg-gradient-to-br ${accent} bg-clip-text text-transparent opacity-40`}>
          <PlaceholderIcon />
        </div>
        <div className={`relative z-10 text-5xl font-black bg-gradient-to-br ${accent} bg-clip-text text-transparent opacity-20 select-none tracking-tighter`}>
          {String(id).padStart(2, "0")}
        </div>
      </div>
    );
  }

  const thumbnails = images.slice(0, MAX_THUMBNAILS);
  const extraThumbs = images.length - MAX_THUMBNAILS;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-56 overflow-hidden bg-black rounded-xl">
        <Image
          src={images[current]}
          alt={`Project image ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all text-lg"
              aria-label="Previous image"
            >‹</button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all text-lg"
              aria-label="Next image"
            >›</button>
            <div className="absolute bottom-3 right-3 text-xs text-white/60 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {thumbnails.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === current ? "border-cyan-400" : "border-slate-700 opacity-60 hover:opacity-100"}`}
            >
              <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="56px" />
            </button>
          ))}
          {extraThumbs > 0 && (
            <div className="flex-shrink-0 w-14 h-10 rounded-lg bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-xs text-slate-400 font-medium">
              +{extraThumbs}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, lang, t, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const info = project[lang];
  const details = project.details?.[lang];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        transition: "opacity 200ms ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-700 bg-[#0a0f1e] shadow-2xl overflow-hidden flex flex-col"
        style={{
          transition: "opacity 200ms ease, transform 200ms ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.95)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all"
          aria-label={t.projects.close}
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col md:flex-row flex-1 min-h-0">
          <div className="md:w-2/5 flex-shrink-0 flex flex-col gap-4 p-5 border-b border-slate-800 md:border-b-0 md:border-r md:border-slate-800 md:overflow-y-auto">
            <ModalCarousel
              images={project.images}
              gradient={project.gradient}
              accent={project.accent}
              id={project.id}
            />

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-auto pt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-medium transition-all duration-200"
                >
                  <GithubIcon />
                  {t.projects.github}
                </a>
              )}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 text-xs font-medium transition-all duration-200"
                >
                  <ExternalIcon />
                  {t.projects.demo}
                </a>
              ) : (
                <span className="flex items-center justify-center px-4 py-2.5 rounded-lg bg-slate-800/50 text-slate-600 text-xs font-medium cursor-default border border-slate-800">
                  Coming soon
                </span>
              )}
            </div>
          </div>

          <div className="md:w-3/5 flex flex-col min-h-0 overflow-y-auto p-6 space-y-5">
            <div>
              <h2 className="text-white font-bold text-xl leading-snug mb-3">{info.title}</h2>
              {details && (
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <span className="font-medium">{t.projects.context}:</span>
                    {details.context}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                    <span className="font-medium">{t.projects.role}:</span>
                    {details.role}
                  </span>
                </div>
              )}
            </div>

            {details?.overview && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                  {t.projects.overview}
                </h3>
                <div className="h-px bg-slate-800 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed">{details.overview}</p>
              </div>
            )}

            {details?.highlights?.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                  {t.projects.highlights}
                </h3>
                <div className="h-px bg-slate-800 mb-3" />
                <ul className="space-y-2.5">
                  {details.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
