'use client';

import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Lock, Unlock, AlertTriangle, CheckCircle, Play, Pause, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Types
interface PostQuantumCryptoVisualProps {
  mode?: 'signature' | 'encryption' | 'combined';
  autoPlay?: boolean;
  showComparison?: boolean;
  interactive?: boolean;
}

// Bilingual content
const content = {
  fr: {
    title: '🔐 Cryptographie Post-Quantique',
    subtitle: 'HCS-U7 v8.4 • NIST FIPS 204/203 Approuvé • Sécurisé jusqu\'en 2045+',
    tabSignature: '🔏 Signatures (ML-DSA-65)',
    tabEncryption: '🔐 Chiffrement (ML-KEM-768)',
    classicalCrypto: 'Crypto Classique',
    vulnerableYear: 'Vulnérable 2030+',
    postQuantumCrypto: 'Crypto Post-Quantique',
    secureYear: 'Sécurisé jusqu\'en 2045+',
    algorithm: 'Algorithme',
    keySize: 'Taille Clé',
    publicKey: 'Clé Publique',
    security: 'Sécurité',
    standard: 'Standard',
    quantumAttack: '⚡ Attaque Algorithme de Shor',
    quantumVulnerability: '⚠️ Vulnérabilité Quantique',
    quantumSafe: '🛡️ Sécurité Quantique',
    broken: '💥 CASSÉ',
    latticeResistant: 'Résistant Lattice',
    securityCompromised: 'Sécurité Compromise',
    securityCompromisedDesc: 'L\'ordinateur quantique a cassé {algo} avec l\'algorithme de Shor en temps polynomial. Toutes les signatures peuvent être falsifiées.',
    protectedQuantum: 'Protégé Contre Attaques Quantiques',
    protectedQuantumDesc: 'Basé sur la difficulté du problème Module-LWE. Aucun algorithme quantique connu ne peut casser efficacement la cryptographie basée sur les réseaux.',
    nistApproved: '✓ APPROUVÉ NIST 2024',
    latticeStructure: 'Structure Lattice',
    dimension: 'Dimension',
    hardness: 'Difficulté',
    bestAttack: 'Meilleure Attaque',
    quantumSafeUntil: 'Quantum-Safe',
    howItWorks: 'Comment ça marche',
    latticeExplanation: 'utilise la difficulté mathématique de trouver des vecteurs courts dans des réseaux de haute dimension. Même avec des ordinateurs quantiques, aucun algorithme efficace n\'existe pour résoudre ce problème.',
    dualSignature: 'Système Double Signature (HCS-U7 v8.4)',
    dualSignatureDesc: 'HCS-U7 utilise deux signatures indépendantes pour protéger contre les attaques classiques et quantiques. Même si l\'une est compromise, l\'autre reste sécurisée.',
    input: 'Entrée',
    classicalGrover: 'Classique + Résistant Grover',
    postQuantumDilithium: 'Post-Quantique (Dilithium)',
    output: 'Sortie',
    groverWarning: '⚠️ L\'algorithme de Grover affaiblit à 128-bit de sécurité effective, mais reste sécurisé jusqu\'en ~2040',
    latticeSecure: '✅ La sécurité basée sur les réseaux reste intacte. Aucune attaque quantique connue ne casse ML-DSA-65.',
    combinedProtection: 'Combiné: Protège Contre TOUS les Vecteurs d\'Attaque',
    classicalComputers: 'Ordinateurs Classiques',
    classicalComputersDesc: 'BLAKE3 fournit une sécurité 256-bit',
    quantumComputers: 'Ordinateurs Quantiques',
    quantumComputersDesc: 'ML-DSA-65 reste incassable',
    performanceMetrics: '⚡ Métriques de Performance',
    sign: 'Signer',
    verify: 'Vérifier',
    signature: 'Signature',
    encaps: 'Encaps',
    decaps: 'Decaps',
    ciphertext: 'Chiffré',
    productionReady: 'Prêt pour Production',
    productionReadyDesc: 'est optimisé pour une utilisation réelle. Le surcoût de performance par rapport aux algorithmes classiques est minimal (~10ms), le rendant adapté aux systèmes d\'authentification haute performance comme HCS-U7.',
    threatTimeline: '📅 Chronologie Menace Quantique',
    threat: 'Menace',
    qubits: 'qubits ordinateur quantique',
    harvestNow: '⚠️ Attaques "Harvest Now, Decrypt Later"',
    harvestNowDesc: 'Les adversaires collectent déjà des données chiffrées aujourd\'hui pour les déchiffrer une fois que les ordinateurs quantiques seront assez puissants. La cryptographie post-quantique de HCS-U7 protège contre cette menace DÈS MAINTENANT.',
    simulateAttack: 'Simuler Attaque Quantique',
    reset: 'Réinitialiser',
    pause: 'Pause',
    play: 'Lancer',
    minimal: 'Minimale',
    low: 'Faible',
    moderate: 'Modérée',
    high: 'Élevée',
    critical: 'Critique',
  },
  en: {
    title: '🔐 Post-Quantum Cryptography',
    subtitle: 'HCS-U7 v8.4 • NIST FIPS 204/203 Approved • Secure until 2045+',
    tabSignature: '🔏 Signatures (ML-DSA-65)',
    tabEncryption: '🔐 Encryption (ML-KEM-768)',
    classicalCrypto: 'Classical Crypto',
    vulnerableYear: 'Vulnerable 2030+',
    postQuantumCrypto: 'Post-Quantum Crypto',
    secureYear: 'Secure until 2045+',
    algorithm: 'Algorithm',
    keySize: 'Key Size',
    publicKey: 'Public Key',
    security: 'Security',
    standard: 'Standard',
    quantumAttack: '⚡ Shor\'s Algorithm Attack',
    quantumVulnerability: '⚠️ Quantum Vulnerability',
    quantumSafe: '🛡️ Quantum-Safe Security',
    broken: '💥 BROKEN',
    latticeResistant: 'Lattice-Resistant',
    securityCompromised: 'Security Compromised',
    securityCompromisedDesc: 'Quantum computer broke {algo} using Shor\'s algorithm in polynomial time. All signatures can be forged.',
    protectedQuantum: 'Protected Against Quantum Attacks',
    protectedQuantumDesc: 'Based on hardness of Module-LWE problem. No known quantum algorithm can break lattice-based cryptography efficiently.',
    nistApproved: '✓ NIST APPROVED 2024',
    latticeStructure: 'Lattice Structure',
    dimension: 'Dimension',
    hardness: 'Hardness',
    bestAttack: 'Best Attack',
    quantumSafeUntil: 'Quantum-Safe',
    howItWorks: 'How it works',
    latticeExplanation: 'uses the mathematical hardness of finding short vectors in high-dimensional lattices. Even with quantum computers, no efficient algorithm exists to solve this problem.',
    dualSignature: 'Dual Signature System (HCS-U7 v8.4)',
    dualSignatureDesc: 'HCS-U7 uses two independent signatures to protect against both classical and quantum attacks. Even if one is compromised, the other remains secure.',
    input: 'Input',
    classicalGrover: 'Classical + Grover-resistant',
    postQuantumDilithium: 'Post-Quantum (Dilithium)',
    output: 'Output',
    groverWarning: '⚠️ Grover\'s algorithm weakens to 128-bit effective security, but still secure until ~2040',
    latticeSecure: '✅ Lattice-based security remains intact. No known quantum attack breaks ML-DSA-65.',
    combinedProtection: 'Combined: Protects Against ALL Attack Vectors',
    classicalComputers: 'Classical Computers',
    classicalComputersDesc: 'BLAKE3 provides 256-bit security',
    quantumComputers: 'Quantum Computers',
    quantumComputersDesc: 'ML-DSA-65 remains unbreakable',
    performanceMetrics: '⚡ Performance Metrics',
    sign: 'Sign',
    verify: 'Verify',
    signature: 'Signature',
    encaps: 'Encaps',
    decaps: 'Decaps',
    ciphertext: 'Ciphertext',
    productionReady: 'Production-Ready',
    productionReadyDesc: 'is optimized for real-world use. Performance overhead compared to classical algorithms is minimal (~10ms), making it suitable for high-throughput authentication systems like HCS-U7.',
    threatTimeline: '📅 Quantum Threat Timeline',
    threat: 'Threat',
    qubits: 'qubits quantum computer',
    harvestNow: '⚠️ "Harvest Now, Decrypt Later" Attacks',
    harvestNowDesc: 'Adversaries are already collecting encrypted data today to decrypt once quantum computers become powerful enough. HCS-U7\'s post-quantum cryptography protects against this threat NOW.',
    simulateAttack: 'Simulate Quantum Attack',
    reset: 'Reset',
    pause: 'Pause',
    play: 'Play',
    minimal: 'Minimal',
    low: 'Low',
    moderate: 'Moderate',
    high: 'High',
    critical: 'Critical',
  },
};

// Crypto algorithms data
const CRYPTO_ALGORITHMS = {
  classical: {
    signature: {
      name: 'HMAC-SHA256',
      keySize: 256,
      security: 'Grover-resistant (128-bit effective)',
    },
    encryption: {
      name: 'AES-256-GCM',
      keySize: 256,
      security: 'Grover-resistant (128-bit effective)',
    },
  },
  postQuantum: {
    signature: {
      name: 'ML-DSA-65 (Dilithium3)',
      nistStandard: 'FIPS 204',
      publicKeySize: 1952,
      signatureSize: 3309,
      performance: { sign: 12, verify: 8 },
      security: 'Lattice-based, Module-LWE',
    },
    encryption: {
      name: 'ML-KEM-768 (Kyber768)',
      nistStandard: 'FIPS 203',
      publicKeySize: 1184,
      ciphertextSize: 1088,
      performance: { encaps: 2, decaps: 3 },
      security: 'Lattice-based, Module-LWE',
    },
  },
};

// Quantum threat timeline
const QUANTUM_THREAT_TIMELINE = [
  { year: 2024, qubits: 1000, threat: 'minimal', color: '#10B981' },
  { year: 2027, qubits: 10000, threat: 'low', color: '#84CC16' },
  { year: 2030, qubits: 100000, threat: 'moderate', color: '#F59E0B' },
  { year: 2035, qubits: 1000000, threat: 'high', color: '#EF4444' },
  { year: 2040, qubits: 10000000, threat: 'critical', color: '#DC2626' },
];

// Classical vs Quantum Comparison
const ClassicalVsQuantumComparison = memo(function ClassicalVsQuantumComparison({
  activeAlgorithm,
  showAttack,
  attackProgress,
  t,
}: {
  activeAlgorithm: 'signature' | 'encryption';
  showAttack: boolean;
  attackProgress: number;
  t: typeof content.en;
}) {
  const classical = CRYPTO_ALGORITHMS.classical[activeAlgorithm];
  const postQuantum = CRYPTO_ALGORITHMS.postQuantum[activeAlgorithm];
  const classicalBreakRisk = showAttack ? attackProgress : 0;

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {/* Classical Crypto */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-800/50 border-2 border-red-500/50 rounded-xl p-6 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Lock className="text-red-400" size={28} />
            <div>
              <h3 className="text-lg font-bold text-white">{t.classicalCrypto}</h3>
              <p className="text-xs text-red-300">{t.vulnerableYear}</p>
            </div>
          </div>
          <AlertTriangle className="text-red-500" size={24} />
        </div>

        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">{t.algorithm}:</span>
            <span className="text-white font-semibold">{classical.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">{t.keySize}:</span>
            <span className="text-white font-semibold">{classical.keySize} bits</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">{t.security}:</span>
            <span className="text-yellow-400 text-xs">{classical.security}</span>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-red-300 font-semibold">
              {showAttack ? t.quantumAttack : t.quantumVulnerability}
            </span>
            <span className="text-red-400 font-bold">{classicalBreakRisk.toFixed(0)}%</span>
          </div>
          <div className="h-5 bg-gray-900 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-red-600"
              initial={{ width: 0 }}
              animate={{ width: `${classicalBreakRisk}%` }}
              transition={{ duration: 0.3 }}
            />
            {classicalBreakRisk >= 85 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs"
              >
                {t.broken}
              </motion.div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {showAttack && classicalBreakRisk >= 85 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-red-900/50 border border-red-500 rounded-lg p-3 mt-3"
            >
              <div className="flex items-start gap-2">
                <Unlock className="text-red-400 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-red-300 text-sm mb-1">{t.securityCompromised}</h4>
                  <p className="text-xs text-red-200">
                    {t.securityCompromisedDesc.replace('{algo}', classical.name)}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Post-Quantum Crypto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-800/50 border-2 border-green-500/50 rounded-xl p-6 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <Shield className="text-green-400" size={28} />
            <div>
              <h3 className="text-lg font-bold text-white">{t.postQuantumCrypto}</h3>
              <p className="text-xs text-green-300">{t.secureYear}</p>
            </div>
          </div>
          <CheckCircle className="text-green-500" size={24} />
        </div>

        <div className="space-y-2 mb-4 text-sm relative z-10">
          <div className="flex justify-between">
            <span className="text-gray-400">{t.algorithm}:</span>
            <span className="text-white font-semibold">{postQuantum.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">{t.standard}:</span>
            <span className="text-cyan-400 font-semibold">NIST {postQuantum.nistStandard}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">{t.publicKey}:</span>
            <span className="text-white font-semibold">{postQuantum.publicKeySize} bytes</span>
          </div>
        </div>

        <div className="mb-3 relative z-10">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-green-300 font-semibold">{t.quantumSafe}</span>
            <span className="text-green-400 font-bold">0.3%</span>
          </div>
          <div className="h-5 bg-gray-900 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: '3px' }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
              {t.latticeResistant}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-green-900/30 border border-green-500 rounded-lg p-3 mt-3 relative z-10"
        >
          <div className="flex items-start gap-2">
            <Shield className="text-green-400 flex-shrink-0" size={18} />
            <div>
              <h4 className="font-bold text-green-300 text-sm mb-1">{t.protectedQuantum}</h4>
              <p className="text-xs text-green-200">{t.protectedQuantumDesc}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-3 flex justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/50 border border-cyan-500 rounded-full">
            <span className="text-cyan-300 text-xs font-bold">{t.nistApproved}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

// Lattice Visualization
const LatticeVisualization = memo(function LatticeVisualization({
  algorithm,
  isActive,
  t,
}: {
  algorithm: 'signature' | 'encryption';
  isActive: boolean;
  t: typeof content.en;
}) {
  const algoName = algorithm === 'signature' ? 'ML-DSA-65' : 'ML-KEM-768';
  const dimension = algorithm === 'signature' ? '6×5 polynomial ring' : '3×3 polynomial ring';
  const bestAttack = algorithm === 'signature' ? '152' : '162';

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-cyan-500/30">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🔷</span>
        <span>{t.latticeStructure} ({algoName})</span>
      </h3>

      <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden mb-4">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Lattice grid */}
          {Array.from({ length: 10 }, (_, i) =>
            Array.from({ length: 8 }, (_, j) => {
              const x = 40 + i * 35;
              const y = 30 + j * 35;
              const delay = (i + j) * 0.03;
              return (
                <motion.circle
                  key={`${i}-${j}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#06B6D4"
                  initial={{ opacity: 0.3 }}
                  animate={isActive ? { opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay }}
                />
              );
            })
          )}
          {/* Grid lines */}
          {Array.from({ length: 9 }, (_, i) =>
            Array.from({ length: 7 }, (_, j) => (
              <g key={`line-${i}-${j}`}>
                <motion.line
                  x1={40 + i * 35} y1={30 + j * 35}
                  x2={40 + (i + 1) * 35} y2={30 + j * 35}
                  stroke="#0EA5E9" strokeWidth="0.5" opacity="0.2"
                  animate={isActive ? { opacity: [0.1, 0.3, 0.1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: (i + j) * 0.03 }}
                />
                <motion.line
                  x1={40 + i * 35} y1={30 + j * 35}
                  x2={40 + i * 35} y2={30 + (j + 1) * 35}
                  stroke="#0EA5E9" strokeWidth="0.5" opacity="0.2"
                  animate={isActive ? { opacity: [0.1, 0.3, 0.1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, delay: (i + j) * 0.03 }}
                />
              </g>
            ))
          )}
          {/* Secret vector */}
          <motion.line
            x1="40" y1="30" x2="350" y2="250"
            stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5"
            animate={isActive ? { strokeDashoffset: [0, -10], opacity: [0.6, 1, 0.6] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text x="355" y="260" fill="#F59E0B" fontSize="10" fontWeight="bold">Secret</text>
        </svg>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <span className="text-gray-400">{t.dimension}:</span>
          <div className="text-white font-semibold">{dimension}</div>
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <span className="text-gray-400">{t.hardness}:</span>
          <div className="text-cyan-400 font-semibold">Module-LWE</div>
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <span className="text-gray-400">{t.bestAttack}:</span>
          <div className="text-orange-400 font-semibold">2^{bestAttack} ops</div>
        </div>
        <div className="bg-gray-900/50 p-3 rounded-lg">
          <span className="text-gray-400">{t.quantumSafeUntil}:</span>
          <div className="text-green-400 font-semibold">✓ 2045+</div>
        </div>
      </div>

      <div className="mt-4 bg-cyan-900/20 border-l-4 border-cyan-500 p-3 rounded">
        <p className="text-cyan-100 text-sm">
          <strong>{t.howItWorks}:</strong> {algoName} {t.latticeExplanation}
        </p>
      </div>
    </div>
  );
});

// Dual Signature System
const DualSignatureSystem = memo(function DualSignatureSystem({
  showAttack,
  t,
}: {
  showAttack: boolean;
  t: typeof content.en;
}) {
  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 mb-6 border border-purple-500/30">
      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
        <span>🔐</span>
        <span>{t.dualSignature}</span>
      </h3>
      <p className="text-purple-200 text-sm mb-6">{t.dualSignatureDesc}</p>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-4 rounded-lg border border-blue-500/50 mb-4"
      >
        <div className="text-center">
          <div className="text-xs text-gray-400 mb-1">{t.input}</div>
          <div className="font-mono text-xs md:text-sm text-white break-all">
            HCS-U7|V:8.0|ALG:QS|E:F|MOD:c40f30m30|COG:F72C65V40S55Cr48
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center mb-4">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-2xl text-purple-400">↓</motion.div>
      </div>

      {/* Dual Paths */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* BLAKE3 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-4 rounded-lg border border-yellow-500/50"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 className="font-bold text-white text-sm">BLAKE3 (B3)</h4>
              <p className="text-xs text-yellow-300">{t.classicalGrover}</p>
            </div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">{t.output}:</span>
              <span className="text-yellow-400 font-mono">B3:00bce1x0</span>
            </div>
          </div>
          {showAttack && (
            <div className="mt-3 p-2 bg-yellow-900/30 border border-yellow-500/50 rounded text-xs text-yellow-200">
              {t.groverWarning}
            </div>
          )}
        </motion.div>

        {/* ML-DSA-65 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-4 rounded-lg border border-cyan-500/50"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 className="font-bold text-white text-sm">ML-DSA-65 (QSIG)</h4>
              <p className="text-xs text-cyan-300">{t.postQuantumDilithium}</p>
            </div>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">{t.output}:</span>
              <span className="text-cyan-400 font-mono">QSIG:0001fykuk9</span>
            </div>
          </div>
          {showAttack && (
            <div className="mt-3 p-2 bg-green-900/30 border border-green-500/50 rounded text-xs text-green-200">
              {t.latticeSecure}
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex justify-center mb-4">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="text-2xl text-purple-400">↓</motion.div>
      </div>

      {/* Combined */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 p-5 rounded-lg border-2 border-green-500"
      >
        <div className="text-center">
          <div className="text-2xl mb-2">🛡️</div>
          <h4 className="text-lg font-bold text-white mb-3">{t.combinedProtection}</h4>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
              <div>
                <div className="font-semibold text-green-300 text-sm">{t.classicalComputers}</div>
                <div className="text-xs text-green-200">{t.classicalComputersDesc}</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
              <div>
                <div className="font-semibold text-cyan-300 text-sm">{t.quantumComputers}</div>
                <div className="text-xs text-cyan-200">{t.quantumComputersDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

// Performance Metrics
const PerformanceMetrics = memo(function PerformanceMetrics({
  algorithm,
  t,
}: {
  algorithm: 'signature' | 'encryption';
  t: typeof content.en;
}) {
  const sigAlgo = CRYPTO_ALGORITHMS.postQuantum.signature;
  const encAlgo = CRYPTO_ALGORITHMS.postQuantum.encryption;
  const metrics = algorithm === 'signature'
    ? [
        { label: t.sign, value: `~${sigAlgo.performance.sign}ms`, icon: '✍️' },
        { label: t.verify, value: `~${sigAlgo.performance.verify}ms`, icon: '✓' },
        { label: t.publicKey, value: `${sigAlgo.publicKeySize} bytes`, icon: '🔑' },
        { label: t.signature, value: `${sigAlgo.signatureSize} bytes`, icon: '📝' },
      ]
    : [
        { label: t.encaps, value: `~${encAlgo.performance.encaps}ms`, icon: '🔒' },
        { label: t.decaps, value: `~${encAlgo.performance.decaps}ms`, icon: '🔓' },
        { label: t.publicKey, value: `${encAlgo.publicKeySize} bytes`, icon: '🔑' },
        { label: t.ciphertext, value: `${encAlgo.ciphertextSize} bytes`, icon: '📦' },
      ];
  const pqAlgo = algorithm === 'signature' ? sigAlgo : encAlgo;

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 mb-6 border border-purple-500/30">
      <h3 className="text-xl font-bold text-white mb-4">{t.performanceMetrics}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-900/50 p-4 rounded-lg border border-purple-500/20 text-center"
          >
            <div className="text-2xl mb-2">{m.icon}</div>
            <div className="text-xs text-gray-400 mb-1">{m.label}</div>
            <div className="text-lg font-bold text-purple-300">{m.value}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 bg-purple-900/20 border-l-4 border-purple-500 p-3 rounded">
        <p className="text-purple-200 text-sm">
          <strong>{t.productionReady}:</strong> {pqAlgo.name} {t.productionReadyDesc}
        </p>
      </div>
    </div>
  );
});

// Quantum Threat Timeline
const QuantumThreatTimeline = memo(function QuantumThreatTimeline({ t }: { t: typeof content.en }) {
  const threatLabels: Record<string, string> = {
    minimal: t.minimal,
    low: t.low,
    moderate: t.moderate,
    high: t.high,
    critical: t.critical,
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-orange-500/30">
      <h3 className="text-xl font-bold text-white mb-6">{t.threatTimeline}</h3>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-yellow-500 to-red-500" />

        <div className="space-y-6">
          {QUANTUM_THREAT_TIMELINE.map((point, i) => (
            <motion.div
              key={point.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`flex items-center gap-4 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              <div className="flex-1 bg-gray-900/50 p-3 rounded-lg border" style={{ borderColor: point.color }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold text-white">{point.year}</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: `${point.color}20`, color: point.color }}>
                    {threatLabels[point.threat]} {t.threat}
                  </span>
                </div>
                <div className="text-gray-400 text-xs">
                  Est. {point.qubits.toLocaleString()} {t.qubits}
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-white z-10 flex-shrink-0" style={{ backgroundColor: point.color }} />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-red-900/20 border-l-4 border-red-500 p-3 rounded">
        <p className="text-red-200 text-sm">
          <strong>{t.harvestNow}</strong> {t.harvestNowDesc}
        </p>
      </div>
    </div>
  );
});

// Main Component
export function PostQuantumCryptoVisual({
  mode = 'combined',
  autoPlay = true,
  showComparison = true,
  interactive = true,
}: PostQuantumCryptoVisualProps) {
  const { language } = useLanguage();
  const lang = (language as 'fr' | 'en') || 'en';
  const t = content[lang];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'signature' | 'encryption'>('signature');
  const [showQuantumAttack, setShowQuantumAttack] = useState(false);
  const [attackProgress, setAttackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!showQuantumAttack || !isPlaying) return;
    const interval = setInterval(() => {
      setAttackProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [showQuantumAttack, isPlaying]);

  const handleSimulateAttack = useCallback(() => {
    setShowQuantumAttack(true);
    setAttackProgress(0);
    setIsPlaying(true);
    // Scroll to top of component so user can see the attack animation
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleReset = useCallback(() => {
    setShowQuantumAttack(false);
    setAttackProgress(0);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="inline-flex items-center gap-3 mb-3"
        >
          <Shield className="text-cyan-400" size={40} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.title}</h2>
        </motion.div>
        <p className="text-cyan-200 text-sm md:text-base">{t.subtitle}</p>
      </div>

      {/* Tabs */}
      {mode === 'combined' && (
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveTab('signature')}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all ${
              activeTab === 'signature'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {t.tabSignature}
          </button>
          <button
            onClick={() => setActiveTab('encryption')}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-all ${
              activeTab === 'encryption'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {t.tabEncryption}
          </button>
        </div>
      )}

      {/* Comparison */}
      {showComparison && (
        <ClassicalVsQuantumComparison
          activeAlgorithm={activeTab}
          showAttack={showQuantumAttack}
          attackProgress={attackProgress}
          t={t}
        />
      )}

      {/* Lattice */}
      <LatticeVisualization algorithm={activeTab} isActive={isPlaying} t={t} />

      {/* Dual Signature (signature mode only) */}
      {activeTab === 'signature' && <DualSignatureSystem showAttack={showQuantumAttack} t={t} />}

      {/* Performance */}
      <PerformanceMetrics algorithm={activeTab} t={t} />

      {/* Timeline */}
      <QuantumThreatTimeline t={t} />

      {/* Controls */}
      {interactive && (
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {!showQuantumAttack ? (
            <button
              onClick={handleSimulateAttack}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-red-500/30"
            >
              <Zap size={18} />
              <span>{t.simulateAttack}</span>
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all"
            >
              <RotateCcw size={18} />
              <span>{t.reset}</span>
            </button>
          )}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            <span>{isPlaying ? t.pause : t.play}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default PostQuantumCryptoVisual;
