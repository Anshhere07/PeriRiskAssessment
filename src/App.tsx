/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Capacitor } from '@capacitor/core';
import { Smartphone, X, Download } from 'lucide-react';
import { PERINATAL_ASPHYXIA_MODEL } from './data';
import { Selections, CalculationResult, RiskLevel } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import SurveyView from './components/SurveyView';
import ResultView from './components/ResultView';

export default function App() {
  const [selections, setSelections] = useState<Selections>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [step, setStep] = useState(0);

  const [showApkToast, setShowApkToast] = useState(() => {
    try {
      return !Capacitor.isNativePlatform();
    } catch {
      return false;
    }
  });

  const handleDismissToast = () => {
    setShowApkToast(false);
  };

  const totalSteps = PERINATAL_ASPHYXIA_MODEL.factors.length;
  const currentFactor = PERINATAL_ASPHYXIA_MODEL.factors[step];

  const handleSelect = (value: string) => {
    const newSelections = { ...selections, [currentFactor.id]: value };
    setSelections(newSelections);
    
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newSelections);
    }
  };

  const calculateResult = (finalSelections: Selections) => {
    let combinedWeight = 1.0;
    
    PERINATAL_ASPHYXIA_MODEL.factors.forEach(factor => {
      const selectedValue = finalSelections[factor.id];
      const option = factor.options.find(opt => opt.value === selectedValue);
      if (option) {
        combinedWeight *= option.weight;
      }
    });

    const probability = Math.min(0.98, PERINATAL_ASPHYXIA_MODEL.baseProbability * combinedWeight);
    
    let riskLevel: RiskLevel = 'Low';
    if (probability > 0.25) riskLevel = 'Critical';
    else if (probability > 0.12) riskLevel = 'High';
    else if (probability > 0.04) riskLevel = 'Moderate';

    setResult({ probability, riskLevel });
  };

  const reset = () => {
    setSelections({});
    setResult(null);
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-natural-bg font-sans text-natural-text overflow-x-hidden selection:bg-natural-primary/20" id="main-container">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Header />

        <main className="relative" id="main-content">
          <AnimatePresence mode="wait">
            {!result ? (
              <SurveyView 
                step={step}
                totalSteps={totalSteps}
                currentFactor={currentFactor}
                onSelect={handleSelect}
              />
            ) : (
              <ResultView 
                result={result}
                onReset={reset}
              />
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>

      <AnimatePresence>
        {showApkToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 left-6 md:left-auto md:w-96 z-50 bg-white/90 backdrop-blur-md p-5 rounded-[1.8rem] border border-natural-border shadow-2xl flex gap-4 items-start"
            id="apk-download-toast"
          >
            <div className="p-3 bg-natural-surface rounded-2xl border border-natural-border text-natural-primary">
              <Smartphone className="w-6 h-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-natural-text mb-1 flex items-center gap-2">
                Download Android App
                <span className="px-2 py-0.5 bg-natural-primary/10 text-[9px] text-natural-primary font-black uppercase rounded-full tracking-wider">APK</span>
              </h4>
              <p className="text-[11px] text-natural-muted leading-relaxed mb-3">
                Get an optimized, immersive mobile experience for planned vaginal delivery risk monitoring.
              </p>
              
              <div className="flex items-center gap-2">
                <a 
                  href="/peririsk.apk" 
                  download="peririsk-assessment.apk"
                  onClick={handleDismissToast}
                  className="flex items-center gap-2 px-4 py-2 bg-natural-primary text-white rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-natural-secondary transition-all shadow-md shadow-natural-primary/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download APK
                </a>
                <button 
                  onClick={handleDismissToast}
                  className="px-3 py-2 text-[10px] font-black text-natural-muted uppercase tracking-wider hover:text-natural-text transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>

            <button 
              onClick={handleDismissToast}
              className="text-natural-muted hover:text-natural-text p-1 hover:bg-natural-surface rounded-lg transition-all absolute top-4 right-4"
              aria-label="Close download prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
