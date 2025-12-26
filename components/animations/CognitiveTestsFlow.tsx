'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, RotateCcw, CheckCircle, Clock, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Types
interface CognitiveTestsFlowProps {
  mode?: 'auto' | 'interactive';
  autoPlay?: boolean;
  showCode?: boolean;
  speed?: number;
  onComplete?: (hcsCode: string) => void;
}

interface TestResult {
  id: string;
  metrics: Record<string, number | undefined>;
  timestamp: number;
}

interface HCSCodeSegments {
  header: string;
  cognitive: string;
  vocal: string;
  interpretation: string;
  qsig: string;
  b3: string;
}

// Bilingual content
const content = {
  fr: {
    title: '🧠 Parcours d\'Authentification Cognitive',
    subtitle: 'Observez comment les tests cognitifs construisent votre signature unique',
    completeSubtitle: 'Authentification terminée ! Code HCS-U7 généré',
    progress: 'Progression',
    testsCompleted: 'tests complétés',
    currentTest: 'TEST EN COURS',
    instructions: 'Instructions',
    autoSolving: 'Résolution automatique...',
    hcsConstruction: '🔐 CONSTRUCTION CODE HCS (Live)',
    pending: '[EN ATTENTE]',
    copyCode: 'Copier',
    fullCode: 'Code Complet',
    testsProgress: 'Progression des Tests',
    pause: 'Pause',
    resume: 'Reprendre',
    skip: 'Passer',
    restart: 'Recommencer',
    authComplete: 'Authentification Terminée !',
    authCompleteDesc: 'Votre signature cognitive unique a été générée et vérifiée.',
    demoNote: '💡 Ceci est une démonstration automatique. En production, les utilisateurs complètent ces tests de manière interactive en environ 60 secondes.',
    inProgress: 'en cours...',
    time: 'Temps',
    errors: 'erreurs',
    correct: 'correct',
    completion: 'complétion',
    score: 'Score',
    avg: 'moy',
  },
  en: {
    title: '🧠 Cognitive Authentication Journey',
    subtitle: 'Watch how cognitive tests build your unique authentication signature',
    completeSubtitle: 'Authentication complete! HCS-U7 code generated',
    progress: 'Progress',
    testsCompleted: 'tests completed',
    currentTest: 'CURRENT TEST',
    instructions: 'Instructions',
    autoSolving: 'Auto-solving...',
    hcsConstruction: '🔐 HCS CODE CONSTRUCTION (Live)',
    pending: '[PENDING]',
    copyCode: 'Copy',
    fullCode: 'Full Code',
    testsProgress: 'Tests Progress',
    pause: 'Pause',
    resume: 'Resume',
    skip: 'Skip Test',
    restart: 'Restart',
    authComplete: 'Authentication Complete!',
    authCompleteDesc: 'Your unique cognitive signature has been generated and verified.',
    demoNote: '💡 This is an automated demonstration. In production, real users complete these tests interactively in approximately 60 seconds.',
    inProgress: 'in progress...',
    time: 'Time',
    errors: 'errors',
    correct: 'correct',
    completion: 'completion',
    score: 'Score',
    avg: 'avg',
  },
};

// Cognitive Tests Data
const COGNITIVE_TESTS = [
  {
    id: 'stroop',
    name: { fr: 'Test Stroop', en: 'Stroop Test' },
    shortName: { fr: 'Stroop', en: 'Stroop' },
    icon: '🎨',
    duration: 6000,
    description: { fr: 'Nommez la COULEUR du texte, pas le mot', en: 'Name the COLOR of the text, not the word itself' },
    instructions: { fr: 'Cliquez sur la couleur que vous voyez, pas ce que le mot dit', en: 'Click the color you see, not what the word says' },
    trials: [
      { word: 'RED', color: '#EF4444', correctAnswer: 'red' },
      { word: 'BLUE', color: '#3B82F6', correctAnswer: 'blue' },
      { word: 'GREEN', color: '#F59E0B', correctAnswer: 'yellow' },
      { word: 'YELLOW', color: '#10B981', correctAnswer: 'green' },
      { word: 'BLUE', color: '#3B82F6', correctAnswer: 'blue' },
    ],
    metrics: { avgResponseTime: 245, errors: 1, variance: 72 },
  },
  {
    id: 'nback',
    name: { fr: 'Test N-Back', en: 'N-Back Test' },
    shortName: { fr: 'N-Back', en: 'N-Back' },
    icon: '🧩',
    duration: 8000,
    description: { fr: 'Rappelez-vous si la lettre actuelle correspond à N positions avant', en: 'Remember if current letter matches N positions back' },
    instructions: { fr: 'Appuyez MATCH si la lettre est la même que 2 positions avant', en: 'Press MATCH if the letter is same as 2 positions ago' },
    n: 2,
    sequence: ['A', 'B', 'C', 'A', 'D', 'B', 'E', 'C', 'F', 'D'],
    metrics: { correct: 18, total: 20, accuracy: 90 },
  },
  {
    id: 'trail-a',
    name: { fr: 'Trail Making (Partie A)', en: 'Trail Making Test (Part A)' },
    shortName: { fr: 'Trail A', en: 'Trail A' },
    icon: '🔢',
    duration: 7000,
    description: { fr: 'Connectez les nombres dans l\'ordre croissant', en: 'Connect numbers in ascending order (1→2→3...)' },
    instructions: { fr: 'Cliquez sur les nombres dans l\'ordre: 1, 2, 3, 4, 5', en: 'Click numbers in order: 1, 2, 3, 4, 5' },
    points: [
      { id: '1', x: 20, y: 30 },
      { id: '2', x: 60, y: 20 },
      { id: '3', x: 40, y: 60 },
      { id: '4', x: 80, y: 50 },
      { id: '5', x: 70, y: 80 },
    ],
    metrics: { completionTime: 8.2, errors: 0 },
  },
  {
    id: 'trail-b',
    name: { fr: 'Trail Making (Partie B)', en: 'Trail Making Test (Part B)' },
    shortName: { fr: 'Trail B', en: 'Trail B' },
    icon: '🔤',
    duration: 10000,
    description: { fr: 'Connectez en alternant nombres et lettres', en: 'Connect alternating numbers and letters (1→A→2→B...)' },
    instructions: { fr: 'Cliquez dans l\'ordre: 1, A, 2, B, 3, C', en: 'Click in order: 1, A, 2, B, 3, C' },
    points: [
      { id: '1', x: 15, y: 25 },
      { id: 'A', x: 45, y: 15 },
      { id: '2', x: 75, y: 30 },
      { id: 'B', x: 35, y: 55 },
      { id: '3', x: 65, y: 70 },
      { id: 'C', x: 85, y: 85 },
    ],
    metrics: { completionTime: 12.4, errors: 0 },
  },
  {
    id: 'digit-span',
    name: { fr: 'Test Empan Numérique', en: 'Digit Span Test' },
    shortName: { fr: 'Empan', en: 'Digit Span' },
    icon: '🔢',
    duration: 8000,
    description: { fr: 'Mémorisez et répétez les séquences de chiffres', en: 'Remember and repeat digit sequences' },
    instructions: { fr: 'Regardez les chiffres, puis répétez-les dans l\'ordre', en: 'Watch the numbers, then repeat them in order' },
    sequences: [
      { digits: [7, 3, 9], direction: 'forward' },
      { digits: [5, 2, 8, 4], direction: 'forward' },
      { digits: [6, 1, 9, 3], direction: 'backward' },
    ],
    metrics: { longestForward: 4, longestBackward: 4, totalScore: 8 },
  },
  {
    id: 'ran-vocal',
    name: { fr: 'Test RAN Vocal', en: 'RAN Vocal Test' },
    shortName: { fr: 'RAN', en: 'RAN Vocal' },
    icon: '🎤',
    duration: 12000,
    description: { fr: 'Nommez les couleurs à voix haute le plus vite possible', en: 'Name colors aloud as fast as possible' },
    instructions: { fr: 'Dites le nom de chaque couleur que vous voyez', en: 'Say the name of each color you see' },
    colors: ['red', 'blue', 'green', 'yellow', 'red', 'green', 'blue', 'yellow', 'green', 'red', 'yellow', 'blue', 'red', 'green', 'yellow', 'blue', 'yellow', 'green', 'blue', 'red'],
    metrics: { correct: 18, total: 20, avgTiming: 280, variance: 65, hesitationRate: 2, fatigueEffect: 22 },
  },
];

// Build HCS Code
function buildHCSCode(results: TestResult[]): HCSCodeSegments {
  const stroop = results.find(r => r.id === 'stroop');
  const nback = results.find(r => r.id === 'nback');
  const trailA = results.find(r => r.id === 'trail-a');
  const trailB = results.find(r => r.id === 'trail-b');
  const digit = results.find(r => r.id === 'digit-span');
  const ran = results.find(r => r.id === 'ran-vocal');

  const F = stroop?.metrics.avgResponseTime ? Math.round(stroop.metrics.avgResponseTime / 10) : 0;
  const C = nback?.metrics.accuracy ?? 0;
  const V = trailA?.metrics.completionTime ? Math.round(trailA.metrics.completionTime * 10) : 0;
  const S = trailB?.metrics.completionTime ? Math.round(trailB.metrics.completionTime * 10) : 0;
  const Cr = digit?.metrics.totalScore ? digit.metrics.totalScore * 6 : 0;

  return {
    header: 'HCS-U7|V:8.0|ALG:QS|E:F|MOD:c40f30m30',
    cognitive: results.length > 0 ? `COG:F${F}C${C}V${V}S${S}Cr${Cr}` : '',
    vocal: ran ? `VOC:R${ran.metrics.correct}v${ran.metrics.variance}h${ran.metrics.hesitationRate}f${ran.metrics.fatigueEffect}` : '',
    interpretation: results.length >= 4 ? 'INT:PB=F,SM=H,TN=M,VO=H' : '',
    qsig: results.length >= 5 ? 'QSIG:0001fykuk9' : '',
    b3: results.length >= 6 ? 'B3:00bce1x0' : '',
  };
}

// Utility - delay function available for future interactive mode
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Color map for visualizations
const colorMap: Record<string, string> = {
  red: '#EF4444',
  blue: '#3B82F6',
  green: '#10B981',
  yellow: '#F59E0B',
};

// Stroop Visualization
const StroopVisualization = memo(function StroopVisualization({ test, progress }: { test: typeof COGNITIVE_TESTS[0]; progress: number }) {
  const trials = test.trials || [];
  const trialIndex = Math.min(Math.floor((progress / 100) * trials.length), trials.length - 1);
  const currentTrial = trials[trialIndex];

  if (!currentTrial) return null;

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg min-h-[180px] flex flex-col items-center justify-center">
      <motion.div
        key={trialIndex}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <div className="text-5xl md:text-6xl font-bold mb-6" style={{ color: currentTrial.color }}>
          {currentTrial.word}
        </div>
        <div className="flex gap-3 justify-center">
          {['red', 'blue', 'green', 'yellow'].map(color => (
            <div
              key={color}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-3 transition-all ${
                color === currentTrial.correctAnswer ? 'ring-4 ring-white/50 scale-110' : 'opacity-60'
              }`}
              style={{ backgroundColor: colorMap[color], borderColor: colorMap[color] }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
});

// N-Back Visualization
const NBackVisualization = memo(function NBackVisualization({ test, progress }: { test: typeof COGNITIVE_TESTS[0]; progress: number }) {
  const sequence = test.sequence || [];
  const n = test.n || 2;
  const sequenceIndex = Math.min(Math.floor((progress / 100) * sequence.length), sequence.length - 1);
  const currentLetter = sequence[sequenceIndex];
  const previousLetters = sequence.slice(Math.max(0, sequenceIndex - n), sequenceIndex);

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg min-h-[180px]">
      <div className="text-center mb-4">
        <motion.div
          key={sequenceIndex}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="text-7xl md:text-8xl font-bold text-blue-400"
        >
          {currentLetter}
        </motion.div>
      </div>
      <div className="flex justify-center gap-3 items-center mb-4">
        <span className="text-gray-500 text-sm">Previous {n}:</span>
        {previousLetters.map((letter, i) => (
          <span key={i} className="text-xl font-semibold text-gray-400">{letter}</span>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        <div className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold text-sm">MATCH</div>
        <div className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold text-sm">NO MATCH</div>
      </div>
    </div>
  );
});

// Trail Making Visualization
const TrailMakingVisualization = memo(function TrailMakingVisualization({ test, progress }: { test: typeof COGNITIVE_TESTS[0]; progress: number }) {
  const points = test.points || [];
  const pointsCompleted = Math.floor((progress / 100) * points.length);

  return (
    <div className="bg-gray-900/50 p-4 rounded-lg">
      <svg viewBox="0 0 100 100" className="w-full h-48">
        {points.slice(0, pointsCompleted).map((point, i) => {
          if (i === 0) return null;
          const prev = points[i - 1];
          return (
            <motion.line
              key={`line-${i}`}
              x1={prev.x}
              y1={prev.y}
              x2={point.x}
              y2={point.y}
              stroke="#3B82F6"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
        {points.map((point, i) => {
          const isCompleted = i < pointsCompleted;
          const isCurrent = i === pointsCompleted;
          return (
            <g key={point.id}>
              <circle
                cx={point.x}
                cy={point.y}
                r={isCurrent ? 6 : 5}
                fill={isCompleted ? '#10B981' : isCurrent ? '#3B82F6' : '#6B7280'}
                className={isCurrent ? 'animate-pulse' : ''}
              />
              <text
                x={point.x}
                y={point.y}
                textAnchor="middle"
                dy="0.35em"
                className="text-[8px] font-bold fill-white"
              >
                {point.id}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
});

// Digit Span Visualization
const DigitSpanVisualization = memo(function DigitSpanVisualization({ test, progress }: { test: typeof COGNITIVE_TESTS[0]; progress: number }) {
  const sequences = test.sequences || [];
  const seqIndex = Math.min(Math.floor((progress / 100) * sequences.length), sequences.length - 1);
  const currentSeq = sequences[seqIndex];
  const digits = currentSeq?.digits || [];
  const digitProgress = (progress % (100 / sequences.length)) / (100 / sequences.length);
  const digitIndex = Math.min(Math.floor(digitProgress * digits.length), digits.length - 1);

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg min-h-[180px] flex flex-col items-center justify-center">
      <div className="text-sm text-gray-400 mb-3">
        {currentSeq?.direction === 'forward' ? '→ Forward' : '← Backward'}
      </div>
      <motion.div
        key={`${seqIndex}-${digitIndex}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-7xl md:text-8xl font-bold text-purple-400 mb-4"
      >
        {digits[digitIndex]}
      </motion.div>
      <div className="flex gap-2">
        {digits.map((d, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-all ${
              i <= digitIndex ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-500'
            }`}
          >
            {i <= digitIndex ? d : '?'}
          </div>
        ))}
      </div>
    </div>
  );
});

// RAN Vocal Visualization
const RANVocalVisualization = memo(function RANVocalVisualization({ test, progress }: { test: typeof COGNITIVE_TESTS[0]; progress: number }) {
  const colors = test.colors || [];
  const colorIndex = Math.min(Math.floor((progress / 100) * colors.length), colors.length - 1);
  const currentColor = colors[colorIndex];

  return (
    <div className="bg-gray-900/50 p-6 rounded-lg min-h-[180px]">
      <div className="flex items-center justify-center mb-4">
        <motion.div
          key={colorIndex}
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-2xl"
          style={{ backgroundColor: colorMap[currentColor] }}
        />
      </div>
      <div className="grid grid-cols-10 gap-1 mb-4">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`w-5 h-5 rounded transition-all ${
              i === colorIndex ? 'ring-2 ring-white scale-125' : i < colorIndex ? 'opacity-30' : ''
            }`}
            style={{ backgroundColor: colorMap[color] }}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span>🎤 Listening...</span>
      </div>
    </div>
  );
});

// Test Visualization Router
function TestVisualization({ test, progress }: { test: typeof COGNITIVE_TESTS[0]; progress: number }) {
  switch (test.id) {
    case 'stroop':
      return <StroopVisualization test={test} progress={progress} />;
    case 'nback':
      return <NBackVisualization test={test} progress={progress} />;
    case 'trail-a':
    case 'trail-b':
      return <TrailMakingVisualization test={test} progress={progress} />;
    case 'digit-span':
      return <DigitSpanVisualization test={test} progress={progress} />;
    case 'ran-vocal':
      return <RANVocalVisualization test={test} progress={progress} />;
    default:
      return <div className="p-8 text-center text-gray-500">Test visualization</div>;
  }
}

// Progress Bar Component
const ProgressBar = memo(function ProgressBar({
  current,
  total,
  tests,
  lang,
}: {
  current: number;
  total: number;
  tests: typeof COGNITIVE_TESTS;
  lang: 'fr' | 'en';
}) {
  const t = content[lang];
  const progress = (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-gray-400">{t.progress}</span>
        <span className="text-lg font-bold text-blue-400">{current}/{total} {t.testsCompleted}</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="flex justify-between">
        {tests.map((test, index) => {
          const isCompleted = index < current;
          const isCurrent = index === current;
          return (
            <motion.div
              key={test.id}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl border-3 transition-all ${
                  isCompleted
                    ? 'bg-green-600 border-green-500'
                    : isCurrent
                    ? 'bg-blue-600 border-blue-400 animate-pulse shadow-lg shadow-blue-500/50'
                    : 'bg-gray-700 border-gray-600'
                }`}
              >
                {isCompleted ? '✓' : test.icon}
              </div>
              <span className={`text-[10px] md:text-xs font-medium text-center hidden md:block ${isCurrent ? 'text-blue-400' : 'text-gray-500'}`}>
                {test.shortName[lang]}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

// Current Test Display
const CurrentTestDisplay = memo(function CurrentTestDisplay({
  test,
  progress,
  timeElapsed,
  lang,
}: {
  test: typeof COGNITIVE_TESTS[0];
  progress: number;
  timeElapsed: number;
  lang: 'fr' | 'en';
}) {
  const t = content[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-blue-500/30 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{test.icon}</span>
          <div>
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{t.currentTest}</div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{test.name[lang]}</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Clock size={18} />
          <span className="font-mono text-lg">{(timeElapsed / 1000).toFixed(1)}s</span>
        </div>
      </div>

      <div className="bg-blue-500/10 p-3 rounded-lg mb-4 border-l-4 border-blue-500">
        <p className="text-sm text-blue-200">
          📋 {t.instructions}: {test.instructions[lang]}
        </p>
      </div>

      <TestVisualization test={test} progress={progress} />

      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{t.autoSolving}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
});

// HCS Code Display
const HCSCodeDisplay = memo(function HCSCodeDisplay({
  code,
  isComplete,
  lang,
}: {
  code: HCSCodeSegments | null;
  isComplete: boolean;
  lang: 'fr' | 'en';
}) {
  const t = content[lang];

  const segments = [
    { label: 'Header', value: code?.header, color: 'text-blue-400' },
    { label: 'Cognitive', value: code?.cognitive, color: 'text-purple-400' },
    { label: 'Vocal', value: code?.vocal, color: 'text-green-400' },
    { label: 'Interpretation', value: code?.interpretation, color: 'text-orange-400' },
    { label: 'QSIG', value: code?.qsig, color: 'text-red-400' },
    { label: 'B3', value: code?.b3, color: 'text-pink-400' },
  ];

  return (
    <div className="bg-gray-900 p-5 rounded-xl mb-6 font-mono text-sm border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-base text-white">{t.hcsConstruction}</h4>
        {isComplete && (
          <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-sans transition-colors">
            {t.copyCode}
          </button>
        )}
      </div>
      <div className="space-y-1.5">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: seg.value ? 1 : 0.4, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-2"
          >
            <span className="text-gray-500 min-w-[100px]">{seg.label}:</span>
            <span className={seg.value ? seg.color : 'text-gray-600'}>
              {seg.value || t.pending}
            </span>
          </motion.div>
        ))}
      </div>
      {isComplete && code && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 pt-3 border-t border-gray-700"
        >
          <div className="text-xs text-gray-500 mb-1">{t.fullCode}:</div>
          <div className="bg-gray-800 p-2 rounded text-xs break-all text-green-400">
            {Object.values(code).filter(Boolean).join('|')}
          </div>
        </motion.div>
      )}
    </div>
  );
});

// Completed Tests List
const CompletedTestsList = memo(function CompletedTestsList({
  results,
  allTests,
  currentIndex,
  lang,
}: {
  results: TestResult[];
  allTests: typeof COGNITIVE_TESTS;
  currentIndex: number;
  lang: 'fr' | 'en';
}) {
  const t = content[lang];

  const getMetricsText = (test: typeof COGNITIVE_TESTS[0], result: TestResult): string => {
    const m = result.metrics;
    switch (test.id) {
      case 'stroop':
        return `${m.avgResponseTime}ms ${t.avg}, ${m.errors} ${t.errors}`;
      case 'nback':
        return `${m.correct}/${m.total} ${t.correct}`;
      case 'trail-a':
      case 'trail-b':
        return `${m.completionTime}s ${t.completion}`;
      case 'digit-span':
        return `${t.score}: ${m.totalScore}`;
      case 'ran-vocal':
        return `${m.correct}/${m.total}, ${m.avgTiming}ms ${t.avg}`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
      <h4 className="font-bold text-base text-white mb-4">{t.testsProgress}:</h4>
      <div className="space-y-2">
        {allTests.map((test, index) => {
          const result = results.find(r => r.id === test.id);
          const isCompleted = !!result;
          const isCurrent = index === currentIndex;
          // isPending state available for future styling: index > currentIndex

          return (
            <div
              key={test.id}
              className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                isCompleted ? 'bg-green-500/10' : isCurrent ? 'bg-blue-500/10' : 'bg-gray-700/30'
              }`}
            >
              <span className="text-xl">
                {isCompleted ? '✅' : isCurrent ? '🔄' : '⏳'}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-white truncate">
                  {index + 1}. {test.name[lang]}
                </div>
                {isCompleted && result && (
                  <div className="text-xs text-gray-400 truncate">
                    {getMetricsText(test, result)}
                  </div>
                )}
                {isCurrent && (
                  <div className="text-xs text-blue-400">{t.inProgress}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// Main Component
export function CognitiveTestsFlow({
  mode = 'auto',
  autoPlay = true,
  showCode = true,
  speed = 1,
  onComplete,
}: CognitiveTestsFlowProps) {
  const { language } = useLanguage();
  const lang = (language as 'fr' | 'en') || 'en';
  const t = content[lang];

  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hcsCode, setHcsCode] = useState<HCSCodeSegments | null>(null);
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const currentTest = COGNITIVE_TESTS[currentTestIndex];
  const isComplete = currentTestIndex >= COGNITIVE_TESTS.length;

  // Animation loop
  useEffect(() => {
    if (!isPlaying || isComplete || mode !== 'auto') return;

    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 100);
      setProgress(prev => {
        const increment = (100 / (currentTest.duration / 100)) * currentSpeed;
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          // Test complete
          const result: TestResult = {
            id: currentTest.id,
            metrics: currentTest.metrics,
            timestamp: Date.now(),
          };
          setTestResults(prev => {
            const newResults = [...prev, result];
            setHcsCode(buildHCSCode(newResults));
            return newResults;
          });
          setProgress(0);
          setTimeElapsed(0);
          setCurrentTestIndex(prev => prev + 1);
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isComplete, currentTest, currentSpeed, mode]);

  // Completion callback
  useEffect(() => {
    if (isComplete && onComplete && hcsCode) {
      const finalCode = Object.values(hcsCode).filter(Boolean).join('|');
      onComplete(finalCode);
    }
  }, [isComplete, onComplete, hcsCode]);

  const handleSkip = useCallback(() => {
    if (currentTestIndex < COGNITIVE_TESTS.length) {
      const result: TestResult = {
        id: currentTest.id,
        metrics: currentTest.metrics,
        timestamp: Date.now(),
      };
      setTestResults(prev => {
        const newResults = [...prev, result];
        setHcsCode(buildHCSCode(newResults));
        return newResults;
      });
      setProgress(0);
      setTimeElapsed(0);
      setCurrentTestIndex(prev => prev + 1);
    }
  }, [currentTestIndex, currentTest]);

  const handleRestart = useCallback(() => {
    setCurrentTestIndex(0);
    setTestResults([]);
    setHcsCode(null);
    setProgress(0);
    setTimeElapsed(0);
    setIsPlaying(true);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-3 mb-3"
        >
          <Brain className="text-purple-500" size={36} />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{t.title}</h2>
        </motion.div>
        <p className="text-gray-400 text-base md:text-lg">
          {isComplete ? t.completeSubtitle : t.subtitle}
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        current={currentTestIndex}
        total={COGNITIVE_TESTS.length}
        tests={COGNITIVE_TESTS}
        lang={lang}
      />

      {/* Current Test */}
      <AnimatePresence mode="wait">
        {!isComplete && currentTest && (
          <CurrentTestDisplay
            key={currentTest.id}
            test={currentTest}
            progress={progress}
            timeElapsed={timeElapsed}
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* HCS Code */}
      {showCode && <HCSCodeDisplay code={hcsCode} isComplete={isComplete} lang={lang} />}

      {/* Completed Tests */}
      <CompletedTestsList
        results={testResults}
        allTests={COGNITIVE_TESTS}
        currentIndex={currentTestIndex}
        lang={lang}
      />

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        {!isComplete && (
          <>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span>{isPlaying ? t.pause : t.resume}</span>
            </button>
            <button
              onClick={handleSkip}
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg"
            >
              <SkipForward size={18} />
              <span>{t.skip}</span>
            </button>
          </>
        )}
        <button
          onClick={handleRestart}
          className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-colors"
        >
          <RotateCcw size={18} />
          <span>{t.restart}</span>
        </button>
        {mode === 'auto' && (
          <select
            value={currentSpeed}
            onChange={(e) => setCurrentSpeed(Number(e.target.value))}
            className="px-4 py-2.5 bg-gray-800 border border-gray-700 text-white rounded-lg font-medium cursor-pointer"
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        )}
      </div>

      {/* Completion Message */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-6 bg-green-500/10 rounded-xl border-2 border-green-500 text-center"
          >
            <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-green-400 mb-2">{t.authComplete}</h3>
            <p className="text-gray-300">{t.authCompleteDesc}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Note */}
      <div className="mt-6 text-center text-sm text-gray-500">{t.demoNote}</div>
    </div>
  );
}

export default CognitiveTestsFlow;
