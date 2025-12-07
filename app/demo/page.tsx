"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Header, Footer } from "@/components/sections";
import { Container } from "@/components/ui";
import { demoPage } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    useCase: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
          <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-1/4 right-1/4" />
          
          <Container className="relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
                DÉMO
              </span>
              <h1 className="text-h1-mobile lg:text-h1 font-semibold glow-text mb-4">
                {demoPage.title}
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {demoPage.subtitle}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Form */}
        <section className="section pt-0">
          <Container className="max-w-2xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {isSubmitted ? (
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Demande envoyée !</h3>
                  <p className="text-text-secondary">{demoPage.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors"
                        placeholder="votre@entreprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm font-medium text-white mb-2">
                      Cas d'usage *
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      required
                      value={formData.useCase}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:border-accent-purple focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-bg-primary">Sélectionnez un cas d'usage</option>
                      {demoPage.form.useCases.map((useCase) => (
                        <option key={useCase} value={useCase} className="bg-bg-primary">
                          {useCase}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : demoPage.form.submit}
                  </button>
                </form>
              )}
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
