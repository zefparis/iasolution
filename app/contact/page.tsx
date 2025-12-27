"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Header, Footer } from "@/components/sections";
import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/content";
import { getContentByLanguage } from "@/lib/content-bilingual";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  fr: {
    badge: 'CONTACT',
    phone: 'Téléphone',
    address: 'Adresse',
    legalInfo: 'Informations légales',
    messageSent: 'Message envoyé !',
    willReply: 'Nous vous répondrons dans les plus brefs délais.',
    fullName: 'Nom complet',
    yourName: 'Votre nom',
    yourEmail: 'votre@email.com',
    message: 'Message',
    describeProject: 'Décrivez votre projet ou votre demande...',
    sending: 'Envoi en cours...',
    sendMessage: 'Envoyer le message',
    errorMessage: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@ia-solution.fr',
  },
  en: {
    badge: 'CONTACT',
    phone: 'Phone',
    address: 'Address',
    legalInfo: 'Legal Information',
    messageSent: 'Message sent!',
    willReply: 'We will reply to you as soon as possible.',
    fullName: 'Full Name',
    yourName: 'Your name',
    yourEmail: 'your@email.com',
    message: 'Message',
    describeProject: 'Describe your project or request...',
    sending: 'Sending...',
    sendMessage: 'Send Message',
    errorMessage: 'An error occurred. Please try again or contact us directly at contact@ia-solution.fr',
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en';
  const t = content[lang];
  const pageContent = getContentByLanguage(lang);
  const contactPage = pageContent.contactPage;
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
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending message:', error);
      alert(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
                {t.badge}
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
                      <h3 className="text-lg font-semibold text-white mb-1">{t.phone}</h3>
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
                      <h3 className="text-lg font-semibold text-white mb-1">{t.address}</h3>
                      <p className="text-text-secondary">{siteConfig.address}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div variants={staggerItem} className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <h3 className="text-lg font-semibold text-white mb-4">{t.legalInfo}</h3>
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
                    <h3 className="text-xl font-semibold text-white mb-2">{t.messageSent}</h3>
                    <p className="text-text-secondary">
                      {t.willReply}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        {t.fullName} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors"
                        placeholder={t.yourName}
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
                        placeholder={t.yourEmail}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        {language === 'fr' ? 'Sujet' : 'Subject'} *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white focus:border-accent-purple focus:outline-none transition-colors"
                      >
                        <option value="" className="bg-bg-primary">
                          {language === 'fr' ? 'Sélectionner un sujet' : 'Select subject'}
                        </option>
                        <optgroup label="HCS-U7" className="bg-bg-primary">
                          <option value="hcs-u7-demo" className="bg-bg-primary">
                            {language === 'fr' ? 'Demande de démo HCS-U7' : 'HCS-U7 Demo Request'}
                          </option>
                          <option value="hcs-u7-enterprise" className="bg-bg-primary">
                            {language === 'fr' ? 'Licence Enterprise HCS-U7' : 'HCS-U7 Enterprise License'}
                          </option>
                          <option value="hcs-u7-api" className="bg-bg-primary">
                            {language === 'fr' ? 'Intégration API HCS-U7' : 'HCS-U7 API Integration'}
                          </option>
                        </optgroup>
                        <optgroup label="HCS-SHIELD" className="bg-bg-primary">
                          <option value="hcs-shield-demo" className="bg-bg-primary">
                            {language === 'fr' ? 'Demande de démo HCS-SHIELD' : 'HCS-SHIELD Demo Request'}
                          </option>
                          <option value="hcs-shield-military" className="bg-bg-primary">
                            {language === 'fr' ? 'Procurement Militaire HCS-SHIELD' : 'HCS-SHIELD Military Procurement'}
                          </option>
                          <option value="hcs-shield-enterprise" className="bg-bg-primary">
                            {language === 'fr' ? 'Déploiement Enterprise HCS-SHIELD' : 'HCS-SHIELD Enterprise Deployment'}
                          </option>
                        </optgroup>
                        <optgroup label={language === 'fr' ? 'Autre' : 'Other'} className="bg-bg-primary">
                          <option value="research" className="bg-bg-primary">
                            {language === 'fr' ? 'Collaboration Recherche' : 'Research Collaboration'}
                          </option>
                          <option value="partnership" className="bg-bg-primary">
                            {language === 'fr' ? 'Partenariat' : 'Partnership Inquiry'}
                          </option>
                          <option value="other" className="bg-bg-primary">
                            {language === 'fr' ? 'Autre' : 'Other'}
                          </option>
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        {t.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:border-accent-purple focus:outline-none transition-colors resize-none"
                        placeholder={t.describeProject}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t.sending : t.sendMessage}
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
