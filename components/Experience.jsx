"use client";

import { useLang } from "@/context/LanguageContext";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1530]/50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            04. {t.experience.title}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.experience.title}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="rounded-2xl border border-slate-800 bg-[#0a0f1e] p-6 hover:border-slate-600 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                <GraduationIcon />
              </div>
              <h3 className="text-white font-bold text-lg">{t.experience.educationLabel}</h3>
            </div>

            <div className="space-y-5">
              {t.experience.education.map((edu, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-cyan-400/30">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-400/50 border-2 border-cyan-400" />
                  <p className="text-white font-semibold text-sm">{edu.degree}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{edu.specialization}</p>
                  <span className="inline-block mt-2 text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 font-medium">
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="rounded-2xl border border-slate-800 bg-[#0a0f1e] p-6 hover:border-slate-600 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center text-violet-400">
                <BriefcaseIcon />
              </div>
              <h3 className="text-white font-bold text-lg">{t.experience.experienceLabel}</h3>
            </div>

            <ul className="space-y-3">
              {t.experience.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
