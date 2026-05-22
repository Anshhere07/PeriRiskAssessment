import React from 'react';

export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Critical';

export interface Selections {
  [key: string]: string;
}

export interface CalculationResult {
  probability: number;
  riskLevel: RiskLevel;
}

export interface RiskOption {
  label: string;
  value: string;
  weight: number;
}

export interface RiskFactor {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  options: RiskOption[];
}

export interface PerinatalAsphyxiaModel {
  baseProbability: number;
  factors: RiskFactor[];
}
