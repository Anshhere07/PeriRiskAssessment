/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, Shield, Lock, Activity, Award, Scale, HelpCircle } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="privacy-policy-overlay">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-natural-text/20 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-[2rem] border border-natural-border shadow-2xl overflow-hidden flex flex-col z-10"
        id="privacy-policy-modal"
      >
        {/* Header */}
        <div className="p-6 border-b border-natural-border flex justify-between items-center bg-natural-surface/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-natural-primary/10 rounded-xl text-natural-primary">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-natural-text">Privacy Policy & Security Standards</h3>
              <p className="text-[10px] text-natural-muted font-semibold uppercase tracking-wider">Play Store & Healthcare Compliance</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-natural-surface rounded-xl text-natural-muted hover:text-natural-text transition-all"
            aria-label="Close privacy policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin text-xs text-natural-muted leading-relaxed">
          
          {/* Summary Box */}
          <div className="p-5 bg-natural-surface/50 border border-natural-border rounded-2xl flex gap-3 items-start">
            <Lock className="w-5 h-5 text-natural-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-natural-text mb-1 text-[11px] uppercase tracking-wider">100% On-Device & Zero Data Collection</h4>
              <p className="text-[10px] leading-relaxed">
                This app operates entirely offline. All maternal calculations, clinical survey values, and risk weight adjustments are processed locally on your physical device. We **never** collect, store, transmit, or share any personal health data, analytical results, or location information.
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-5">
            
            {/* Section 1 */}
            <div className="space-y-2">
              <h4 className="font-bold text-natural-text text-[11px] flex items-center gap-2">
                <Activity className="w-4 h-4 text-natural-primary" />
                1. Healthcare Information & HIPAA Alignment
              </h4>
              <p className="pl-6">
                In alignment with the Health Insurance Portability and Accountability Act (HIPAA) standards for Protected Health Information (PHI):
              </p>
              <ul className="list-disc pl-10 space-y-1 text-[11px]">
                <li><strong>No Identifiable Data:</strong> We do not ask for, capture, or compile names, medical record numbers, dates of birth, or email addresses.</li>
                <li><strong>No Plural Cloud Processing:</strong> Data submitted in the risk calculator is volatile (stored in temporary application memory) and is instantly wiped when the survey is reset or closed.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-2">
              <h4 className="font-bold text-natural-text text-[11px] flex items-center gap-2">
                <Award className="w-4 h-4 text-natural-primary" />
                2. Play Store Developer Policy Compliance
              </h4>
              <p className="pl-6">
                This policy satisfies Google Play Store's developer requirements for prominent disclosure:
              </p>
              <ul className="list-disc pl-10 space-y-1 text-[11px]">
                <li><strong>Permissions:</strong> The application requires zero sensitive operating system permissions (e.g., location, contacts, phone state, camera, or file storage access).</li>
                <li><strong>Children's Privacy:</strong> The application does not collect information from minors or any age groups. It is strictly designated for healthcare professionals and clinical educational research.</li>
                <li><strong>No Spyware or Tracking:</strong> There are no analytics engines, trackers, cookies, advertising frameworks, or telemetry packages embedded in this application.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-2">
              <h4 className="font-bold text-natural-text text-[11px] flex items-center gap-2">
                <Scale className="w-4 h-4 text-natural-primary" />
                3. Non-Diagnostic Medical Disclaimer
              </h4>
              <p className="pl-6">
                <strong>Disclaimer for Clinical Decision Support:</strong> This tool utilizes a theoretic multiplicative probability index based on obstetric research odds ratios for Perinatal Asphyxia. 
              </p>
              <p className="pl-6 font-medium text-natural-text/80 text-[11px]">
                It is intended solely for clinical educational support and research. It does **not** constitute professional medical diagnosis, diagnostic screening, or direct active care management. Clinical decisions must rely on full professional evaluation, direct fetal monitoring, and continuous clinical oversight during labor.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2">
              <h4 className="font-bold text-natural-text text-[11px] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-natural-primary" />
                4. Policy Updates & Support
              </h4>
              <p className="pl-6">
                As this app performs no data collection or tracking, this policy remains stable and simple. Any future updates required by Google Play Store guidelines will be published in this section directly in the app.
              </p>
              <p className="pl-6 text-[10px] italic">
                If you have questions regarding this offline architecture or clinical math model, please reach out to developer support at: <span className="font-semibold text-natural-primary">support@peririsk.org</span>
              </p>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-natural-border bg-natural-surface/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-natural-primary hover:bg-natural-secondary text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-natural-primary/10 transition-all cursor-pointer"
          >
            I Acknowledge
          </button>
        </div>
      </motion.div>
    </div>
  );
}
