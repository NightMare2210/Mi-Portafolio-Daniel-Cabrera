"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import projects from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

const MAX_TECH_VISIBLE = 5;

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
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ProjectImage({ images, gradient, accent, id }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={`relative h-44 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center overflow-hidden gap-3`}>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        </div>
        <div className={`relative z-10 bg-gradient-to-br ${accent} bg-clip-text text-transparent opacity-40`}>
          <PlaceholderIcon />
        </div>
        <div className={`relative z-10 text-3xl font-black bg-gradient-to-br ${accent} bg-clip-text text-transparent opacity-25 select-none tracking-tighter`}>
          {String(id).padStart(2, "0")}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-44 overflow-hidden bg-black">
      <Image
        src={images[current]}
        alt={`Project image ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); setCurrent((c) => (c - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white text-xs flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Previous image"
          >‹</button>
          <button
            onClick={(e) => { e.preventDefault(); setCurrent((c) => (c + 1) % images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/80 text-white text-xs flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="Next image"
          >›</button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button key={i} onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const { lang, t } = useLang();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            03. {t.projects.title}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.projects.title}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => {
            const info = project[lang];
            const visibleTech = project.tech.slice(0, MAX_TECH_VISIBLE);
            const extraTech = project.tech.length - MAX_TECH_VISIBLE;

            return (
              <article
                key={project.id}
                className="group rounded-2xl border border-slate-800 bg-[#0d1530] overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 glow-cyan flex flex-col"
              >
                <ProjectImage
                  images={project.images}
                  gradient={project.gradient}
                  accent={project.accent}
                  id={project.id}
                />

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                    {info.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {info.description}
                  </p>

                  <div className="my-4 h-px bg-slate-800" />

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {visibleTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {extraTech > 0 && (
                      <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-700/60 text-slate-400 border border-slate-700">
                        +{extraTech}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 mb-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-medium transition-all duration-200"
                      >
                        <GithubIcon />
                        {t.projects.github}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 text-xs font-medium transition-all duration-200"
                      >
                        <ExternalIcon />
                        {t.projects.demo}
                      </a>
                    )}
                    {!project.demo && (
                      <span className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-slate-800/50 text-slate-600 text-xs font-medium cursor-default border border-slate-800">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0a0f1e] text-xs font-bold transition-all duration-200 shadow-lg shadow-cyan-500/20"
                  >
                    {t.projects.viewDetails}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          t={t}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
