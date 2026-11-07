'use client';

import { useState, useEffect } from 'react';

interface ProgressBarProps {
  stage: number;
  sections?: number;
  currentSection?: number;
}

export function ProgressBar({ stage, sections = 3, currentSection = stage }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 전체 진행도 계산: (현재 Stage - 1 + 현재 Section / 섹션 수) / 3 * 100
    const stageProgress = (stage - 1) / 3 * 100;
    const sectionProgress = (currentSection - 1) / sections / 3 * 100;
    const total = Math.min(stageProgress + sectionProgress, 100);
    setProgress(total);
  }, [stage, sections, currentSection]);

  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase' }}>
          진행도
        </span>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)' }}>
          {Math.round(progress)}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '12px' }}>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            style={{
              padding: '8px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: 600,
              background: s <= stage ? 'var(--accent-soft)' : 'var(--card2)',
              color: s <= stage ? 'var(--accent)' : 'var(--muted)',
              borderRadius: '6px',
              border: '1px solid ' + (s <= stage ? 'var(--accent)' : 'var(--line)'),
              transition: 'all 0.3s ease',
            }}
          >
            Stage {s}
          </div>
        ))}
      </div>
    </div>
  );
}
