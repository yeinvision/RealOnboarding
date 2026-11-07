'use client';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useEffect, useState } from 'react';

export default function Home() {
  const [newbieeName, setNewbieeName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedData = localStorage.getItem('onboarding-prep');
    if (savedData) {
      const data = JSON.parse(savedData);
      setNewbieeName(data.newbieeName);
    }
  }, []);

  const stages = [
    {
      number: 1,
      title: '리얼워크 멤버로 시작하기',
      description: '회사 소개, 팀 구성, 핵심 가치 학습',
      duration: '1.5시간',
      href: '/stage-1',
    },
    {
      number: 2,
      title: '프로젝트와 일하는 방식',
      description: '4가지 프로젝트 유형, 워크플로우, 도구 학습',
      duration: '1.5시간',
      href: '/stage-2',
    },
    {
      number: 3,
      title: '나의 첫 프로젝트',
      description: 'PL/FT 역할, SOP, 실제 프로젝트 진행 배우기',
      duration: '1.5시간',
      href: '/stage-3',
    },
  ];

  if (!mounted) return null;

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <section style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              {newbieeName ? (
                <>
                  <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', color: 'var(--accent)' }}>
                    👋 {newbieeName}님 환영합니다!
                  </h1>
                  <p style={{ fontSize: '18px', color: 'var(--ink)', marginBottom: '24px' }}>
                    RealWork에 오신 것을 환영합니다! 🎉
                  </p>
                  <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: '24px' }}>
                    3개의 스테이지(총 4-5시간)로 신입으로서 필요한 모든 것을 배웁니다.
                  </p>
                </>
              ) : (
                <>
                  <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', color: 'var(--ink)' }}>
                    🚀 RealWork에 오신 것을 환영합니다!
                  </h1>
                  <p style={{ fontSize: '20px', color: 'var(--muted)', marginBottom: '24px' }}>
                    3개의 스테이지(총 4-5시간)로 신입으로서 필요한 모든 것을 배웁니다.
                  </p>
                </>
              )}
            </div>

            <div className="stages-grid">
              {stages.map((stage) => (
                <Link key={stage.number} href={stage.href}>
                  <div className="stage-card">
                    <div className="stage-header">
                      <span className="stage-number">Stage {stage.number}</span>
                      <span className="stage-duration">{stage.duration}</span>
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}>
                      {stage.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                      {stage.description}
                    </p>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)' }}>
                      <span>시작하기</span>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--card)' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px', color: 'var(--ink)' }}>
                추가 자료
              </h2>
              <div className="supplementary-grid">
                <Link href="/faq">
                  <div className="supp-card">
                    <div className="supp-icon">❓</div>
                    <h3>FAQ</h3>
                    <p>자주 묻는 질문과 답변</p>
                  </div>
                </Link>
                <Link href="/glossary">
                  <div className="supp-card">
                    <div className="supp-icon">📚</div>
                    <h3>용어사전</h3>
                    <p>리얼워크 핵심 용어 설명</p>
                  </div>
                </Link>
                <Link href="/team">
                  <div className="supp-card">
                    <div className="supp-icon">👥</div>
                    <h3>팀 소개</h3>
                    <p>팀 멤버들의 프로필과 역할</p>
                  </div>
                </Link>
                <Link href="/culture">
                  <div className="supp-card">
                    <div className="supp-icon">🌟</div>
                    <h3>리얼워크 문화</h3>
                    <p>리얼워크만의 독특한 문화</p>
                  </div>
                </Link>
                <Link href="/onboarding-prep">
                  <div className="supp-card">
                    <div className="supp-icon">🎉</div>
                    <h3>온보딩 준비</h3>
                    <p>선임이 준비하는 신입 맞이</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
