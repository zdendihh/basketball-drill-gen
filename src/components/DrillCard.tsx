import { useState } from 'react';
import type { Drill } from '../types';
import { translations, type Language } from '../translations';

interface DrillCardProps {
  drill: Drill;
  lang: Language;
}

export const DrillCard = ({ drill, lang }: DrillCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const t = translations[lang];

  return (
    <div className={`drill-card ${showDetails ? 'expanded' : ''}`}>
      <div className="drill-meta">
        <span className={`badge badge-${drill.category}`}>{t.categories[drill.category as keyof typeof t.categories]}</span>
        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 'bold' }}>
          {drill.intensity} {t.intensity}
        </span>
      </div>
      
      <h3 onClick={() => setShowDetails(!showDetails)} style={{ cursor: 'pointer' }}>
        {drill.name} {showDetails ? '▾' : '▸'}
      </h3>
      
      {drill.sets && drill.reps && (
        <div className="volume-info" style={{ 
          background: 'var(--primary-bg, rgba(255, 87, 34, 0.1))', 
          color: 'var(--primary)', 
          padding: '6px 12px', 
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '700',
          marginBottom: '10px',
          display: 'inline-block'
        }}>
          {drill.sets} {t.sets} × {drill.reps}
        </div>
      )}

      <p className="description" style={{ margin: '0 0 10px 0', fontSize: '14px', color: 'var(--text-muted)' }}>
        {drill.description}
      </p>
      
      {showDetails && (
        <div className="drill-details" style={{ marginBottom: '15px' }}>
          <div className="detail-section">
            <h4 style={{ color: 'var(--primary)', fontSize: '12px', marginBottom: '5px' }}>{t.steps}</h4>
            <ol style={{ paddingLeft: '18px', margin: 0, fontSize: '13px' }}>
              {drill.steps.map((step, i) => <li key={i} style={{ marginBottom: '4px' }}>{step}</li>)}
            </ol>
          </div>
          <div className="detail-section" style={{ marginTop: '12px' }}>
            <h4 style={{ color: 'var(--primary)', fontSize: '12px', marginBottom: '5px' }}>{t.tips}</h4>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13px', listStyleType: 'square' }}>
              {drill.tips.map((tip, i) => <li key={i} style={{ marginBottom: '2px' }}>{tip}</li>)}
            </ul>
          </div>
        </div>
      )}

      <div className="drill-footer-stats">
        <span>⏱️ {drill.duration} min</span>
        <span>👥 {drill.playersNeeded}+ {t.players}</span>
      </div>
    </div>
  );
};
