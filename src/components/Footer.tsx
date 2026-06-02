import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
}

export default function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-natural-border pt-8" id="app-footer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
        <div>
          <h4 className="text-[10px] font-black text-natural-text uppercase tracking-widest mb-4">Theoretic Foundation</h4>
          <p className="text-[11px] text-natural-muted leading-relaxed">
            Risk calculation uses a weighted multiplicative index based on published odds ratios (OR) for perinatal asphyxia. This model prioritizes maternal age, gestational maturity, and intrapartum meconium status as primary predictors.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-natural-surface border border-natural-border">
          <div className="flex items-center gap-2 mb-2 text-rose-700">
            <ShieldAlert className="w-4 h-4" />
            <h4 className="text-[10px] font-black uppercase tracking-widest">Medical Directive</h4>
          </div>
          <p className="text-[10px] text-natural-muted leading-relaxed font-medium">
            This tool is for informational research only. Actual clinical risk during delivery is dynamic and requires continuous professional intervention. Do not base medical decisions solely on this output.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-natural-muted/60 font-bold uppercase tracking-tighter">
        <p>© 2026 CLINICAL DECISION SUPPORT • PERIRISK V2.4</p>
        <div className="flex items-center gap-4">
          {onOpenPrivacy && (
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-natural-primary transition-colors cursor-pointer font-bold uppercase tracking-tighter"
            >
              Privacy Policy
            </button>
          )}
          <span className="text-natural-muted/30">|</span>
          <p className="italic">Data source: Integrated Obstetric Outcomes Repository</p>
        </div>
      </div>
    </footer>
  );
}
