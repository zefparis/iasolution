"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const content = getContent(language);
  const contact = content.contact;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-slate-400 sm:gap-6 sm:px-6 sm:py-10 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-sm font-semibold text-white sm:text-base">IA-Solution</span>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">{t.tagline}</p>
          <p>
            {`© ${year} IA-Solution. ${t.rights}`}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <p className="text-white/70">{t.resources}</p>
          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:gap-3 sm:text-xs md:justify-start">
            <a href="#services" className="transition hover:text-white">
              {t.services}
            </a>
            <a href="#projets" className="transition hover:text-white">
              {t.projects}
            </a>
            <a href="#process" className="transition hover:text-white">
              {t.process}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {t.contact}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-[10px] text-white/60 sm:gap-3 sm:text-xs md:justify-start">
            <a href="/mentions-legales" className="transition hover:text-white">
              {t.legal}
            </a>
            <a href="/politique-confidentialite" className="transition hover:text-white">
              {t.privacy}
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
          <p className="text-white/70">{t.follow}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-end">
            {contact.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70 transition hover:border-white/20 hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
