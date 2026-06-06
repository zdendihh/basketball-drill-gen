import { DRILLS } from './drills';
import { DRILLS_CS } from './drills_cs';
import { FITNESS_EXERCISES as FITNESS_DRILLS } from './fitness';
import { FITNESS_EXERCISES_CS as FITNESS_DRILLS_CS } from './fitness_cs';
import type { Language } from '../translations';
import type { Drill, WorkoutMode } from '../types';

export const getDrills = (lang: Language, mode: WorkoutMode): Drill[] => {
  if (mode === 'basketball') {
    return lang === 'cs' ? DRILLS_CS : DRILLS;
  } else {
    return lang === 'cs' ? FITNESS_DRILLS_CS : FITNESS_DRILLS;
  }
};
