import { useState } from 'react';
import type { DrillCategory, WorkoutMode } from '../types';
import { translations, type Language } from '../translations';

interface GeneratorFormProps {
  onGenerate: (duration: number, category: DrillCategory | 'mixed', mode: WorkoutMode) => void;
  lang: Language;
}

export const GeneratorForm = ({ onGenerate, lang }: GeneratorFormProps) => {
  const [mode, setMode] = useState<WorkoutMode>('basketball');
  const [duration, setDuration] = useState(60);
  const [category, setCategory] = useState<DrillCategory | 'mixed'>('mixed');
  
  const t = translations[lang];

  const basketballCategories = ['mixed', 'shooting', 'dribbling', 'passing', 'defense', 'conditioning'] as const;
  const fitnessCategories = ['mixed', 'legs', 'arms', 'back', 'core', 'mobility'] as const;

  const currentCategories = mode === 'basketball' ? basketballCategories : fitnessCategories;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(duration, category, mode);
  };

  const handleModeChange = (newMode: WorkoutMode) => {
    setMode(newMode);
    setCategory('mixed');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="mode-selector" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button
          type="button"
          onClick={() => handleModeChange('basketball')}
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '10px',
            border: mode === 'basketball' ? '2px solid var(--primary)' : '1px solid var(--border-light)',
            background: mode === 'basketball' ? 'var(--primary)' : 'var(--bg-card)',
            color: mode === 'basketball' ? 'white' : 'var(--text-main)',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          {t.basketball}
        </button>
        <button
          type="button"
          onClick={() => handleModeChange('fitness')}
          style={{
            flex: 1,
            padding: '12px',
            borderRadius: '10px',
            border: mode === 'fitness' ? '2px solid var(--primary)' : '1px solid var(--border-light)',
            background: mode === 'fitness' ? 'var(--primary)' : 'var(--bg-card)',
            color: mode === 'fitness' ? 'white' : 'var(--text-main)',
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          {t.fitness}
        </button>
      </div>

      <div className="form-group">
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-main)' }}>
          {t.duration}: <span style={{ color: 'var(--primary)' }}>{duration} {t.minutes}</span>
        </label>
        <input
          type="range"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          min={15}
          max={120}
          step={15}
          style={{ width: '100%', accentColor: 'var(--primary)' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
          <span>15m</span>
          <span>60m</span>
          <span>120m</span>
        </div>
      </div>
      
      <div className="form-group">
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-main)' }}>
          {mode === 'basketball' ? t.skillFocus : t.bodyFocus}
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {currentCategories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: category === cat ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                background: category === cat ? 'rgba(255, 87, 34, 0.1)' : 'var(--bg-card)',
                color: category === cat ? 'var(--primary)' : 'var(--text-main)',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {t.categories[cat as keyof typeof t.categories]}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>
        {mode === 'basketball' ? t.generateTraining : t.generateWorkout} ⚡
      </button>
    </form>
  );
};
