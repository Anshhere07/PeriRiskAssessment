import React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, Stethoscope } from 'lucide-react';
import { CalculationResult } from '../types';
import { PERINATAL_ASPHYXIA_MODEL } from '../data';

interface ResultViewProps {
  result: CalculationResult;
  onReset: () => void;
}

export default function ResultView({ result, onReset }: ResultViewProps) {
  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      id="result-grid"
    >
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-natural-secondary p-8 md:p-12 rounded-[2.5rem] text-white flex flex-col items-center justify-center text-center shadow-xl shadow-natural-secondary/20 border border-natural-secondary/50" id="probability-card">
          <p className="text-[10px] uppercase tracking-widest font-black opacity-60 mb-2 font-mono">Calculated Probability</p>
          <div className="text-7xl md:text-8xl font-light mb-6 tracking-tighter">
            {(result.probability * 100).toFixed(1)}<span className="text-2xl opacity-40 ml-1">%</span>
          </div>
          <div className="px-5 py-2 bg-white/20 rounded-full text-xs font-black uppercase mb-8 backdrop-blur-sm border border-white/20" id="risk-badge">
            {result.riskLevel} Clinical Risk
          </div>
          <p className="text-sm opacity-80 max-w-sm leading-relaxed">
            Estimated likelihood of significant neonatal depression based on integrated maternal and intrapartum status.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 border border-natural-border shadow-sm animate-fade-in" id="insights-card">
          <h3 className="text-xs font-black text-natural-muted uppercase mb-6 tracking-widest flex items-center gap-2">
             <Stethoscope className="w-4 h-4" />
             Model Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-5 rounded-2xl bg-natural-bg border border-natural-border" id="insight-baseline">
                <p className="text-[10px] font-black text-natural-muted uppercase mb-1">Baseline Index</p>
                <p className="text-xl font-bold text-natural-text">{(PERINATAL_ASPHYXIA_MODEL.baseProbability * 100).toFixed(1)}%</p>
             </div>
             <div className="p-5 rounded-2xl bg-natural-bg border border-natural-border" id="insight-multiplier">
                <p className="text-[10px] font-black text-natural-muted uppercase mb-1">Risk Multiplier</p>
                <p className="text-xl font-bold text-natural-primary">{(result.probability / PERINATAL_ASPHYXIA_MODEL.baseProbability).toFixed(1)}x</p>
             </div>
          </div>
          <div className="mt-6 p-6 rounded-2xl bg-natural-surface border-l-4 border-natural-primary" id="insight-clinical-note">
             <p className="text-xs text-natural-text leading-relaxed">
               <span className="font-bold block mb-1">Clinical Note</span>
               {result.riskLevel === 'Low' ? 'Parameters suggest favorable conditions for vaginal delivery. Standard neonatal support availability is recommended.' : 
                result.riskLevel === 'Moderate' ? 'Identified risk factors suggest need for continuous FHR monitoring and experienced neonatal staff alert.' :
                'High probability of neonatal depression. Evaluate mode of delivery and ensure level III NICU availability immediately.'}
             </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-[2.5rem] p-8 border border-natural-border shadow-sm h-full flex flex-col" id="comparison-card">
          <h3 className="text-xs font-black text-natural-primary uppercase mb-6 tracking-widest">Risk Comparison</h3>
          <div className="space-y-6 flex-1">
            <div>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-bold text-natural-text font-mono uppercase tracking-tighter">Computed Vaginal Path</p>
                <p className="text-xs font-black text-natural-primary">{(result.probability * 100).toFixed(1)}%</p>
              </div>
              <div className="h-3 w-full bg-natural-surface rounded-full overflow-hidden">
                <motion.div 
                  id="result-computed-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, result.probability * 100)}%` }}
                  className="h-full bg-natural-primary rounded-full"
                />
              </div>
            </div>

            <div className="opacity-50">
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-bold text-natural-text font-mono uppercase tracking-tighter">Baseline Pop. Mean</p>
                <p className="text-xs font-black text-natural-muted">{(PERINATAL_ASPHYXIA_MODEL.baseProbability * 100).toFixed(1)}%</p>
              </div>
              <div className="h-3 w-full bg-natural-surface rounded-full overflow-hidden">
                <div className="h-full bg-natural-muted rounded-full w-[1.2%]" id="result-baseline-bar" />
              </div>
            </div>
            
            <div className="pt-8 mt-auto border-t border-natural-border" id="protocol-container">
              <h4 className="text-[10px] font-black text-natural-text uppercase mb-4 tracking-widest">Protocol Recommendations</h4>
              <ul className="text-[11px] text-natural-muted space-y-3">
                <li className="flex gap-2 items-start">• <span className="text-natural-text">{result.riskLevel === 'Low' ? 'Active management of III stage' : 'Neonatal resuscitation standby'}</span></li>
                <li className="flex gap-2 items-start">• <span className="text-natural-text">Continuous maternal-fetal assessment</span></li>
                <li className="flex gap-2 items-start">• <span className="text-natural-text">Document all intrapartum events hourly</span></li>
              </ul>
            </div>
          </div>
        </div>

        <button 
          onClick={onReset}
          id="btn-reset"
          className="w-full bg-natural-primary text-white py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-natural-secondary transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-natural-primary/20 group"
        >
          <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
          Reset Assessment
        </button>
      </div>
    </motion.div>
  );
}
