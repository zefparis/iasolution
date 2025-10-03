import { contact } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-xs text-slate-400 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-base font-semibold text-white">IA-Solution</span>
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/50">Agence IA & Digital</p>
          <p>
            {`© ${year} IA-Solution. Tous droits réservés.`}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <p className="text-white/70">Ressources</p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#projets" className="transition hover:text-white">
              Réalisations
            </a>
            <a href="#process" className="transition hover:text-white">
              Processus
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-white/60 md:justify-start">
            <a href="/mentions-legales" className="transition hover:text-white">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="transition hover:text-white">
              Politique RGPD
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
          <p className="text-white/70">Suivez-nous</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
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
