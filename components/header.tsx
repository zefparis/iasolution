"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundOpacity = useTransform(scrollY, [0, 180], [0.4, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 180], [0.12, 0.25]);
  const blurValue = useTransform(scrollY, [0, 180], [0, 12]);

  const background = useMotionTemplate`rgba(8, 11, 22, ${backgroundOpacity})`;
  const borderColor = useMotionTemplate`rgba(255, 255, 255, ${borderOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurValue}px)`;

  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.div
        className="mt-4 flex w-[92%] max-w-6xl items-center justify-between rounded-full border px-6 py-3 text-sm font-medium shadow-glow"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={
          mounted
            ? {
                backgroundColor: background,
                borderColor,
                backdropFilter,
              }
            : {
                backgroundColor: "rgba(8, 11, 22, 0.6)",
                borderColor: "rgba(255, 255, 255, 0.18)",
                backdropFilter: "blur(10px)",
              }
        }
      >
        <Link href="#hero" className="text-base font-semibold text-white">
          IA-Solution
        </Link>
        <nav className="hidden items-center gap-8 text-slate-200 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-white/20 md:inline-flex"
          >
            Travaillons ensemble
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:text-white focus:outline-none md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[88px] w-[90%] max-w-6xl rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-200 backdrop-blur-xl shadow-neon md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-transparent px-4 py-2 transition hover:border-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20"
              >
                Travaillons ensemble
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
