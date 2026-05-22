import { User, Calendar, Users, Droplet, HeartPulse, Activity, Clock, TrendingDown } from 'lucide-react';
import { PerinatalAsphyxiaModel } from './types';

export const PERINATAL_ASPHYXIA_MODEL: PerinatalAsphyxiaModel = {
  baseProbability: 0.012, // 1.2% baseline population mean
  factors: [
    {
      id: 'maternalAge',
      label: 'Maternal Age',
      description: 'Age of the mother at time of delivery. Clinical extremes (very young or advanced maternal age) increase neonatal risk.',
      icon: User,
      options: [
        { label: 'Ideal Range (20 - 34 years)', value: 'ideal', weight: 1.0 },
        { label: 'Adolescent (< 20 years)', value: 'young', weight: 1.3 },
        { label: 'Advanced Age (35 - 39 years)', value: 'advanced', weight: 1.4 },
        { label: 'Very Advanced Age (≥ 40 years)', value: 'very_advanced', weight: 1.9 }
      ]
    },
    {
      id: 'gestationalMaturity',
      label: 'Gestational Age',
      description: 'Completed weeks of gestation. Deviation from term (37-41 weeks) correlates with higher rate of asphyxia complications.',
      icon: Calendar,
      options: [
        { label: 'Term (37 - 41 weeks)', value: 'term', weight: 1.0 },
        { label: 'Post-term (≥ 42 weeks)', value: 'post_term', weight: 1.6 },
        { label: 'Late Preterm (34 - 36 weeks)', value: 'late_preterm', weight: 2.1 },
        { label: 'Moderate Preterm (32 - 33 weeks)', value: 'moderate_preterm', weight: 3.8 },
        { label: 'Early Preterm (< 32 weeks)', value: 'early_preterm', weight: 7.2 }
      ]
    },
    {
      id: 'parity',
      label: 'Parity',
      description: 'Number of prior births. Nulliparous mothers (first delivery) have a statistically higher risk of labor dystocia and asphyxia complications.',
      icon: Users,
      options: [
        { label: 'First Delivery', value: 'first', weight: 1.3 },
        { label: '2+ Deliveries', value: 'multiple', weight: 1.0 }
      ]
    },
    {
      id: 'amnioticFluid',
      label: 'Amniotic Fluid Appearance',
      description: 'Consistency of meconium-stained amniotic fluid. Heavy/thick meconium signifies prolonged intrapartum distress.',
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
      description: 'Presence of hypertensive disorders, including gestational hypertension or pre-eclampsia, which restrict blood flow.',
      icon: HeartPulse,
      options: [
        { label: 'Absent', value: 'absent', weight: 1.0 },
        { label: 'Present / Pre-eclampsia', value: 'present', weight: 2.2 }
      ]
    },
    {
      id: 'gestationalDiabetes',
      label: 'Gestational Diabetes',
      description: 'Maternal glucose intolerance during pregnancy, associated with macrosomia and metabolic vulnerabilities.',
      icon: Activity,
      options: [
        { label: 'Absent', value: 'absent', weight: 1.0 },
        { label: 'Present', value: 'present', weight: 1.4 }
      ]
    },
    {
      id: 'laborDuration',
      label: 'Labor Duration',
      description: 'Progression of active labor. A prolonged second stage significantly elevates mechanical stress and fetal hypoxia risk.',
      icon: Clock,
      options: [
        { label: 'Normal Progress', value: 'normal', weight: 1.0 },
        { label: 'Prolonged 2nd Stage', value: 'prolonged', weight: 2.3 }
      ]
    },
    {
      id: 'fetalGrowth',
      label: 'Fetal Growth (IUGR)',
      description: 'Intrauterine Growth Restriction status. IUGR fetuses have lower placental reserves and tolerate labor contractions poorly.',
      icon: TrendingDown,
      options: [
        { label: 'Normal Growth', value: 'normal', weight: 1.0 },
        { label: 'Detected IUGR', value: 'iugr', weight: 2.6 }
      ]
    }
  ]
};
