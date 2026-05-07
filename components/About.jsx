"use client";

import { useLang } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLang();

  const stats = [
    { value: "2+", label: "Years of experience" },
    { value: "4+", label: "Projects delivered" },
    { value: "5+", label: "Technologies mastered" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            01. {t.about.title}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.about.title}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <div className="lg:col-span-3">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t.about.body}
            </p>

            {/* Decorative terminal block */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-[#0d1530] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-800 bg-[#111827]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-500 text-xs font-mono">profile.py</span>
              </div>
              <div className="p-4 font-mono text-sm text-slate-400 space-y-1">
                <p>
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-cyan-300">Developer</span>:
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">name</span>{" "}
                  <span className="text-slate-600">=</span>{" "}
                  <span className="text-green-400">&quot;Brando Cabrera&quot;</span>
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">focus</span>{" "}
                  <span className="text-slate-600">=</span>{" "}
                  <span className="text-green-400">&quot;Python Backend&quot;</span>
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">loves</span>{" "}
                  <span className="text-slate-600">=</span>{" "}
                  <span className="text-yellow-400">[&quot;AI&quot;, &quot;Architecture&quot;, &quot;APIs&quot;]</span>
                </p>
                <p className="pl-4">
                  <span className="text-slate-500">available</span>{" "}
                  <span className="text-slate-600">=</span>{" "}
                  <span className="text-cyan-400">True</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-800 bg-[#0d1530] p-6 glow-cyan transition-all duration-300 hover:border-cyan-400/30"
              >
                <p className="text-3xl font-bold gradient-text mb-1">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
