"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const SOCIAL_LINKS = {
  email: "danielcabrera27.profesional@gmail.com",
  linkedin: "https://www.linkedin.com/in/brando-cabrera-bonilla-218b6b140/",
  github: "https://github.com/NightMare2210",
  whatsapp: "https://wa.me/593990540716",
};

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission — replace with real endpoint (e.g. Formspree, Resend)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socialLinks = [
    {
      label: t.contact.emailLabel,
      href: `mailto:${SOCIAL_LINKS.email}`,
      icon: <MailIcon />,
      color: "hover:border-cyan-400/50 hover:text-cyan-400",
      value: SOCIAL_LINKS.email,
    },
    {
      label: t.contact.linkedinLabel,
      href: SOCIAL_LINKS.linkedin,
      icon: <LinkedinIcon />,
      color: "hover:border-blue-400/50 hover:text-blue-400",
      value: "linkedin.com/in/brando-cabrera-bonilla",
    },
    {
      label: t.contact.githubLabel,
      href: SOCIAL_LINKS.github,
      icon: <GithubIcon />,
      color: "hover:border-slate-400/50 hover:text-slate-300",
      value: "github.com/NightMare2210",
    },
    {
      label: t.contact.whatsappLabel,
      href: SOCIAL_LINKS.whatsapp,
      icon: <WhatsAppIcon />,
      color: "hover:border-green-400/50 hover:text-green-400",
      value: "+593 99 054 0716",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            05. {t.contact.title}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.contact.title}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
          <p className="mt-4 text-slate-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Social links */}
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-[#0d1530] text-slate-400 transition-all duration-200 ${link.color}`}
              >
                <span className="shrink-0">{link.icon}</span>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">
                {t.contact.name}
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-colors duration-200 text-sm"
                placeholder="Brando Cabrera"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">
                {t.contact.email}
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-colors duration-200 text-sm"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide mb-1.5">
                {t.contact.message}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-[#0d1530] border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-colors duration-200 text-sm resize-none"
                placeholder="..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
            >
              {status === "sending"
                ? t.contact.sending
                : status === "success"
                ? t.contact.successMsg
                : t.contact.send}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{t.contact.errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
