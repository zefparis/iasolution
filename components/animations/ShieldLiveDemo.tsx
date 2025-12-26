'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Radio, MapPin, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Types
interface IMSICatcherParams {
  signalStrength: number;
  lac: number;
  cellId: 'unknown' | 'known';
  handoverRate: number;
  encryption: 'A5/0' | 'A5/1' | 'A5/2' | 'A5/3';
}

interface GeolocationParams {
  impossibleTravel: boolean;
  precisionTracking: boolean;
  gpsSpoofing: boolean;
}

interface RiskScore {
  imsiCatcher: number;
  geolocation: number;
  total: number;
  level: 'safe' | 'suspicious' | 'dangerous';
  recommendation: string;
}

interface ShieldLiveDemoProps {
  mode?: 'imsi-catcher' | 'geolocation' | 'combined';
  showExplanations?: boolean;
}

// Bilingual content
const content = {
  fr: {
    title: 'Shield Module - Démo Interactive',
    subtitle: 'Ajustez les paramètres pour simuler des attaques réseau et voir la détection en temps réel',
    imsiTitle: 'Détection IMSI Catcher',
    imsiSubtitle: 'Indicateurs de fausse antenne',
    geoTitle: 'Détection Attaque Géoloc',
    geoSubtitle: 'Patterns de localisation suspects',
    signalStrength: 'Puissance Signal',
    signalWeak: 'Faible',
    signalSuspicious: 'Suspect',
    signalStrong: 'Très Fort',
    tooStrong: 'TROP FORT',
    lac: 'LAC (Location Area Code)',
    lacFake: 'Fausse Antenne',
    lacSuspicious: 'Très Suspect',
    lacNormal: 'Normal',
    cellId: 'Cell ID',
    cellKnown: 'Connu en base',
    cellUnknown: 'Cell ID Inconnu',
    handovers: 'Handovers par Minute',
    excessive: 'EXCESSIF',
    normal: 'Normal',
    threshold: 'Seuil',
    attack: 'Attaque',
    encryption: 'Niveau Chiffrement',
    encSecure: 'Sécurisé',
    encDeprecated: 'Obsolète',
    encWeak: 'Faible',
    encNone: 'Aucun',
    impossibleTravel: 'Voyage Impossible Détecté',
    impossibleTravelDesc: 'Vitesse > 900 km/h entre positions',
    precisionTracking: 'Tracking Précision Détecté',
    precisionTrackingDesc: '3+ positions avec précision <10m',
    gpsSpoofing: 'GPS Spoofing Détecté',
    gpsSpoofingDesc: 'Coordonnées rondes ou précision impossible',
    locationTimeline: 'Visualisation Timeline Localisation',
    normalPattern: 'Pattern de mouvement normal',
    riskCalculator: 'CALCULATEUR DE RISQUE',
    riskSubtitle: 'Analyse de menace en temps réel basée sur Shield Module v8.4',
    totalRisk: 'Score de Risque Total',
    safe: 'SÛR',
    suspicious: 'SUSPECT',
    dangerous: 'DANGEREUX',
    recommendation: 'Recommandation',
    continueNormal: 'CONTINUER NORMALEMENT',
    avoidSensitive: 'ÉVITER OPS SENSIBLES',
    enableAirplane: 'ACTIVER MODE AVION',
    riskBreakdown: 'Détail du Risque',
    imsiCatcher: 'IMSI Catcher',
    geoAttack: 'Attaque Géolocalisation',
    allChecksPassed: 'Tous les contrôles de sécurité passés ✓',
    criticalAlert: 'ALERTE SÉCURITÉ CRITIQUE',
    criticalMessage: 'Plusieurs indicateurs d\'attaque de niveau étatique détectés. Activez immédiatement le mode avion et évitez les opérations sensibles.',
    resetSafe: 'Réinitialiser Sûr',
    simulateImsi: 'Simuler Attaque IMSI',
    simulateGeo: 'Simuler Attaque Géo',
    combinedAttack: 'Attaque Combinée',
    tryTip: '💡 Essayez de cliquer sur "Simuler Attaque IMSI" ou "Simuler Attaque Géo" pour voir comment le système réagit',
    points: 'points',
    signalExplanation: 'Signal plus fort que -40 dBm indique une possible fausse antenne à proximité',
    lac0Explanation: 'LAC 0 est une preuve définitive de fausse antenne',
    lac1Explanation: 'LAC 1 est très suspect et rarement légitime',
    encA50Explanation: 'Pas de chiffrement = Risque de sécurité majeur',
    encA51Explanation: 'A5/1 est crackable en temps réel',
    encA52Explanation: 'A5/2 est obsolète et non sécurisé',
    impossibleTravelExample: 'Utilisateur a voyagé de Paris à Londres en 10 minutes (physiquement impossible)',
    precisionTrackingExample: 'Tracking haute précision constant suggère une surveillance de niveau étatique',
    gpsSpoofingExample: 'Coordonnées GPS exactement (48.0, 2.0) avec précision 0.5m = impossible, probablement spoofé',
  },
  en: {
    title: 'Shield Module - Live Demo',
    subtitle: 'Adjust parameters to simulate network attacks and see real-time detection',
    imsiTitle: 'IMSI Catcher Detection',
    imsiSubtitle: 'Fake base station indicators',
    geoTitle: 'Geolocation Attack Detection',
    geoSubtitle: 'Suspicious location patterns',
    signalStrength: 'Signal Strength',
    signalWeak: 'Weak',
    signalSuspicious: 'Suspicious',
    signalStrong: 'Very Strong',
    tooStrong: 'TOO STRONG',
    lac: 'LAC (Location Area Code)',
    lacFake: 'Fake Base Station',
    lacSuspicious: 'Highly Suspicious',
    lacNormal: 'Normal',
    cellId: 'Cell ID',
    cellKnown: 'Known in Database',
    cellUnknown: 'Unknown Cell ID',
    handovers: 'Handovers per Minute',
    excessive: 'EXCESSIVE',
    normal: 'Normal',
    threshold: 'Threshold',
    attack: 'Attack',
    encryption: 'Encryption Level',
    encSecure: 'Secure',
    encDeprecated: 'Deprecated',
    encWeak: 'Weak',
    encNone: 'None',
    impossibleTravel: 'Impossible Travel Detected',
    impossibleTravelDesc: 'Speed > 900 km/h between positions',
    precisionTracking: 'Precision Tracking Detected',
    precisionTrackingDesc: '3+ positions with <10m accuracy',
    gpsSpoofing: 'GPS Spoofing Detected',
    gpsSpoofingDesc: 'Round coordinates or impossible accuracy',
    locationTimeline: 'Location Timeline Visualization',
    normalPattern: 'Normal movement pattern',
    riskCalculator: 'RISK SCORE CALCULATOR',
    riskSubtitle: 'Real-time threat analysis based on Shield Module v8.4',
    totalRisk: 'Total Risk Score',
    safe: 'SAFE',
    suspicious: 'SUSPICIOUS',
    dangerous: 'DANGEROUS',
    recommendation: 'Recommendation',
    continueNormal: 'CONTINUE_NORMAL',
    avoidSensitive: 'AVOID_SENSITIVE_OPS',
    enableAirplane: 'ENABLE_AIRPLANE_MODE',
    riskBreakdown: 'Risk Breakdown',
    imsiCatcher: 'IMSI Catcher',
    geoAttack: 'Geolocation Attack',
    allChecksPassed: 'All security checks passed ✓',
    criticalAlert: 'CRITICAL SECURITY ALERT',
    criticalMessage: 'Multiple state-level attack indicators detected. Immediately enable airplane mode and avoid sensitive operations.',
    resetSafe: 'Reset to Safe',
    simulateImsi: 'Simulate IMSI Attack',
    simulateGeo: 'Simulate Geo Attack',
    combinedAttack: 'Combined Attack',
    tryTip: '💡 Try clicking "Simulate IMSI Attack" or "Simulate Geo Attack" to see how the system responds',
    points: 'points',
    signalExplanation: 'Signal stronger than -40 dBm indicates possible fake base station nearby',
    lac0Explanation: 'LAC 0 is definitive proof of fake base station',
    lac1Explanation: 'LAC 1 is highly suspicious and rarely legitimate',
    encA50Explanation: 'No encryption = Major security risk',
    encA51Explanation: 'A5/1 is crackable in real-time',
    encA52Explanation: 'A5/2 is deprecated and insecure',
    impossibleTravelExample: 'User traveled from Paris to London in 10 minutes (physically impossible)',
    precisionTrackingExample: 'Consistent high-precision tracking suggests state-level surveillance',
    gpsSpoofingExample: 'GPS coordinates exactly (48.0, 2.0) with 0.5m accuracy = impossible, likely spoofed',
  },
};

// Detection rules
const IMSI_DETECTION_RULES = {
  signalStrength: { threshold: -40, points: 20 },
  lac: { 0: 40, 1: 25 },
  cellId: { unknown: 25 },
  handoverRate: { threshold: 5, points: 10 },
  encryption: { 'A5/0': 30, 'A5/1': 15, 'A5/2': 10, 'A5/3': 0 },
};

const GEO_DETECTION_RULES = {
  impossibleTravel: 50,
  precisionTracking: 30,
  gpsSpoofing: 40,
};

// Calculate risk score
function calculateRiskScore(imsi: IMSICatcherParams, geo: GeolocationParams): RiskScore {
  let imsiScore = 0;
  let geoScore = 0;

  // IMSI scoring
  if (imsi.signalStrength > IMSI_DETECTION_RULES.signalStrength.threshold) {
    imsiScore += IMSI_DETECTION_RULES.signalStrength.points;
  }
  if (imsi.lac === 0) imsiScore += IMSI_DETECTION_RULES.lac[0];
  else if (imsi.lac === 1) imsiScore += IMSI_DETECTION_RULES.lac[1];
  if (imsi.cellId === 'unknown') imsiScore += IMSI_DETECTION_RULES.cellId.unknown;
  if (imsi.handoverRate > IMSI_DETECTION_RULES.handoverRate.threshold) {
    imsiScore += IMSI_DETECTION_RULES.handoverRate.points;
  }
  imsiScore += IMSI_DETECTION_RULES.encryption[imsi.encryption];

  // Geo scoring
  if (geo.impossibleTravel) geoScore += GEO_DETECTION_RULES.impossibleTravel;
  if (geo.precisionTracking) geoScore += GEO_DETECTION_RULES.precisionTracking;
  if (geo.gpsSpoofing) geoScore += GEO_DETECTION_RULES.gpsSpoofing;

  const total = Math.min(100, imsiScore + geoScore);
  const level = total < 40 ? 'safe' : total < 70 ? 'suspicious' : 'dangerous';
  const recommendation = level === 'safe' ? 'CONTINUE_NORMAL' : level === 'suspicious' ? 'AVOID_SENSITIVE_OPS' : 'ENABLE_AIRPLANE_MODE';

  return { imsiCatcher: imsiScore, geolocation: geoScore, total, level, recommendation };
}

// IMSI Catcher Controls
const IMSICatcherControls = memo(function IMSICatcherControls({
  params,
  onChange,
  showExplanations,
  t,
}: {
  params: IMSICatcherParams;
  onChange: (p: IMSICatcherParams) => void;
  showExplanations: boolean;
  t: typeof content.en;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-500/30"
    >
      <div className="flex items-center gap-3 mb-6">
        <Radio className="text-blue-400" size={28} />
        <div>
          <h3 className="text-lg font-bold text-white">📡 {t.imsiTitle}</h3>
          <p className="text-sm text-gray-400">{t.imsiSubtitle}</p>
        </div>
      </div>

      {/* Signal Strength */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">
          {t.signalStrength}: {params.signalStrength} dBm
          {params.signalStrength > -40 && (
            <span className="ml-2 text-red-400 text-xs">⚠️ {t.tooStrong}</span>
          )}
        </label>
        <input
          type="range"
          min="-120"
          max="-30"
          value={params.signalStrength}
          onChange={(e) => onChange({ ...params, signalStrength: Number(e.target.value) })}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-blue-500"
          style={{
            background: `linear-gradient(to right, #10B981 0%, #10B981 ${((params.signalStrength + 120) / 90) * 100}%, #374151 ${((params.signalStrength + 120) / 90) * 100}%, #374151 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>-120 ({t.signalWeak})</span>
          <span>-40 ({t.signalSuspicious})</span>
          <span>-30 ({t.signalStrong})</span>
        </div>
        <AnimatePresence>
          {showExplanations && params.signalStrength > -40 && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-red-400 mt-2 bg-red-500/10 p-2 rounded border border-red-500/20"
            >
              {t.signalExplanation}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* LAC */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">{t.lac}</label>
        <select
          value={params.lac}
          onChange={(e) => onChange({ ...params, lac: Number(e.target.value) })}
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
        >
          <option value={0}>0 - {t.lacFake} 🔴</option>
          <option value={1}>1 - {t.lacSuspicious} ⚠️</option>
          <option value={2}>2+ - {t.lacNormal} ✅</option>
        </select>
        <AnimatePresence>
          {showExplanations && params.lac < 2 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-orange-400 mt-2 bg-orange-500/10 p-2 rounded border border-orange-500/20"
            >
              {params.lac === 0 ? t.lac0Explanation : t.lac1Explanation}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Cell ID */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">{t.cellId}</label>
        <select
          value={params.cellId}
          onChange={(e) => onChange({ ...params, cellId: e.target.value as 'known' | 'unknown' })}
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
        >
          <option value="known">{t.cellKnown} ✅</option>
          <option value="unknown">{t.cellUnknown} ⚠️</option>
        </select>
      </div>

      {/* Handover Rate */}
      <div className="mb-5">
        <label className="block text-sm font-semibold text-white mb-2">
          {t.handovers}: {params.handoverRate}
          {params.handoverRate > 5 && (
            <span className="ml-2 text-orange-400 text-xs">⚠️ {t.excessive}</span>
          )}
        </label>
        <input
          type="range"
          min="0"
          max="10"
          value={params.handoverRate}
          onChange={(e) => onChange({ ...params, handoverRate: Number(e.target.value) })}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-blue-500"
          style={{
            background: `linear-gradient(to right, #10B981 0%, #10B981 ${(params.handoverRate / 10) * 100}%, #374151 ${(params.handoverRate / 10) * 100}%, #374151 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0 ({t.normal})</span>
          <span>5 ({t.threshold})</span>
          <span>10 ({t.attack})</span>
        </div>
      </div>

      {/* Encryption */}
      <div>
        <label className="block text-sm font-semibold text-white mb-2">{t.encryption}</label>
        <select
          value={params.encryption}
          onChange={(e) => onChange({ ...params, encryption: e.target.value as IMSICatcherParams['encryption'] })}
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
        >
          <option value="A5/3">A5/3 - {t.encSecure} ✅</option>
          <option value="A5/2">A5/2 - {t.encDeprecated} ⚠️</option>
          <option value="A5/1">A5/1 - {t.encWeak} ⚠️</option>
          <option value="A5/0">A5/0 - {t.encNone} 🔴</option>
        </select>
        <AnimatePresence>
          {showExplanations && params.encryption !== 'A5/3' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-400 mt-2 bg-red-500/10 p-2 rounded border border-red-500/20"
            >
              {params.encryption === 'A5/0' && t.encA50Explanation}
              {params.encryption === 'A5/1' && t.encA51Explanation}
              {params.encryption === 'A5/2' && t.encA52Explanation}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

// Geolocation Controls
const GeolocationControls = memo(function GeolocationControls({
  params,
  onChange,
  showExplanations,
  t,
}: {
  params: GeolocationParams;
  onChange: (p: GeolocationParams) => void;
  showExplanations: boolean;
  t: typeof content.en;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-green-500/30"
    >
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="text-green-400" size={28} />
        <div>
          <h3 className="text-lg font-bold text-white">📍 {t.geoTitle}</h3>
          <p className="text-sm text-gray-400">{t.geoSubtitle}</p>
        </div>
      </div>

      {/* Impossible Travel */}
      <div className="mb-4">
        <label className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
          <div>
            <div className="font-semibold text-white">{t.impossibleTravel}</div>
            <div className="text-sm text-gray-400">{t.impossibleTravelDesc}</div>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={params.impossibleTravel}
              onChange={(e) => onChange({ ...params, impossibleTravel: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          </div>
        </label>
        <AnimatePresence>
          {showExplanations && params.impossibleTravel && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-400 mt-2 bg-red-500/10 p-2 rounded border border-red-500/20"
            >
              {t.impossibleTravelExample}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Precision Tracking */}
      <div className="mb-4">
        <label className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
          <div>
            <div className="font-semibold text-white">{t.precisionTracking}</div>
            <div className="text-sm text-gray-400">{t.precisionTrackingDesc}</div>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={params.precisionTracking}
              onChange={(e) => onChange({ ...params, precisionTracking: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
          </div>
        </label>
        <AnimatePresence>
          {showExplanations && params.precisionTracking && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-orange-400 mt-2 bg-orange-500/10 p-2 rounded border border-orange-500/20"
            >
              {t.precisionTrackingExample}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* GPS Spoofing */}
      <div className="mb-4">
        <label className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
          <div>
            <div className="font-semibold text-white">{t.gpsSpoofing}</div>
            <div className="text-sm text-gray-400">{t.gpsSpoofingDesc}</div>
          </div>
          <div className="relative">
            <input
              type="checkbox"
              checked={params.gpsSpoofing}
              onChange={(e) => onChange({ ...params, gpsSpoofing: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
          </div>
        </label>
        <AnimatePresence>
          {showExplanations && params.gpsSpoofing && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs text-red-400 mt-2 bg-red-500/10 p-2 rounded border border-red-500/20"
            >
              {t.gpsSpoofingExample}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Location Timeline */}
      <div className="mt-6 p-4 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-lg border-2 border-dashed border-gray-600">
        <div className="text-center text-sm text-gray-400">
          🗺️ {t.locationTimeline}
          <div className="mt-2 text-xs space-y-1">
            {params.impossibleTravel && <div>📍 Paris → 📍 London (10 min) ⚠️</div>}
            {params.precisionTracking && <div>📍 5 positions &lt;8m accuracy 🎯</div>}
            {params.gpsSpoofing && <div>📍 (48.0000, 2.0000) ⚠️</div>}
            {!params.impossibleTravel && !params.precisionTracking && !params.gpsSpoofing && (
              <div className="text-green-400">✅ {t.normalPattern}</div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// Risk Score Display
const RiskScoreDisplay = memo(function RiskScoreDisplay({
  score,
  showBreakdown,
  t,
}: {
  score: RiskScore;
  showBreakdown: boolean;
  t: typeof content.en;
}) {
  const config = {
    safe: { color: '#10B981', icon: '✅' },
    suspicious: { color: '#F59E0B', icon: '⚠️' },
    dangerous: { color: '#EF4444', icon: '🔴' },
  }[score.level];

  const levelText = {
    safe: t.safe,
    suspicious: t.suspicious,
    dangerous: t.dangerous,
  }[score.level];

  const recommendationText = {
    CONTINUE_NORMAL: t.continueNormal,
    AVOID_SENSITIVE_OPS: t.avoidSensitive,
    ENABLE_AIRPLANE_MODE: t.enableAirplane,
  }[score.recommendation] || score.recommendation;

  return (
    <motion.div
      layout
      className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border-4"
      style={{ borderColor: config.color }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.riskCalculator}</h3>
        <p className="text-gray-400 text-sm">{t.riskSubtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-white">{t.totalRisk}</span>
          <motion.span
            key={score.total}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            className="text-2xl md:text-3xl font-bold"
            style={{ color: config.color }}
          >
            {score.total}/100
          </motion.span>
        </div>

        <div className="h-6 md:h-8 bg-gray-700 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${score.total}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ backgroundColor: config.color }}
          />
          <div className="absolute inset-0 flex">
            <div className="w-[40%] border-r-2 border-white/30" />
            <div className="w-[30%] border-r-2 border-white/30" />
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0 - {t.safe}</span>
          <span>40 - {t.suspicious}</span>
          <span>70 - {t.dangerous}</span>
          <span>100</span>
        </div>
      </div>

      {/* Status Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="text-center p-6 rounded-lg mb-6"
        style={{ backgroundColor: `${config.color}20` }}
      >
        <div className="text-4xl md:text-5xl mb-2">{config.icon}</div>
        <div className="text-xl md:text-2xl font-bold mb-2" style={{ color: config.color }}>
          {levelText}
        </div>
        <div className="text-sm text-gray-400">
          {t.recommendation}: <strong className="text-white">{recommendationText}</strong>
        </div>
      </motion.div>

      {/* Breakdown */}
      {showBreakdown && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-3"
        >
          <h4 className="font-semibold text-white mb-3">{t.riskBreakdown}:</h4>

          {score.imsiCatcher > 0 && (
            <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg border border-red-500/20">
              <div className="flex items-center gap-2">
                <Radio size={20} className="text-red-400" />
                <span className="font-medium text-white">{t.imsiCatcher}</span>
              </div>
              <span className="text-red-400 font-bold">+{score.imsiCatcher} {t.points}</span>
            </div>
          )}

          {score.geolocation > 0 && (
            <div className="flex items-center justify-between p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-orange-400" />
                <span className="font-medium text-white">{t.geoAttack}</span>
              </div>
              <span className="text-orange-400 font-bold">+{score.geolocation} {t.points}</span>
            </div>
          )}

          {score.total === 0 && (
            <div className="flex items-center justify-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <CheckCircle size={20} className="text-green-400 mr-2" />
              <span className="font-medium text-green-400">{t.allChecksPassed}</span>
            </div>
          )}
        </motion.div>
      )}

      {/* Critical Alert */}
      <AnimatePresence>
        {score.total >= 70 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mt-6 p-4 bg-red-500/20 border-2 border-red-500 rounded-lg"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle size={24} className="text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-red-400 mb-1">{t.criticalAlert}</h5>
                <p className="text-sm text-red-300">{t.criticalMessage}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

// Main Component
export function ShieldLiveDemo({
  mode = 'combined',
  showExplanations = true,
}: ShieldLiveDemoProps) {
  const { language } = useLanguage();
  const t = content[language as 'fr' | 'en'] || content.en;

  const [imsiParams, setImsiParams] = useState<IMSICatcherParams>({
    signalStrength: -70,
    lac: 2,
    cellId: 'known',
    handoverRate: 2,
    encryption: 'A5/3',
  });

  const [geoParams, setGeoParams] = useState<GeolocationParams>({
    impossibleTravel: false,
    precisionTracking: false,
    gpsSpoofing: false,
  });

  const [riskScore, setRiskScore] = useState<RiskScore>({
    imsiCatcher: 0,
    geolocation: 0,
    total: 0,
    level: 'safe',
    recommendation: 'CONTINUE_NORMAL',
  });

  useEffect(() => {
    setRiskScore(calculateRiskScore(imsiParams, geoParams));
  }, [imsiParams, geoParams]);

  const resetSafe = useCallback(() => {
    setImsiParams({ signalStrength: -70, lac: 2, cellId: 'known', handoverRate: 2, encryption: 'A5/3' });
    setGeoParams({ impossibleTravel: false, precisionTracking: false, gpsSpoofing: false });
  }, []);

  const simulateImsi = useCallback(() => {
    setImsiParams({ signalStrength: -35, lac: 0, cellId: 'unknown', handoverRate: 7, encryption: 'A5/0' });
    setGeoParams({ impossibleTravel: false, precisionTracking: false, gpsSpoofing: false });
  }, []);

  const simulateGeo = useCallback(() => {
    setImsiParams({ signalStrength: -70, lac: 2, cellId: 'known', handoverRate: 2, encryption: 'A5/3' });
    setGeoParams({ impossibleTravel: true, precisionTracking: true, gpsSpoofing: true });
  }, []);

  const simulateCombined = useCallback(() => {
    setImsiParams({ signalStrength: -38, lac: 1, cellId: 'unknown', handoverRate: 6, encryption: 'A5/1' });
    setGeoParams({ impossibleTravel: true, precisionTracking: false, gpsSpoofing: true });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <Shield className="text-orange-500" size={40} />
          <h2 className="text-2xl md:text-3xl font-bold text-white">{t.title}</h2>
        </motion.div>
        <p className="text-gray-400">{t.subtitle}</p>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {(mode === 'imsi-catcher' || mode === 'combined') && (
          <IMSICatcherControls
            params={imsiParams}
            onChange={setImsiParams}
            showExplanations={showExplanations}
            t={t}
          />
        )}
        {(mode === 'geolocation' || mode === 'combined') && (
          <GeolocationControls
            params={geoParams}
            onChange={setGeoParams}
            showExplanations={showExplanations}
            t={t}
          />
        )}
      </div>

      {/* Risk Score */}
      <RiskScoreDisplay score={riskScore} showBreakdown={showExplanations} t={t} />

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        <button
          onClick={resetSafe}
          className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
        >
          <RotateCcw size={18} />
          {t.resetSafe}
        </button>
        <button
          onClick={simulateImsi}
          className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
        >
          ⚠️ {t.simulateImsi}
        </button>
        <button
          onClick={simulateGeo}
          className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
        >
          📍 {t.simulateGeo}
        </button>
        <button
          onClick={simulateCombined}
          className="px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
        >
          🎲 {t.combinedAttack}
        </button>
      </div>

      {/* Tip */}
      <div className="mt-6 text-center text-sm text-gray-500">{t.tryTip}</div>
    </div>
  );
}

export default ShieldLiveDemo;
