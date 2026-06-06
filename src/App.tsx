import { useState } from 'react';
import { getDrills } from './data/index';
import type { Drill, WorkoutMode } from './types';

export default function App() {
  const [lang, setLang] = useState<'cz' | 'en'>('cz');
  const [mode, setMode] = useState<WorkoutMode>('basketball');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [maxDuration, setMaxDuration] = useState<number>(60);
  const [workout, setWorkout] = useState<Drill[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedDrill, setExpandedDrill] = useState<string | null>(null);
  const [expandedWorkoutDrill, setExpandedWorkoutDrill] = useState<string | null>(null);

  const langCode = lang === 'cz' ? 'cs' : 'en';
  const allDrills = getDrills(langCode, mode);
  
  const filteredDrills = allDrills.filter(drill => 
    (selectedCategory === 'all' ? true : drill.category === selectedCategory) &&
    (drill.duration <= maxDuration)
  );

  const generateWorkout = () => {
    const newWorkout: Drill[] = [];
    let remainingTime = maxDuration;
    const shuffled = [...filteredDrills].sort(() => Math.random() - 0.5);

    for (const drill of shuffled) {
      if (remainingTime >= drill.duration) {
        newWorkout.push(drill);
        remainingTime -= drill.duration;
      }
      if (remainingTime <= 0) break;
    }
    setWorkout(newWorkout);
    setExpandedWorkoutDrill(null);
  };

  const categories = Array.from(new Set(allDrills.map(d => d.category)));

  return (
    <div className={theme} style={{ minHeight: '100vh', paddingBottom: '20px', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f4f4f4', color: theme === 'dark' ? '#ffffff' : '#000000' }}>
      <header className="app-header" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#fff', borderBottom: theme === 'dark' ? '1px solid #333' : '1px solid #ddd' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '800', color: theme === 'dark' ? '#fff' : '#000' }}>
          {mode === 'basketball' ? '🏀 HOOPS' : '💪 FIT'}
        </h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ fontSize: '24px', padding: '10px', borderRadius: '50%', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button onClick={() => { setMode('basketball'); setWorkout([]); }} className={mode === 'basketball' ? 'btn-primary' : 'nav-item'} style={{ fontSize: '24px', padding: '10px' }}>🏀</button>
          <button onClick={() => { setMode('fitness'); setWorkout([]); }} className={mode === 'fitness' ? 'btn-primary' : 'nav-item'} style={{ fontSize: '24px', padding: '10px' }}>💪</button>
        </div>
      </header>

      <main className="main-content" style={{ padding: '0 20px' }}>
        <section className="section-card" style={{ backgroundColor: theme === 'dark' ? '#2d2d2d' : '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #444', color: theme === 'dark' ? '#ffffff' : '#000000' }}>
          <div style={{ marginBottom: '15px' }}>
            <label className="section-title" style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
              {lang === 'cz' ? 'Délka tréninku (min):' : 'Workout duration (min):'} {maxDuration}
            </label>
            <input 
              type="range" min="5" max="60" step="5" value={maxDuration} 
              onChange={(e) => setMaxDuration(Number(e.target.value))}
              style={{ width: '100%', marginTop: '10px' }}
            />
          </div>
          
          <label className="section-title" style={{ color: theme === 'dark' ? '#e0e0e0' : '#333' }}>{lang === 'cz' ? 'Zaměření:' : 'Focus:'}</label>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px' }}>
            <button onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? 'btn-primary' : 'nav-item'}>All</button>
            {categories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={selectedCategory === cat ? 'btn-primary' : 'nav-item'} style={{ whiteSpace: 'nowrap' }}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        <button onClick={generateWorkout} className="btn-primary" style={{ width: '100%', padding: '15px', marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
          🔥 {lang === 'cz' ? 'GENEROVAT TRÉNINK' : 'GENERATE WORKOUT'}
        </button>

        {workout.length > 0 ? (
          <div style={{ marginTop: '20px' }}>
            {workout.map((drill, index) => (
              <div key={index} className="drill-card" style={{ marginBottom: '15px', padding: '15px', borderRadius: '8px', backgroundColor: theme === 'dark' ? '#2d2d2d' : '#fff', border: '1px solid #444', color: theme === 'dark' ? '#ffffff' : '#000000' }}>
                <button 
                  onClick={() => setExpandedWorkoutDrill(expandedWorkoutDrill === drill.name ? null : drill.name)}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{drill.name} {expandedWorkoutDrill === drill.name ? '▼' : '▶'}</span>
                    <span style={{ fontSize: '12px', fontWeight: 'bold', padding: '2px 6px', borderRadius: '4px', backgroundColor: theme === 'dark' ? '#444' : '#eee', color: theme === 'dark' ? '#fff' : '#333' }}>
                      {drill.category.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ fontSize: '14px', color: theme === 'dark' ? '#bbbbbb' : '#666', marginTop: '5px' }}>
                    ⏱ {drill.duration} min
                  </div>
                </button>
                {expandedWorkoutDrill === drill.name && (
                  <div style={{ padding: '10px', fontSize: '13px', backgroundColor: theme === 'dark' ? '#222' : '#f9f9f9', color: theme === 'dark' ? '#aaa' : '#666', borderRadius: '4px', marginTop: '10px' }}>
                    <p><strong>Popis:</strong> {drill.description}</p>
                    <p><strong>Série/Opakování:</strong> {drill.sets} / {drill.reps}</p>
                    {drill.steps && drill.steps.length > 0 && (
                      <>
                        <p><strong>Jak na to:</strong></p>
                        <ul>{drill.steps.map((step, i) => <li key={i}>{step}</li>)}</ul>
                      </>
                    )}
                    {drill.techniqueTips && drill.techniqueTips.length > 0 && (
                      <>
                        <p><strong>Jak to udělat správně:</strong></p>
                        <ul>{drill.techniqueTips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
                      </>
                    )}
                    {drill.commonMistakes && drill.commonMistakes.length > 0 && (
                      <>
                        <p><strong>Časté chyby:</strong></p>
                        <ul style={{ color: '#d9534f' }}>{drill.commonMistakes.map((err, i) => <li key={i}>{err}</li>)}</ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="section-card" style={{ textAlign: 'center', marginTop: '20px', padding: '20px', color: theme === 'dark' ? '#bbb' : '#666' }}>
            <p>{lang === 'cz' ? 'Vyber parametry a generuj!' : 'Set parameters and generate!'}</p>
          </div>
        )}

        <section style={{ marginTop: '40px', paddingBottom: '40px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '15px', color: theme === 'dark' ? '#fff' : '#000' }}>
            {lang === 'cz' ? 'Procházet cviky podle kategorií:' : 'Browse exercises by category:'}
          </h2>
          
          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => setExpandedCategory(expandedCategory === cat ? null : cat)}
                style={{ width: '100%', padding: '12px', textAlign: 'left', borderRadius: '6px', border: 'none', backgroundColor: theme === 'dark' ? '#333' : '#ddd', color: theme === 'dark' ? '#fff' : '#000', fontWeight: 'bold' }}
              >
                {cat.toUpperCase()} {expandedCategory === cat ? '▼' : '▶'}
              </button>
              
              {expandedCategory === cat && (
                <div style={{ marginTop: '5px', paddingLeft: '10px' }}>
                  {allDrills.filter(d => d.category === cat).map((drill, idx) => (
                    <div key={idx} style={{ marginBottom: '5px' }}>
                      <button 
                        onClick={() => setExpandedDrill(expandedDrill === drill.name ? null : drill.name)}
                        style={{ width: '100%', padding: '8px', textAlign: 'left', background: 'transparent', border: 'none', color: theme === 'dark' ? '#ccc' : '#444', textDecoration: 'underline' }}
                      >
                        {drill.name}
                      </button>
                      {expandedDrill === drill.name && (
                        <div style={{ padding: '10px', fontSize: '13px', backgroundColor: theme === 'dark' ? '#222' : '#f9f9f9', color: theme === 'dark' ? '#aaa' : '#666', borderRadius: '4px' }}>
                          <p><strong>Popis:</strong> {drill.description}</p>
                          <p><strong>Série/Opakování:</strong> {drill.sets} / {drill.reps}</p>
                          {drill.steps && drill.steps.length > 0 && (
                            <>
                              <p><strong>Jak na to:</strong></p>
                              <ul>{drill.steps.map((step, i) => <li key={i}>{step}</li>)}</ul>
                            </>
                          )}
                          {drill.techniqueTips && drill.techniqueTips.length > 0 && (
                            <>
                              <p><strong>Jak to udělat správně:</strong></p>
                              <ul>{drill.techniqueTips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
                            </>
                          )}
                          {drill.commonMistakes && drill.commonMistakes.length > 0 && (
                            <>
                              <p><strong>Časté chyby:</strong></p>
                              <ul style={{ color: '#d9534f' }}>{drill.commonMistakes.map((err, i) => <li key={i}>{err}</li>)}</ul>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
