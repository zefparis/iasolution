'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Types
type LayerState = 'idle' | 'active' | 'checking' | 'passed' | 'failed';
type AnimationState = 'idle' | 'running' | 'paused' | 'completed';
type Decision = 'allow' | 'challenge' | 'deny' | null;

interface Layer {
  id: number;
  name: { fr: string; en: string };
  icon: string;
  description: { fr: string; en: string };
  checkItems: { fr: string[]; en: string[] };
  duration: number;
  color: string;
  isNew?: boolean;
  statusText: { fr: string; en: string };
}

interface DefenseLayersAnimationProps {
  autoPlay?: boolean;
  speed?: number;
  showControls?: boolean;
  theme?: 'light' | 'dark';
}

// Layer data with bilingual content
const layers: Layer[] = [
  {
    id: 1,
    name: { fr: 'Tests Cognitifs', en: 'Cognitive Tests' },
    icon: '🧠',
    description: { fr: '6 tests neurocognitifs', en: '6 neurocognitive tests' },
    checkItems: {
      fr: ['Stroop', 'N-Back', 'Trail Making', 'Digit Span', 'Reaction Time', 'RAN Vocal'],
      en: ['Stroop', 'N-Back', 'Trail Making', 'Digit Span', 'Reaction Time', 'RAN Vocal'],
    },
    duration: 800,
    color: '#8B5CF6',
    statusText: { fr: 'PASSÉ', en: 'PASS' },
  },
  {
    id: 2,
    name: { fr: 'Piège Honeypot', en: 'Honeypot Trap' },
    icon: '🪤',
    description: { fr: '122 endpoints piégés', en: '122 trapped endpoints' },
    checkItems: {
      fr: ['102 honeypots statiques', '20 honeypots dynamiques'],
      en: ['102 static honeypots', '20 dynamic honeypots'],
    },
    duration: 600,
    color: '#EF4444',
    statusText: { fr: 'PROPRE', en: 'CLEAN' },
  },
  {
    id: 3,
    name: { fr: 'Empreinte Appareil', en: 'Device Fingerprint' },
    icon: '🔍',
    description: { fr: '15 patterns de détection bot', en: '15 bot detection patterns' },
    checkItems: {
      fr: ['Détection Webdriver', 'Headless Chrome', 'Empreinte Canvas'],
      en: ['Webdriver detection', 'Headless Chrome', 'Canvas fingerprint'],
    },
    duration: 700,
    color: '#F59E0B',
    statusText: { fr: 'HUMAIN', en: 'HUMAN' },
  },
  {
    id: 4,
    name: { fr: 'Limitation Débit', en: 'Rate Limiting' },
    icon: '⏱️',
    description: { fr: 'Algorithme fenêtre glissante', en: 'Sliding window algorithm' },
    checkItems: {
      fr: ['Limite 10 req/s', 'Throttling par IP'],
      en: ['10 req/s limit', 'IP-based throttling'],
    },
    duration: 500,
    color: '#10B981',
    statusText: { fr: 'OK', en: 'OK' },
  },
  {
    id: 5,
    name: { fr: 'Réputation IP', en: 'IP Reputation' },
    icon: '🌐',
    description: { fr: 'Détection fraude IPQualityScore', en: 'IPQualityScore fraud detection' },
    checkItems: {
      fr: ['Détection VPN/Tor', 'Détection Proxy', 'Score fraude <75'],
      en: ['VPN/Tor detection', 'Proxy detection', 'Fraud score <75'],
    },
    duration: 650,
    color: '#3B82F6',
    statusText: { fr: 'VÉRIFIÉ', en: 'VERIFIED' },
  },
  {
    id: 6,
    name: { fr: 'Entropie Céleste', en: 'Celestial Entropy' },
    icon: '🌟',
    description: { fr: 'Entropie astronomique Swiss Ephemeris', en: 'Swiss Ephemeris astronomical entropy' },
    checkItems: {
      fr: ['9 corps célestes', 'Hash entropie 256-bit'],
      en: ['9 celestial bodies', '256-bit entropy hash'],
    },
    duration: 700,
    color: '#A855F7',
    statusText: { fr: 'GÉNÉRÉ', en: 'GENERATED' },
  },
  {
    id: 7,
    name: { fr: 'Crypto Post-Quantique', en: 'Post-Quantum Crypto' },
    icon: '🔐',
    description: { fr: 'ML-DSA-65 + ML-KEM-768', en: 'ML-DSA-65 + ML-KEM-768' },
    checkItems: {
      fr: ['Signature QSIG v3', 'Chiffrement Shield v3', 'NIST FIPS 204/203'],
      en: ['QSIG v3 signature', 'Shield v3 encryption', 'NIST FIPS 204/203'],
    },
    duration: 900,
    color: '#EC4899',
    statusText: { fr: 'SÉCURISÉ', en: 'SECURED' },
  },
  {
    id: 8,
    name: { fr: 'Anti-Replay', en: 'Anti-Replay' },
    icon: '🔄',
    description: { fr: 'ReplayDefense v2 (nonces Redis)', en: 'ReplayDefense v2 (Redis nonces)' },
    checkItems: {
      fr: ['Validation nonce', 'Vérification timestamp', 'Multi-instance safe'],
      en: ['Nonce validation', 'Timestamp check', 'Multi-instance safe'],
    },
    duration: 550,
    color: '#06B6D4',
    statusText: { fr: 'VALIDÉ', en: 'VALIDATED' },
  },
  {
    id: 9,
    name: { fr: 'Piste Audit', en: 'Audit Trail' },
    icon: '📝',
    description: { fr: 'Logs immuables chaînés HMAC', en: 'HMAC-chained immutable logs' },
    checkItems: {
      fr: ['Chaîne type blockchain', 'Logging inviolable'],
      en: ['Blockchain-like chain', 'Tamper-proof logging'],
    },
    duration: 600,
    color: '#84CC16',
    statusText: { fr: 'ENREGISTRÉ', en: 'LOGGED' },
  },
  {
    id: 10,
    name: { fr: 'Module Shield', en: 'Shield Module' },
    icon: '🛡️',
    description: { fr: 'Défense Anti-FalconOne (NEW v8.4)', en: 'Anti-FalconOne Defense (NEW v8.4)' },
    checkItems: {
      fr: ['Détection IMSI catcher', 'Détection GPS spoofing', 'Détection attaque géoloc'],
      en: ['IMSI catcher detection', 'GPS spoofing detection', 'Geolocation attack detection'],
    },
    duration: 850,
    color: '#F97316',
    isNew: true,
    statusText: { fr: 'PROTÉGÉ', en: 'SAFE' },
  },
];

const decisionConfig = {
  allow: {
    icon: '✅',
    text: { fr: 'AUTORISER', en: 'ALLOW' },
    color: '#10B981',
    description: { fr: 'Utilisateur authentifié - Accès accordé', en: 'User authenticated - Access granted' },
  },
  challenge: {
    icon: '⚠️',
    text: { fr: 'CHALLENGE', en: 'CHALLENGE' },
    color: '#F59E0B',
    description: { fr: 'Authentification renforcée requise', en: 'Step-up authentication required' },
  },
  deny: {
    icon: '❌',
    text: { fr: 'REFUSER', en: 'DENY' },
    color: '#EF4444',
    description: { fr: 'Accès bloqué - Risque élevé détecté', en: 'Access blocked - High risk detected' },
  },
};

// Utility function
const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

// Memoized LayerCard component
const LayerCard = memo(function LayerCard({
  layer,
  state,
  isActive,
  language,
}: {
  layer: Layer;
  state: LayerState;
  isActive: boolean;
  language: 'fr' | 'en';
}) {
  const cardVariants = {
    idle: {
      opacity: 0.4,
      scale: 0.98,
      backgroundColor: 'rgba(75, 85, 99, 0.3)',
      borderColor: 'rgba(75, 85, 99, 0.3)',
    },
    active: {
      opacity: 1,
      scale: 1,
      backgroundColor: `${layer.color}20`,
      borderColor: layer.color,
      boxShadow: `0 0 30px ${layer.color}40`,
    },
    checking: {
      opacity: 1,
      scale: 1,
      backgroundColor: `${layer.color}20`,
      borderColor: layer.color,
      boxShadow: `0 0 20px ${layer.color}30`,
    },
    passed: {
      opacity: 0.9,
      scale: 0.99,
      backgroundColor: 'rgba(16, 185, 129, 0.15)',
      borderColor: '#10B981',
      boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
    },
    failed: {
      opacity: 1,
      scale: 1,
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      borderColor: '#EF4444',
      boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
    },
  };

  return (
    <motion.div
      className="relative p-4 md:p-5 rounded-xl border-2 backdrop-blur-sm will-change-transform"
      variants={cardVariants}
      animate={state}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      role="article"
      aria-label={`Layer ${layer.id}: ${layer.name[language]}`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <motion.span
          className="text-2xl md:text-3xl"
          animate={isActive ? { scale: [1, 1.2, 1] } : {}}
          transition={{ repeat: isActive ? Infinity : 0, duration: 0.8 }}
        >
          {layer.icon}
        </motion.span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-2 flex-wrap">
            <span className="text-gray-400">[{layer.id}]</span>
            <span>{layer.name[language]}</span>
            {layer.isNew && (
              <span className="px-2 py-0.5 text-xs font-bold bg-orange-500 text-white rounded-full animate-pulse">
                NEW
              </span>
            )}
          </h3>
          <p className="text-xs md:text-sm text-gray-400 mt-0.5">{layer.description[language]}</p>
        </div>

        {/* Status badge */}
        <AnimatePresence>
          {state === 'passed' && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-bold whitespace-nowrap"
            >
              <Check size={12} />
              {layer.statusText[language]}
            </motion.div>
          )}
          {state === 'failed' && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-2 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-xs font-bold"
            >
              ✗ FAIL
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Check items */}
      <AnimatePresence>
        {(state === 'checking' || state === 'passed') && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-3 pl-10 md:pl-12 space-y-1 overflow-hidden"
          >
            {layer.checkItems[language].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-xs md:text-sm text-gray-300"
              >
                <Check size={14} className="text-green-400 flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar for active state */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-b-xl"
          style={{ backgroundColor: layer.color }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: layer.duration / 1000, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
});

// Decision Engine component
function DecisionEngine({
  show,
  decision,
  language,
}: {
  show: boolean;
  decision: Decision;
  language: 'fr' | 'en';
}) {
  if (!show) return null;

  const config = decision ? decisionConfig[decision] : null;

  return (
    <motion.div
      className="mt-6 p-6 md:p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-gray-700"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg md:text-xl font-bold text-center text-white mb-4">
        {language === 'fr' ? 'MOTEUR DE DÉCISION' : 'DECISION ENGINE'}
      </h3>

      {config && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="text-5xl md:text-6xl mb-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: 2 }}
          >
            {config.icon}
          </motion.div>
          <div
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: config.color }}
          >
            {config.text[language]}
          </div>
          <p className="text-gray-400 text-sm md:text-base">{config.description[language]}</p>

          {/* Confetti effect for ALLOW */}
          {decision === 'allow' && (
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ['#10B981', '#8B5CF6', '#F59E0B', '#3B82F6', '#EC4899'][i % 5],
                    left: `${Math.random() * 100}%`,
                    top: '-10px',
                  }}
                  animate={{
                    y: [0, 400],
                    x: [0, (Math.random() - 0.5) * 100],
                    rotate: [0, 360],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

// Main component
export function DefenseLayersAnimation({
  autoPlay = false,
  speed = 1,
  showControls = true,
}: DefenseLayersAnimationProps) {
  const { language } = useLanguage();
  const lang = language as 'fr' | 'en';

  const [animationState, setAnimationState] = useState<AnimationState>(autoPlay ? 'running' : 'idle');
  const [currentLayerIndex, setCurrentLayerIndex] = useState(-1);
  const [layerStates, setLayerStates] = useState<LayerState[]>(Array(10).fill('idle'));
  const [finalDecision, setFinalDecision] = useState<Decision>(null);
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  const resetAnimation = useCallback(() => {
    setCurrentLayerIndex(-1);
    setLayerStates(Array(10).fill('idle'));
    setFinalDecision(null);
  }, []);

  const handlePlay = useCallback(() => {
    resetAnimation();
    setAnimationState('running');
  }, [resetAnimation]);

  const handlePause = useCallback(() => {
    setAnimationState('paused');
  }, []);

  const handleReplay = useCallback(() => {
    resetAnimation();
    setAnimationState('running');
  }, [resetAnimation]);

  // Main animation loop
  useEffect(() => {
    if (animationState !== 'running') return;

    let isCancelled = false;

    const runAnimation = async () => {
      // Initial delay
      await delay(300 / currentSpeed);

      for (let i = 0; i < layers.length; i++) {
        if (isCancelled) return;

        // Set current layer
        setCurrentLayerIndex(i);

        // Activate layer
        setLayerStates(prev => {
          const newStates = [...prev];
          newStates[i] = 'active';
          return newStates;
        });

        await delay(400 / currentSpeed);
        if (isCancelled) return;

        // Start checking
        setLayerStates(prev => {
          const newStates = [...prev];
          newStates[i] = 'checking';
          return newStates;
        });

        await delay(layers[i].duration / currentSpeed);
        if (isCancelled) return;

        // Mark as passed
        setLayerStates(prev => {
          const newStates = [...prev];
          newStates[i] = 'passed';
          return newStates;
        });

        await delay(200 / currentSpeed);
      }

      if (isCancelled) return;

      // Show decision engine
      setCurrentLayerIndex(10);
      await delay(500 / currentSpeed);

      if (isCancelled) return;

      // Decision (95% allow for demo)
      const rand = Math.random();
      const decision: Decision = rand > 0.95 ? 'deny' : rand > 0.9 ? 'challenge' : 'allow';
      setFinalDecision(decision);

      await delay(2500 / currentSpeed);

      if (isCancelled) return;
      setAnimationState('completed');
    };

    runAnimation();

    return () => {
      isCancelled = true;
    };
  }, [animationState, currentSpeed]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* User Request Indicator */}
      <AnimatePresence>
        {animationState !== 'idle' && (
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-base md:text-lg font-semibold shadow-lg shadow-blue-500/30"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-xl">👤</span>
              <span>{lang === 'fr' ? 'REQUÊTE UTILISATEUR' : 'USER REQUEST'}</span>
            </motion.div>
            <motion.div
              className="text-3xl mt-3 text-gray-400"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layers Container */}
      <div className="space-y-3">
        {layers.map((layer, index) => (
          <React.Fragment key={layer.id}>
            <LayerCard
              layer={layer}
              state={layerStates[index]}
              isActive={currentLayerIndex === index}
              language={lang}
            />
            {/* Arrow between layers */}
            {index < layers.length - 1 && layerStates[index] === 'passed' && (
              <motion.div
                className="text-center text-2xl text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ↓
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Decision Engine */}
      <DecisionEngine show={currentLayerIndex >= 10} decision={finalDecision} language={lang} />

      {/* Controls */}
      {showControls && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {animationState === 'idle' || animationState === 'completed' ? (
            <button
              onClick={animationState === 'completed' ? handleReplay : handlePlay}
              className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-indigo hover:from-accent-indigo hover:to-accent-purple text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:shadow-accent-purple/30"
              aria-label={animationState === 'completed' ? 'Replay animation' : 'Play animation'}
            >
              {animationState === 'completed' ? (
                <>
                  <RotateCcw size={20} />
                  <span>{lang === 'fr' ? 'Rejouer' : 'Replay'}</span>
                </>
              ) : (
                <>
                  <Play size={20} />
                  <span>{lang === 'fr' ? 'Lancer la Démo' : 'Play Demo'}</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold flex items-center gap-2 transition-all"
              aria-label="Pause animation"
            >
              <Pause size={20} />
              <span>{lang === 'fr' ? 'Pause' : 'Pause'}</span>
            </button>
          )}

          {/* Speed selector */}
          <select
            className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl font-medium cursor-pointer hover:border-gray-600 transition-colors"
            value={currentSpeed}
            onChange={(e) => setCurrentSpeed(Number(e.target.value))}
            aria-label="Animation speed"
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </div>
      )}

      {/* Stats footer */}
      <motion.div
        className="mt-6 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: animationState === 'completed' ? 1 : 0.5 }}
      >
        ⚡ {lang === 'fr' ? 'Temps de vérification moyen' : 'Average verification time'}: <strong>150ms</strong>{' '}
        ({lang === 'fr' ? 'constant-time contre timing attacks' : 'constant-time to prevent timing attacks'})
      </motion.div>
    </div>
  );
}

export default DefenseLayersAnimation;
