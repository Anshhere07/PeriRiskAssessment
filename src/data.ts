import { User, Calendar, Users, Droplet, HeartPulse, Activity, Clock, TrendingDown } from 'lucide-react';
import { PerinatalAsphyxiaModel } from './types';

export const PERINATAL_ASPHYXIA_MODEL: PerinatalAsphyxiaModel = {
  baseProbability: 0.012, // 1.2% baseline population mean
  factors: [
    {
      id: 'maternalAge',
      label: 'Maternal Age',
      description: 'Extremes of maternal age are associated with increased risk.',
      icon: User,
      options: [
        { label: '< 18 years', value: 'ideal', weight: 1.0 },
        { label: '18 - 35 years', value: 'young', weight: 1.3 },
        { label: '> 35 years', value: 'very_advanced', weight: 1.9 }
      ]
    },
    {
      id: 'gestationalMaturity',
      label: 'Gestational Age',
      description: 'Early preterm and post-term pregnancies are high-risk factors.',
      icon: Calendar,
      options: [
        { label: 'Preterm (<37 weeks)', value: 'term', weight: 1.0 },
        { label: 'Term (37 - 41 weeks)', value: 'post_term', weight: 1.6 },
        { label: 'Post-term (>42 weeks)', value: 'late_preterm', weight: 7.2 },
      ]
    },
    {
      id: 'parity',
      label: 'Parity',
      description: 'First-time deliveries (nulliparity) often involve longer labor stages.',
      icon: Users,
      options: [
        { label: 'First Delivery', value: 'first', weight: 1.3 },
        { label: '2+ Deliveries', value: 'multiple', weight: 1.0 }
      ]
    },
    {
      id: 'amnioticFluid',
      label: 'Amniotic Fluid Appearance',
      description: 'Meconium staining is a major indicator of fetal distress.',
      icon: Droplet,
      options: [
        { label: 'Clear / Normal', value: 'clear_normal', weight: 1.0 },
        { label: 'Light Meconium Staining', value: 'light_meconium', weight: 1.5 },
        { label: 'Heavy / Thick Meconium', value: 'heavy_thick_meconium', weight: 3.0 }
      ]
    },
    {
      id: 'maternalHypertension',
      label: 'Maternal Hypertension',
      description: 'Pre-eclampsia significantly increases risk of hypoxia.',
      icon: HeartPulse,
      options: [
        { label: 'Absent', value: 'absent', weight: 1.0 },
        { label: 'Present / Pre-eclampsia', value: 'present', weight: 2.2 }
      ]
    },
    {
      id: 'gestationalDiabetes',
      label: 'Gestational Diabetes',
      description: 'Metabolic factors can influence fetal oxygen reserves.',
      icon: Activity,
      options: [
        { label: 'Absent', value: 'absent', weight: 1.0 },
        { label: 'Present', value: 'present', weight: 1.4 }
      ]
    },
    {
      id: 'laborDuration',
      label: 'Labor Duration',
      description: 'Prolonged second stage (>2h) is a critical factor for asphyxia.',
      icon: Clock,
      options: [
        { label: 'Normal Progress', value: 'normal', weight: 1.0 },
        { label: 'Prolonged 2nd Stage', value: 'prolonged', weight: 2.3 }
      ]
    },
    {
      id: 'fetalGrowth',
      label: 'Fetal Growth (IUGR)',
      description: 'Growth restricted fetuses have lower tolerance for labor stress.',
      icon: TrendingDown,
      options: [
        { label: 'Normal Growth', value: 'normal', weight: 1.0 },
        { label: 'Detected IUGR', value: 'iugr', weight: 2.6 }
      ]
    }
  ]
};
