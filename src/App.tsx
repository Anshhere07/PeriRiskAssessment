/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
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
    </div>
  );
}
