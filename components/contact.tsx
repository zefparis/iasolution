"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { getContent } from "@/lib/content-i18n";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const content = getContent(language);
  const contact = content.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setStatusMessage(
        language === 'fr'
          ? 'Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.'
          : 'Message sent successfully! We will respond to you as soon as possible.'
      );
      form.reset();
    } catch {
      setSubmitStatus('error');
      
      const errorMsg = language === 'fr'
        ? 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
        : 'An error occurred. Please try again or contact us directly.';
      
      setStatusMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:gap-12 md:py-20 lg:px-8">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card flex flex-col gap-6 p-6"
          >
            <div>
              <h3 className="text-base font-semibold text-white sm:text-lg">{t.directChannels}</h3>
              <div className="mt-3 flex flex-col gap-2 text-xs text-slate-300 sm:mt-4 sm:text-sm">
                <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="transition hover:text-white">
                  {contact.phone}
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60 sm:text-sm">{t.networks}</h4>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300 sm:mt-3 sm:gap-3 sm:text-sm">
                {contact.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-white/20 hover:text-white"
                    >
                      <span>{social.name}</span>
                      <span className="text-white/60">{social.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {contact.externalCta && (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-sm font-semibold text-white">
                  {contact.externalCta.description}
                </p>
                <a
                  href={contact.externalCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora-blue to-aurora-violet px-5 py-2.5 text-sm font-semibold text-white shadow-neon transition hover:from-aurora-pink hover:to-aurora-violet"
                >
                  {contact.externalCta.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            )}
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="glass-card flex flex-col gap-3 p-4 sm:gap-4 sm:p-6"
          >
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                {t.formName}
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                  placeholder={t.formNamePlaceholder}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-200">
                {t.formEmail}
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                  placeholder={t.formEmailPlaceholder}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              {t.formSubject}
              <input
                type="text"
                name="subject"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                placeholder={t.formSubjectPlaceholder}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              {t.formMessage}
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-aurora-blue/60 focus:bg-white/10"
                placeholder={t.formMessagePlaceholder}
              />
            </label>
            {submitStatus !== 'idle' && (
              <div
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {statusMessage}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight shadow-neon transition hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                </>
              ) : (
                t.formSubmit
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
