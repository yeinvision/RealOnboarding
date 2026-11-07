'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface OnboardingData {
  newbieeName: string;
  mentorName: string;
  startDate: string;
  department: string;
  role: string;
  notes: string;
}

export default function OnboardingPrep() {
  const [data, setData] = useState<OnboardingData>({
    newbieeName: '',
    mentorName: '',
    startDate: '',
    department: '',
    role: '',
    notes: '',
  });

  const [saved, setSaved] = useState(false);
  const [newbieeName, setNewbieeName] = useState('');

  // ?˜ì´ì§€ ë¡œë“œ ???€?¥ëœ ?°ì´??ë³µì›
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding-prep');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setData(parsedData);
      setNewbieeName(parsedData.newbieeName);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('onboarding-prep', JSON.stringify(data));
    setNewbieeName(data.newbieeName);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    localStorage.removeItem('onboarding-prep');
    setData({
      newbieeName: '',
      mentorName: '',
      startDate: '',
      department: '',
      role: '',
      notes: '',
    });
    setNewbieeName('');
  };

  return (
    <div style={{ padding: '0', minHeight: '100vh', background: 'var(--bg)' }}>
      <header style={{ background: 'var(--card)', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 8px 0', color: 'var(--ink)', fontSize: '24px', fontWeight: 700 }}>
            ?‰ ?¨ë³´??ì¤€ë¹„í•˜ê¸?
          </h1>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px' }}>
            ? ì„??? ì… ë©¤ë²„???•ë³´ë¥?ë¯¸ë¦¬ ì¤€ë¹„í•˜?¸ìš”
          </p>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'start' }}>
          {/* ?…ë ¥ ??*/}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '24px',
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--ink)', fontSize: '18px' }}>
              ? ì… ?•ë³´ ?…ë ¥
            </h2>

            <div style={{ display: 'grid', gap: '16px' }}>
              {/* ? ì… ?´ë¦„ */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  ? ì… ?´ë¦„ *
                </label>
                <input
                  type="text"
                  name="newbieeName"
                  value={data.newbieeName}
                  onChange={handleChange}
                  placeholder="?? ?´ì•ˆ"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* ? ì„ ?´ë¦„ */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  ? ì„ ?´ë¦„
                </label>
                <input
                  type="text"
                  name="mentorName"
                  value={data.mentorName}
                  onChange={handleChange}
                  placeholder="?? ì¤„ë¦¬"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* ?…ì‚¬??*/}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  ?…ì‚¬??
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={data.startDate}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* ë¶€??*/}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  ë¶€??
                </label>
                <select
                  name="department"
                  value={data.department}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">? íƒ?˜ì„¸??/option>
                  <option value="?¼ì‹¤ë¦¬í…Œ?´ì…˜">?¼ì‹¤ë¦¬í…Œ?´ì…˜</option>
                  <option value="ì»¨ì„¤??>ì»¨ì„¤??/option>
                  <option value="ë¯¸ë””??>ë¯¸ë””??/option>
                  <option value="? ì‚¬??>? ì‚¬??/option>
                </select>
              </div>

              {/* ì§ì±… */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  ì§ì±…
                </label>
                <input
                  type="text"
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                  placeholder="?? ì»¨ì„¤?´íŠ¸"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* ? ì„???œë§ˆ??*/}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  ? ì„???œë§ˆ??(ë©”ëª¨)
                </label>
                <textarea
                  name="notes"
                  value={data.notes}
                  onChange={handleChange}
                  placeholder="? ì… ë©¤ë²„?ê²Œ ?´ì£¼ê³??¶ì? ë§? ??•  ?Œê°œ, ì²??„ë¡œ?íŠ¸ ?ˆë‚´ ??.."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    minHeight: '100px',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* ë²„íŠ¼ */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                <button
                  onClick={handleSave}
                  style={{
                    padding: '12px 16px',
                    background: 'var(--accent)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {saved ? '???€?¥ë¨' : '?’¾ ?€?¥í•˜ê¸?}
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    padding: '12px 16px',
                    background: 'var(--card2)',
                    color: 'var(--muted)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  ?”„ ì´ˆê¸°??
                </button>
              </div>
            </div>
          </div>

          {/* ë¯¸ë¦¬ë³´ê¸° */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--card2) 0%, var(--card) 100%)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '40px 24px',
              textAlign: 'center',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ marginBottom: '24px', fontSize: '48px' }}>?‘‹</div>

            {newbieeName ? (
              <>
                <h2 style={{ margin: '0 0 8px 0', color: 'var(--accent)', fontSize: '28px', fontWeight: 700 }}>
                  {newbieeName}??
                </h2>
                <p style={{ margin: '0 0 16px 0', color: 'var(--ink)', fontSize: '16px', fontWeight: 500 }}>
                  RealWork???¤ì‹  ê²ƒì„ ?˜ì˜?©ë‹ˆ?? ?‰
                </p>

                {data.mentorName && (
                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <p style={{ margin: '0 0 8px 0', color: 'var(--muted)', fontSize: '12px' }}>? ì„:</p>
                    <p style={{ margin: 0, color: 'var(--ink)', fontSize: '14px', fontWeight: 600 }}>
                      {data.mentorName}
                    </p>
                  </div>
                )}

                {data.notes && (
                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--line)',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    <p style={{ margin: '0 0 8px 0', color: 'var(--muted)', fontSize: '12px' }}>? ì„???œë§ˆ??</p>
                    <p
                      style={{
                        margin: 0,
                        color: 'var(--ink)',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {data.notes}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 style={{ margin: '0 0 16px 0', color: 'var(--muted)', fontSize: '18px' }}>
                  ? ì… ?´ë¦„???…ë ¥?˜ë©´ ë¯¸ë¦¬ë³´ê¸°ê°€ ?˜í??©ë‹ˆ??
                </h2>
                <p style={{ margin: 0, color: 'var(--faint)', fontSize: '13px' }}>
                  ì¢Œì¸¡?ì„œ ? ì… ?•ë³´ë¥??…ë ¥?????€?¥í•´ì£¼ì„¸??
                </p>
              </>
            )}
          </div>
        </div>

        {/* ?ˆë‚´ ë©”ì‹œì§€ */}
        <div
          style={{
            marginTop: '32px',
            padding: '16px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent)',
            borderRadius: '8px',
            color: 'var(--ink)',
          }}
        >
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
            ?’¡ <strong>??</strong> ???•ë³´??ë¸Œë¼?°ì????€?¥ë˜ë©? ? ì…???¨ë³´?©ì„ ?œì‘????ê°œì¸?”ëœ ?¸ì‚¬ë§ì„ ë³´ê²Œ ?©ë‹ˆ?? 
            ?•ë³´ë¥??€?¥í•œ ??? ì…?ê²Œ ???˜ì´ì§€??ë§í¬ë¥?ê³µìœ ?˜ì„¸??
          </p>
        </div>

        {/* ?¤ë¡œê°€ê¸?*/}
        <div style={{ marginTop: '24px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            ???ˆìœ¼ë¡??Œì•„ê°€ê¸?
          </Link>
        </div>
      </main>
    </div>
  );
}
