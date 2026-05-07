"use client";

import { useLang } from "@/context/LanguageContext";

const groupIcons = {
  Backend: "⚙",
  Frontend: "🖥",
  Tools: "🛠",
  Herramientas: "🛠",
  AI: "🤖",
  IA: "🤖",
  "Software Architecture": "🏗",
  "Arquitectura de Software": "🏗",
};

const groupColors = {
  Backend: "from-cyan-500/20 to-blue-600/20 border-cyan-500/20",
  Frontend: "from-violet-500/20 to-purple-600/20 border-violet-500/20",
  Tools: "from-emerald-500/20 to-teal-600/20 border-emerald-500/20",
  Herramientas: "from-emerald-500/20 to-teal-600/20 border-emerald-500/20",
  AI: "from-orange-500/20 to-amber-600/20 border-orange-500/20",
  IA: "from-orange-500/20 to-amber-600/20 border-orange-500/20",
  "Software Architecture": "from-rose-500/20 to-pink-600/20 border-rose-500/20",
  "Arquitectura de Software": "from-rose-500/20 to-pink-600/20 border-rose-500/20",
};

const badgeColors = {
  Backend: "bg-cyan-400/10 text-cyan-300 border border-cyan-400/20",
  Frontend: "bg-violet-400/10 text-violet-300 border border-violet-400/20",
  Tools: "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20",
  Herramientas: "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20",
  AI: "bg-orange-400/10 text-orange-300 border border-orange-400/20",
  IA: "bg-orange-400/10 text-orange-300 border border-orange-400/20",
  "Software Architecture": "bg-rose-400/10 text-rose-300 border border-rose-400/20",
  "Arquitectura de Software": "bg-rose-400/10 text-rose-300 border border-rose-400/20",
};

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1530]/50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            02. {t.skills.title}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.skills.title}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.skills.groups.map((group) => (
            <div
              key={group.label}
              className={`rounded-2xl border bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-1 ${
                groupColors[group.label] ?? "from-slate-500/10 to-slate-600/10 border-slate-500/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{groupIcons[group.label] ?? "◆"}</span>
                <h3 className="text-white font-semibold text-sm">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
                      badgeColors[group.label] ??
                      "bg-slate-400/10 text-slate-300 border border-slate-400/20"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
