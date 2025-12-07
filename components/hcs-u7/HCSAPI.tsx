"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { architecture } from "@/lib/content";

const codeExamples = {
  verify: `// Vérification adaptative
const response = await fetch('https://api.ia-solution.fr/api/adaptive-verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    session_id: 'sess_abc123',
    cognitive_data: {
      stroop_results: [...],
      reaction_times: [...],
      nback_score: 0.85
    },
    device_fingerprint: 'fp_xyz789',
    ip_address: '192.168.1.1'
  })
});

const result = await response.json();
// { decision: "ALLOW", score: 0.92, confidence: 0.98 }`,

  sca: `// Évaluation SCA PSD2
const scaResponse = await fetch('https://api.ia-solution.fr/api/sca/evaluate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    transaction: {
      amount: 150.00,
      currency: 'EUR',
      merchant: 'Amazon',
      type: 'payment'
    },
    user_id: 'user_123',
    session_id: 'sess_abc123'
  })
});

const scaResult = await scaResponse.json();
// { exempt: true, reason: "TRA_LOW_VALUE", article: "11" }`,
};

export function HCSAPI() {
  return (
    <section id="api" className="section relative">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <span className="badge mb-6 inline-block">API</span>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold glow-text mb-4">
            Documentation API
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Intégration simple via REST API. SDK disponibles pour Node.js, Python, PHP, Go.
          </p>
        </motion.div>

        {/* Endpoints */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Endpoints</h3>
          <div className="code-block">
            <div className="space-y-2">
              {architecture.endpoints.map((endpoint, idx) => (
                <div key={idx} className="flex items-start gap-4 text-sm">
                  <span className={`font-mono font-medium w-14 flex-shrink-0 ${
                    endpoint.method === "POST" ? "text-green-400" :
                    endpoint.method === "GET" ? "text-blue-400" :
                    endpoint.method === "PATCH" ? "text-yellow-400" : "text-text-secondary"
                  }`}>
                    {endpoint.method}
                  </span>
                  <span className="font-mono text-accent-purple flex-shrink-0 min-w-[200px]">
                    {endpoint.path}
                  </span>
                  <span className="text-text-muted">
                    {endpoint.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Code Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Vérification adaptative</h3>
            <div className="code-block text-xs overflow-x-auto">
              <pre>{codeExamples.verify}</pre>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Évaluation SCA PSD2</h3>
            <div className="code-block text-xs overflow-x-auto">
              <pre>{codeExamples.sca}</pre>
            </div>
          </motion.div>
        </div>

        {/* SDKs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">SDKs disponibles</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Node.js", "Python", "PHP", "Go", "Ruby", "Java"].map((sdk) => (
              <span key={sdk} className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-text-secondary text-sm">
                {sdk}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
