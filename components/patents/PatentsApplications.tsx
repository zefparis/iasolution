"use client";

import { motion } from "framer-motion";
import { Building2, ShoppingCart, Landmark, Plug, Lock, Bot } from "lucide-react";
import { Container } from "@/components/ui";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const applications = [
  { icon: Building2, name: "Authentification bancaire et financière" },
  { icon: Landmark, name: "Protection des services gouvernementaux" },
  { icon: Plug, name: "Sécurisation des infrastructures critiques" },
  { icon: ShoppingCart, name: "E-commerce et marketplaces" },
  { icon: Lock, name: "APIs et services cloud" },
  { icon: Bot, name: "Robotique et IoT" },
];

export function PatentsApplications() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />
      
      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">APPLICATIONS</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Domaines couverts
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Les brevets FR2514274 et FR2514546 couvrent les applications suivantes (Revendication 14).
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent-purple" />
                </div>
                <span className="text-text-secondary">{app.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
