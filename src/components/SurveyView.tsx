import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { RiskFactor } from '../types';

interface SurveyViewProps {
  step: number;
  totalSteps: number;
  currentFactor: RiskFactor;
  onSelect: (value: string) => void;
}

export default function SurveyView({ step, totalSteps, currentFactor, onSelect }: SurveyViewProps) {
  const IconComponent = currentFactor.icon;

  return (
    <motion.div
      key="survey"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-[2rem] shadow-xl shadow-natural-border/40 border border-natural-border overflow-hidden"
      id="survey-card"
    >
      {/* Progress Bar */}
      <div className="h-2 bg-natural-surface w-full relative" id="progressbar-container">
        <motion.div 
          id="progressbar-fill"
          className="absolute top-0 left-0 h-full bg-natural-primary"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3 text-natural-primary">
            <div className="p-2.5 bg-natural-surface rounded-xl border border-natural-border">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest opacity-80">Phase {step + 1} of {totalSteps}</span>
          </div>
          <div className="px-3 py-1.5 bg-natural-surface border border-natural-border rounded-full text-[10px] font-black text-natural-muted uppercase tracking-tighter">
            Vaginal Delivery Model v2.4.1
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-natural-text mb-3 leading-tight tracking-tight">
          {currentFactor.label}
        </h2>
        <p className="text-natural-muted mb-10 text-lg leading-relaxed max-w-2xl">
          {currentFactor.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentFactor.options.map((option, idx) => (
            <motion.button
              key={option.value}
              id={`opt-${currentFactor.id}-${option.value}`}
              whileHover={{ y: -4, borderColor: "var(--color-natural-primary)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onSelect(option.value)}
              className="group relative flex flex-col items-start p-6 rounded-[1.5rem] border-2 border-natural-border bg-white hover:shadow-xl hover:shadow-natural-primary/5 transition-all text-left cursor-pointer"
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-lg font-bold text-natural-text group-hover:text-natural-primary transition-colors">
                  {option.label}
                </span>
                <div className="p-1 px-2 rounded-lg bg-natural-surface border border-natural-border group-hover:bg-natural-primary group-hover:border-natural-primary transition-colors">
                   <ChevronRight className="w-4 h-4 text-natural-muted group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
