/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Activity, Award, Scale, HelpCircle, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
}

export default function PrivacyPolicyPage({ onNavigateHome }: PrivacyPolicyPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen bg-natural-bg font-sans text-natural-text py-10 px-4 md:px-8"
      id="privacy-policy-page"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Back Button & Header */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-natural-primary hover:text-natural-secondary transition-colors cursor-pointer self-start group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Assessment
          </button>
          
          <div className="flex items-center gap-4 mt-2">
            <div className="p-3 bg-natural-primary/10 rounded-2xl text-natural-primary border border-natural-border shadow-sm">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-natural-text tracking-tight">Privacy Policy & Security Standards</h1>
              <p className="text-xs text-natural-muted font-bold uppercase tracking-wider mt-1">Play Store & Healthcare Compliance</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-natural-border" />

        {/* Content Body */}
        <div className="bg-white rounded-[2.5rem] border border-natural-border p-6 md:p-10 shadow-xl shadow-natural-primary/5 space-y-8 text-xs text-natural-muted leading-relaxed">
          
          {/* Summary Alert */}
          <div className="p-6 bg-natural-surface border border-natural-border rounded-3xl flex gap-4 items-start">
            <Lock className="w-6 h-6 text-natural-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-extrabold text-natural-text mb-1.5 text-xs uppercase tracking-wider">100% On-Device & Zero Data Collection</h4>
              <p className="text-[11px] leading-relaxed">
                This application operates entirely offline. All maternal calculations, clinical survey values, and risk weight adjustments are processed locally on your physical device. We **never** collect, store, transmit, or share any personal health data, analytical results, or location information.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-natural-text text-sm flex items-center gap-2">
              <Activity className="w-5 h-5 text-natural-primary" />
              1. Healthcare Information & HIPAA Alignment
            </h4>
            <p className="pl-7 text-[11px]">
              In alignment with the Health Insurance Portability and Accountability Act (HIPAA) standards for Protected Health Information (PHI):
            </p>
            <ul className="list-disc pl-12 space-y-2 text-[11px]">
              <li><strong>No Identifiable Data:</strong> We do not ask for, capture, or compile names, medical record numbers, dates of birth, or email addresses.</li>
              <li><strong>No Cloud Processing:</strong> Data submitted in the risk calculator is volatile (stored in temporary application memory) and is instantly wiped when the survey is reset, browser is closed, or app is exited.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-natural-text text-sm flex items-center gap-2">
              <Award className="w-5 h-5 text-natural-primary" />
              2. Play Store Developer Policy Compliance
            </h4>
            <p className="pl-7 text-[11px]">
              This policy satisfies Google Play Store's developer requirements for prominent disclosure:
            </p>
            <ul className="list-disc pl-12 space-y-2 text-[11px]">
              <li><strong>Permissions:</strong> The application requires zero sensitive operating system permissions (e.g., location, contacts, phone state, camera, or file storage access).</li>
              <li><strong>Children's Privacy:</strong> The application does not collect information from minors or any age groups. It is strictly designated for healthcare professionals and clinical educational research.</li>
              <li><strong>No Spyware or Tracking:</strong> There are no analytics engines, trackers, cookies, advertising frameworks, or telemetry packages embedded in this application.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-natural-text text-sm flex items-center gap-2">
              <Scale className="w-5 h-5 text-natural-primary" />
              3. Non-Diagnostic Medical Disclaimer
            </h4>
            <p className="pl-7 text-[11px]">
              <strong>Disclaimer for Clinical Decision Support:</strong> This tool utilizes a theoretic multiplicative probability index based on obstetric research odds ratios for Perinatal Asphyxia. 
            </p>
            <p className="pl-7 font-medium text-natural-text/80 text-[11px]">
              It is intended solely for clinical educational support and research. It does **not** constitute professional medical diagnosis, diagnostic screening, or direct active care management. Clinical decisions must rely on full professional evaluation, direct fetal monitoring, and continuous clinical oversight during labor.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-natural-text text-sm flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-natural-primary" />
              4. Policy Updates & Support
            </h4>
            <p className="pl-7 text-[11px]">
              As this app performs no data collection or tracking, this policy remains stable and simple. Any future updates required by Google Play Store guidelines will be published in this section directly in the app.
            </p>
            <p className="pl-7 text-[11px] italic">
              If you have questions regarding this offline architecture or clinical math model, please reach out to developer support at: <span className="font-semibold text-natural-primary">support@peririsk.org</span>
            </p>
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center text-[10px] text-natural-muted/60 uppercase font-black tracking-widest pt-4">
          © 2026 CLINICAL DECISION SUPPORT • PERIRISK V2.4
        </div>

      </div>
    </motion.div>
  );
}
