export type DrillCategory = 
  | 'shooting' 
  | 'dribbling' 
  | 'defense' 
  | 'passing' 
  | 'conditioning' 
  | 'rebounding'
  | 'legs'
  | 'arms'
  | 'back'
  | 'core'
  | 'mobility'
  | 'stability';

export type Intensity = 'low' | 'medium' | 'high';
export type WorkoutMode = 'basketball' | 'fitness';

export interface Drill {
  id: string;
  name: string;
  description: string;
  steps: string[];
  tips: string[];
  techniqueTips?: string[];
  commonMistakes?: string[];
  category: DrillCategory;
  duration: number; // in minutes
  intensity: Intensity;
  playersNeeded: number;
  equipment: string[];
  sets?: number;
  reps?: string; // e.g., "10-12", "45s", "8 per leg"
  imageUrl?: string;
  videoUrl?: string;
}

export interface PracticePhase {
  name: string;
  drills: Drill[];
  duration: number;
}

export interface PracticePlan {
  id: string;
  name: string;
  date: string;
  phases: PracticePhase[];
  totalDuration: number;
}
