'use client';

import { useState } from 'react';

interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  explanation?: string;
}

export function Quiz({ question, options, explanation }: QuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setShowResult(true);
  };

  const isCorrect = selectedId && options.find(o => o.id === selectedId)?.isCorrect;
  const selectedOption = selectedId && options.find(o => o.id === selectedId);

  const handleReset = () => {
    setSelectedId(null);
    setShowResult(false);
  };

  return (
    <div
      style={{
        padding: '24px',
        background: 'var(--card)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius)',
        marginBottom: '20px',
      }}
    >
      <h4 style={{ marginTop: 0, marginBottom: '16px', color: 'var(--ink)' }}>
        ❓ {question}
      </h4>

      <div style={{ display: 'grid', gap: '8px', marginBottom: '16px' }}>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={showResult}
            style={{
              padding: '12px 16px',
              textAlign: 'left',
              background:
                showResult && selectedId === option.id
                  ? isCorrect
                    ? 'var(--accent-soft)'
                    : '#ff6b6b22'
                  : 'var(--card2)',
              border:
                showResult && selectedId === option.id
                  ? `2px solid ${isCorrect ? 'var(--accent)' : '#ff6b6b'}`
                  : '1px solid var(--line)',
              color: 'var(--ink)',
              borderRadius: '8px',
              cursor: showResult ? 'default' : 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              opacity: showResult && selectedId !== option.id ? 0.5 : 1,
            }}
          >
            <input
              type="radio"
              name="quiz"
              checked={selectedId === option.id}
              onChange={() => {}}
              disabled={showResult}
              style={{ marginRight: '8px', cursor: 'pointer' }}
            />
            {option.text}
            {showResult && selectedId === option.id && (
              <span style={{ marginLeft: '8px', fontWeight: 600 }}>
                {isCorrect ? '✅ 정답!' : '❌ 오답'}
              </span>
            )}
            {showResult && option.isCorrect && selectedId !== option.id && (
              <span style={{ marginLeft: '8px', fontWeight: 600, color: 'var(--accent)' }}>
                ✅ 정답
              </span>
            )}
          </button>
        ))}
      </div>

      {showResult && (
        <div>
          {explanation && (
            <div
              style={{
                padding: '12px',
                background: isCorrect ? 'var(--accent-soft)' : '#ff6b6b22',
                border: `1px solid ${isCorrect ? 'var(--accent)' : '#ff6b6b'}`,
                borderRadius: '8px',
                marginBottom: '12px',
                fontSize: '13px',
                color: 'var(--muted)',
                lineHeight: '1.6',
              }}
            >
              <strong style={{ color: isCorrect ? 'var(--accent)' : '#ff6b6b' }}>
                설명:
              </strong>
              {' '}
              {explanation}
            </div>
          )}

          <button
            onClick={handleReset}
            style={{
              padding: '8px 12px',
              background: 'var(--card2)',
              border: '1px solid var(--line)',
              color: 'var(--muted)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            다시 풀기
          </button>
        </div>
      )}
    </div>
  );
}
