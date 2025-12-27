'use client';

import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, AlertTriangle, CheckCircle, Play, Pause, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Types
interface BotVsHumanComparisonProps {
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number;
  showLabels?: boolean;
}

interface Metric {
  id: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  unit: string;
  botValue: number;
  humanValue: number;
  botVariance?: number;
  humanVariance?: number;
  botFlag: { fr: string; en: string };
  humanFlag: { fr: string; en: string };
  ideal: { min: number; max: number };
  maxDisplay: number;
}

// Bilingual content
const content = {
  fr: {
    title: '🤖 BOT vs 👤 HUMAIN',
    subtitle: 'Comparaison des Patterns Cognitifs',
    description: 'Observez comment HCS-U7 détecte les bots grâce aux patterns cognitifs impossibles à reproduire',
    bot: 'BOT',
    human: 'HUMAIN',
    botSubtitle: 'Script Automatisé',
    humanSubtitle: 'Utilisateur Réel',
    finalScore: 'SCORE FINAL',
    blocked: 'BLOQUÉ',
    allowed: 'AUTORISÉ',
    detectionAccuracy: 'Précision de Détection',
    falsePositives: 'Faux Positifs',
    basedOn: 'Basé sur 518+ attaques bloquées avec 0 brèche',
    play: 'Lancer',
    pause: 'Pause',
    replay: 'Rejouer',
    flags: {
      INSTANT_RESPONSE: 'RÉPONSE INSTANTANÉE',
      ZERO_VARIANCE: 'VARIANCE NULLE',
      PERFECT_ACCURACY: 'PRÉCISION PARFAITE',
      NO_FATIGUE: 'PAS DE FATIGUE',
      ROBOTIC_TIMING: 'TIMING ROBOTIQUE',
    },
  },
  en: {
    title: '🤖 BOT vs 👤 HUMAN',
    subtitle: 'Cognitive Patterns Comparison',
    description: 'Watch how HCS-U7 detects bots through impossible cognitive patterns',
    bot: 'BOT',
    human: 'HUMAN',
    botSubtitle: 'Automated Script',
    humanSubtitle: 'Real User',
    finalScore: 'FINAL SCORE',
    blocked: 'BLOCKED',
    allowed: 'ALLOWED',
    detectionAccuracy: 'Detection Accuracy',
    falsePositives: 'False Positives',
    basedOn: 'Based on 518+ production attacks blocked with 0 breaches',
    play: 'Play',
    pause: 'Pause',
    replay: 'Replay',
    flags: {
      INSTANT_RESPONSE: 'INSTANT RESPONSE',
      ZERO_VARIANCE: 'ZERO VARIANCE',
      PERFECT_ACCURACY: 'PERFECT ACCURACY',
      NO_FATIGUE: 'NO FATIGUE',
      ROBOTIC_TIMING: 'ROBOTIC TIMING',
    },
  },
};

// Metrics data
const METRICS: Metric[] = [
  {
    id: 'stroop',
    name: { fr: 'Test Stroop', en: 'Stroop Test' },
    description: { fr: 'Temps de réaction (contrôle inhibiteur)', en: 'Reaction time (inhibitory control)' },
    unit: 'ms',
    botValue: 0,
    humanValue: 245,
    botFlag: { fr: 'TROP RAPIDE', en: 'TOO FAST' },
    humanFlag: { fr: 'VITESSE HUMAINE', en: 'HUMAN SPEED' },
    ideal: { min: 150, max: 400 },
    maxDisplay: 400,
  },
  {
    id: 'variance',
    name: { fr: 'Variance Réponse', en: 'Response Variance' },
    description: { fr: 'Consistance entre les essais', en: 'Consistency across trials' },
    unit: 'ms',
    botValue: 2,
    humanValue: 72,
    botFlag: { fr: 'TROP CONSTANT', en: 'TOO CONSISTENT' },
    humanFlag: { fr: 'VARIATION NATURELLE', en: 'NATURAL VARIATION' },
    ideal: { min: 50, max: 150 },
    maxDisplay: 150,
  },
  {
    id: 'hesitation',
    name: { fr: 'Taux Hésitation', en: 'Hesitation Rate' },
    description: { fr: 'Pauses et corrections naturelles', en: 'Natural pauses and corrections' },
    unit: '%',
    botValue: 0,
    humanValue: 2,
    botFlag: { fr: 'PARFAIT', en: 'PERFECT' },
    humanFlag: { fr: 'HUMAIN', en: 'HUMAN-LIKE' },
    ideal: { min: 1, max: 5 },
    maxDisplay: 10,
  },
  {
    id: 'fatigue',
    name: { fr: 'Effet Fatigue', en: 'Fatigue Effect' },
    description: { fr: 'Ralentissement au fil du temps', en: 'Slowdown over time' },
    unit: 'ms',
    botValue: 0,
    humanValue: 22,
    botFlag: { fr: 'PAS DE RALENTISSEMENT', en: 'NO SLOWDOWN' },
    humanFlag: { fr: 'FATIGUE NATURELLE', en: 'NATURAL FATIGUE' },
    ideal: { min: 15, max: 40 },
    maxDisplay: 50,
  },
  {
    id: 'accuracy',
    name: { fr: 'Précision N-Back', en: 'N-Back Accuracy' },
    description: { fr: 'Score test mémoire de travail', en: 'Working memory test score' },
    unit: '%',
    botValue: 100,
    humanValue: 94,
    botFlag: { fr: 'TROP PARFAIT', en: 'TOO PERFECT' },
    humanFlag: { fr: 'ERREURS RÉALISTES', en: 'REALISTIC ERRORS' },
    ideal: { min: 85, max: 97 },
    maxDisplay: 100,
  },
  {
    id: 'vocal',
    name: { fr: 'Timing RAN Vocal', en: 'Vocal RAN Timing' },
    description: { fr: 'Moyenne dénomination rapide ± variance', en: 'Rapid naming average ± variance' },
    unit: 'ms',
    botValue: 150,
    botVariance: 2,
    humanValue: 280,
    humanVariance: 65,
    botFlag: { fr: 'ROBOTIQUE', en: 'ROBOTIC' },
    humanFlag: { fr: 'VARIATION HUMAINE', en: 'HUMAN VARIATION' },
    ideal: { min: 200, max: 400 },
    maxDisplay: 400,
  },
];

// Bot flags
const BOT_FLAGS = ['INSTANT_RESPONSE', 'ZERO_VARIANCE', 'PERFECT_ACCURACY', 'NO_FATIGUE', 'ROBOTIC_TIMING'];

// Profiles
const BOT_PROFILE = { finalScore: 12, blocked: true };
const HUMAN_PROFILE = { finalScore: 94, blocked: false };

// Utility
const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

// MetricRow component
const MetricRow = memo(function MetricRow({
  metric,
  isBot,
  isActive,
  isVisible,
  showLabels,
  lang,
}: {
  metric: Metric;
  isBot: boolean;
  isActive: boolean;
  isVisible: boolean;
  showLabels: boolean;
  lang: 'fr' | 'en';
}) {
  if (!isVisible) return null;

  const value = isBot ? metric.botValue : metric.humanValue;
  const variance = isBot ? metric.botVariance : metric.humanVariance;
  const flag = isBot ? metric.botFlag[lang] : metric.humanFlag[lang];
  const percentage = Math.min(100, (value / metric.maxDisplay) * 100);
  const isInIdealRange = value >= metric.ideal.min && value <= metric.ideal.max;
  const barColor = isBot ? 'bg-red-500' : isInIdealRange ? 'bg-green-500' : 'bg-orange-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-3 rounded-lg transition-all ${isActive ? 'ring-2 ring-blue-400 bg-blue-500/10' : 'bg-gray-800/30'}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-sm text-white">{metric.name[lang]}</h4>
        {showLabels && (
          <span className="text-xs text-gray-500 hidden md:block">{metric.description[lang]}</span>
        )}
      </div>

      <div className="relative h-5 bg-gray-700 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`h-full ${barColor} rounded-full`}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
          {variance !== undefined ? `${value}±${variance}${metric.unit}` : `${value}${metric.unit}`}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
          isBot
            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
            : 'bg-green-500/20 text-green-400 border border-green-500/30'
        }`}
      >
        {isBot ? <AlertTriangle size={12} /> : <CheckCircle size={12} />}
        <span>{flag}</span>
      </motion.div>
    </motion.div>
  );
});

// ProfileColumn component
const ProfileColumn = memo(function ProfileColumn({
  type,
  currentMetricIndex,
  showFinalScore,
  showLabels,
  t,
  lang,
}: {
  type: 'bot' | 'human';
  currentMetricIndex: number;
  showFinalScore: boolean;
  showLabels: boolean;
  t: typeof content.en;
  lang: 'fr' | 'en';
}) {
  const isBot = type === 'bot';
  const profile = isBot ? BOT_PROFILE : HUMAN_PROFILE;
  const headerBg = isBot ? 'bg-gradient-to-r from-red-600 to-red-500' : 'bg-gradient-to-r from-green-600 to-green-500';
  const borderColor = isBot ? 'border-red-500/30' : 'border-green-500/30';
  const Icon = isBot ? Bot : User;

  return (
    <div className={`rounded-xl overflow-hidden border-2 ${borderColor} bg-gray-900/50 backdrop-blur-sm`}>
      {/* Header */}
      <div className={`${headerBg} text-white p-4 md:p-6`}>
        <div className="flex items-center justify-center gap-3 mb-1">
          <Icon size={28} />
          <h3 className="text-xl md:text-2xl font-bold">{isBot ? t.bot : t.human}</h3>
        </div>
        <p className="text-sm text-center opacity-90">{isBot ? t.botSubtitle : t.humanSubtitle}</p>
      </div>

      {/* Metrics */}
      <div className="p-4 space-y-3">
        {METRICS.map((metric, index) => (
          <MetricRow
            key={metric.id}
            metric={metric}
            isBot={isBot}
            isActive={currentMetricIndex === index}
            isVisible={currentMetricIndex >= index}
            showLabels={showLabels}
            lang={lang}
          />
        ))}
      </div>

      {/* Final Score */}
      <AnimatePresence>
        {showFinalScore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-6 border-t border-gray-700"
          >
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-400 mb-2">{t.finalScore}</p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className={`text-5xl md:text-6xl font-bold mb-4 ${isBot ? 'text-red-500' : 'text-green-500'}`}
              >
                {profile.finalScore}/100
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-base font-bold ${
                  isBot
                    ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                    : 'bg-green-500/20 text-green-400 border border-green-500/40'
                }`}
              >
                {isBot ? <AlertTriangle size={20} /> : <CheckCircle size={20} />}
                <span>{isBot ? t.blocked : t.allowed}</span>
              </motion.div>
            </div>

            {/* Bot Flags */}
            {isBot && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 space-y-1.5"
              >
                {BOT_FLAGS.map((flag, i) => (
                  <motion.div
                    key={flag}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 px-3 py-1.5 rounded border border-red-500/20"
                  >
                    <AlertTriangle size={12} />
                    <span>{t.flags[flag as keyof typeof t.flags]}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// Main Component
export function BotVsHumanComparison({
  autoPlay = true,
  loop = false,
  speed = 1,
  showLabels = true,
}: BotVsHumanComparisonProps) {
  const { language } = useLanguage();
  const lang = (language as 'fr' | 'en') || 'en';
  const t = content[lang];

  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMetricIndex, setCurrentMetricIndex] = useState(-1);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [animationKey, setAnimationKey] = useState(0);

  // Intersection Observer for auto-play
  useEffect(() => {
    if (!autoPlay || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setIsPlaying(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [autoPlay, hasStarted]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;

    let isCancelled = false;

    const runAnimation = async () => {
      // Reset
      setCurrentMetricIndex(-1);
      setShowFinalScore(false);
      await delay(500 / currentSpeed);

      // Show metrics sequentially
      for (let i = 0; i < METRICS.length; i++) {
        if (isCancelled) return;
        setCurrentMetricIndex(i);
        await delay(1000 / currentSpeed);
      }

      if (isCancelled) return;

      // Show final score
      setShowFinalScore(true);
      await delay(3000 / currentSpeed);

      if (isCancelled) return;

      // Loop or stop
      if (loop) {
        setAnimationKey(k => k + 1);
      } else {
        setIsPlaying(false);
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
    };
  }, [isPlaying, currentSpeed, loop, animationKey]);

  const handleReplay = useCallback(() => {
    setCurrentMetricIndex(-1);
    setShowFinalScore(false);
    setAnimationKey(k => k + 1);
    setIsPlaying(true);
  }, []);

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto" role="region" aria-label="Bot vs Human comparison">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400"
        >
          {t.subtitle}
        </motion.p>
        {showLabels && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-500 mt-2"
          >
            {t.description}
          </motion.p>
        )}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <ProfileColumn
          type="bot"
          currentMetricIndex={currentMetricIndex}
          showFinalScore={showFinalScore}
          showLabels={showLabels}
          t={t}
          lang={lang}
        />
        <ProfileColumn
          type="human"
          currentMetricIndex={currentMetricIndex}
          showFinalScore={showFinalScore}
          showLabels={showLabels}
          t={t}
          lang={lang}
        />
      </div>

      {/* Stats Footer */}
      <AnimatePresence>
        {showFinalScore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 p-6 bg-blue-500/10 rounded-xl text-center border border-blue-500/30"
          >
            <p className="text-lg font-semibold text-white">
              {t.detectionAccuracy}: <span className="text-2xl text-blue-400">99.3%</span> |{' '}
              {t.falsePositives}: <span className="text-2xl text-green-400">&lt;0.1%</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">{t.basedOn}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {isPlaying ? (
          <button
            onClick={() => setIsPlaying(false)}
            className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
            aria-label="Pause animation"
          >
            <Pause size={18} />
            <span>{t.pause}</span>
          </button>
        ) : (
          <button
            onClick={handleReplay}
            className="px-5 py-2.5 bg-gradient-to-r from-accent-purple to-accent-indigo hover:from-accent-indigo hover:to-accent-purple text-white rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg"
            aria-label="Play animation"
          >
            {currentMetricIndex >= 0 ? <RotateCcw size={18} /> : <Play size={18} />}
            <span>{currentMetricIndex >= 0 ? t.replay : t.play}</span>
          </button>
        )}

        <select
          value={currentSpeed}
          onChange={(e) => setCurrentSpeed(Number(e.target.value))}
          className="px-4 py-2.5 bg-gray-800 border border-gray-700 text-white rounded-lg font-medium cursor-pointer hover:border-gray-600 transition-colors"
          aria-label="Animation speed"
        >
          <option value={0.5}>0.5x</option>
          <option value={1}>1x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select>
      </div>
    </div>
  );
}

export default BotVsHumanComparison;
