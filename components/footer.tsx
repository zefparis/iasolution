import { contact } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-base font-semibold text-white">IA-Solution</span>
          <p className="text-xs text-slate-400">
            {`© ${year} IA-Solution. Tous droits réservés.`}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:justify-end">
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
    </footer>
  );
}
