import React from 'react';
import { Baby } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="mb-12 flex flex-col items-center" id="app-header">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="w-12 h-12 rounded-2xl bg-natural-primary flex items-center justify-center shadow-lg shadow-natural-primary/20">
          <Baby className="w-7 h-7 text-white" />
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-bold text-natural-text leading-tight tracking-tight">PeriRisk Assessment</h1>
          <p className="text-[10px] text-natural-primary uppercase tracking-widest font-black leading-none">Clinical Decision Support</p>
        </div>
      </motion.div>
      <p className="text-natural-muted max-w-lg mx-auto text-center text-sm leading-relaxed">
        Estimating probability of perinatal asphyxia for planned vaginal delivery based on multivariate clinical indicators.
      </p>
    </header>
  );
}
