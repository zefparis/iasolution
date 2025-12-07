"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Header, Footer } from "@/components/sections";
import { Container } from "@/components/ui";
import { contactPage, siteConfig } from "@/lib/content";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
          <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-1/4 left-1/4" />
          
          <Container className="relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <span className="badge-gradient inline-block px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] mb-6">
                CONTACT
              </span>
              <h1 className="text-h1-mobile lg:text-h1 font-semibold glow-text mb-4">
                {contactPage.title}
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                {contactPage.subtitle}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Content */}
        <section className="section pt-0">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <div className="space-y-6">
                  <motion.div variants={staggerItem} className="glass-card p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-text-secondary hover:text-accent-purple transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="glass-card p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Téléphone</h3>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="text-text-secondary hover:text-accent-blue transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={staggerItem} className="glass-card p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink/20 to-rose-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-pink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Adresse</h3>
                      <p className="text-text-secondary">{siteConfig.address}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div variants={staggerItem} className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <h3 className="text-lg font-semibold text-white mb-4">Informations légales</h3>
                  <div className="space-y-2 text-sm text-text-muted">
                    <p>SIRET : {siteConfig.siret}</p>
                    <p>Licence : {siteConfig.license}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
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
                    <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                    <p className="text-text-secondary">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
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
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:border-accent-purple focus:outline-none transition-colors"
                      >
                        <option value="" className="bg-bg-primary">Sélectionnez un sujet</option>
                        <option value="demo" className="bg-bg-primary">Demande de démo HCS-U7</option>
                        <option value="partnership" className="bg-bg-primary">Partenariat recherche</option>
                        <option value="license" className="bg-bg-primary">Licence commerciale</option>
                        <option value="academic" className="bg-bg-primary">Collaboration académique</option>
                        <option value="other" className="bg-bg-primary">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
